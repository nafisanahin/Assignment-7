"use client";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-5 overflow-x-auto whitespace-nowrap border-b border-gray-200 bg-white px-1 py-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            selectedCategory === category
              ? "border-green-600 bg-green-600 text-white"
              : "border-gray-200 bg-white text-gray-700 hover:border-green-500 hover:bg-green-50"
          }`}
        >
          {category === "all"
            ? "📊 সব পণ্য"
            : `${
                category.includes("চাল")
                  ? "🍚"
                  : category.includes("ডাল")
                    ? "🫘"
                    : category.includes("তেল")
                      ? "🛢️"
                      : category.includes("সবজি")
                        ? "🥬"
                        : category.includes("মাছ")
                          ? "🐟"
                          : category.includes("মাংস")
                            ? "🍗"
                            : category.includes("ডিম") ||
                                category.includes("দুধ")
                              ? "🥛"
                              : category.includes("মসলা")
                                ? "🌶️"
                                : "🛒"
              } ${category}`}
        </button>
      ))}
    </div>
  );
}
