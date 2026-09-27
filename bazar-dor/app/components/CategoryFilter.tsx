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
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            selectedCategory === category
              ? "border-green-500 bg-green-500 text-black"
              : "border-gray-700 bg-[#1b1b1b] text-gray-300 hover:border-green-500"
          }`}
        >
          {category === "all" ? "সব পণ্য" : category}
        </button>
      ))}
    </div>
  );
}
