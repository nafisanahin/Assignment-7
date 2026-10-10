export const API_BASE_URL = "https://openapi.programming-hero.com/api/bazardor";

export interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: Product[] = await response.json();

  console.log("First product:", data[0]);
  console.log("First product image URL:", data[0]?.image);
  console.table(
    data.map((p) => ({
      nameBn: p.nameBn,
      category: p.category,
      categoryIcon: p.categoryIcon,
    })),
  );
  return data;
}
