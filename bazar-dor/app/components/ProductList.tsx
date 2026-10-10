"use client";

import { useEffect, useState } from "react";
import { getProducts, type Product } from "../lib/api";
import CategoryFilter from "./CategoryFilter";

function getProductEmoji(product: Product): string {
  const name = product.nameBn.trim();

  // চাল
  if (name.includes("চাল")) return "🍚";

  // ডাল
  if (name.includes("ডাল") || name.includes("ছোলা")) {
    return "🫘";
  }

  // তেল
  if (name.includes("তেল")) return "🫙";

  // সবজি
  if (name.includes("আলু")) return "🥔";
  if (name.includes("পেঁয়াজ") || name.includes("পেঁয়াজ")) return "🧅";
  if (name.includes("কাঁচামরিচ")) return "🌶️";
  if (name.includes("বেগুন")) return "🍆";
  if (name.includes("ঢেঁড়স") || name.includes("ঢেঁড়স")) return "🥬";

  // মাছ
  if (name.includes("চিংড়ি") || name.includes("চিংড়ি")) return "🦐";
  if (
    name.includes("মাছ") ||
    name.includes("তেলাপিয়া") ||
    name.includes("তেলাপিয়া")
  ) {
    return "🐟";
  }

  // মাংস
  if (name.includes("হাঁসের মাংস")) return "🦆";
  if (name.includes("গরুর মাংস")) return "🥩";
  if (name.includes("খাসির মাংস")) return "🍖";
  if (name.includes("মুরগির মাংস")) return "🍗";

  // ডিম ও দুগ্ধজাত পণ্য
  if (name.includes("ডিম")) return "🥚";
  if (name.includes("দুধ")) return "🥛";
  if (name.includes("দই")) return "🥣";
  if (name.includes("মাখন")) return "🧈";

  // মসলা
  if (name.includes("আদা")) return "🫚";
  if (name.includes("রসুন")) return "🧄";
  if (name.includes("মরিচ গুঁড়া") || name.includes("মরিচ গুঁড়া")) return "🌶️";
  if (name.includes("ধনেপাতা")) return "🌿";

  return product.categoryIcon || "🛒";
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    "all",
    ...Array.from(new Set(products.map((product) => product.categoryNameBn))),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.categoryNameBn === selectedCategory,
        );

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
      <h2 className="mb-6 text-xl font-bold text-white">🔥 আজকের বাজারদর</h2>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="flex min-h-20 items-center gap-3 rounded-xl border border-gray-200 bg-[#f8faf8] p-3 text-gray-900 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eef3ed] text-2xl">
              {getProductEmoji(product)}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-bold">{product.nameBn}</h3>

              <p className="mt-0.5 text-xs text-gray-500">
                প্রতি {product.unit}
              </p>

              <p className="mt-2 text-xs text-gray-500">আজকের বাজার দর</p>

              <div className="mt-0.5 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-bold">৳{product.today} টাকা</p>

                <span
                  className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                    product.change.dir === "up"
                      ? "bg-red-50 text-red-600"
                      : product.change.dir === "down"
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {product.change.dir === "up"
                    ? "▲"
                    : product.change.dir === "down"
                      ? "▼"
                      : "—"}{" "}
                  {Math.abs(product.change.pct)}%
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
