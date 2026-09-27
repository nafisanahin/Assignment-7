"use client";

import { useEffect, useState } from "react";
import { getProducts, type Product } from "../lib/api";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("পণ্যের তথ্য লোড করা যায়নি।"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="mt-8 text-gray-400">বাজারদর লোড হচ্ছে...</p>;
  }

  if (error) {
    return <p className="mt-8 text-red-400">{error}</p>;
  }

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">আজকের বাজারদর</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="rounded-xl border border-gray-700 bg-[#1b1b1b] p-5"
          >
            <h3 className="text-xl font-semibold">{product.nameBn}</h3>

            <p className="mt-2 text-sm text-gray-400">
              {product.categoryNameBn}
            </p>

            <p className="mt-4 text-lg font-bold text-green-400">
              ৳{product.today} / {product.unit}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
