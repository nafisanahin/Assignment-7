import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7f4] text-[#202820]">
      <Navbar />

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <header className="mb-8 rounded-2xl border border-[#e5ebe5] bg-white p-6 sm:p-8">
          <p className="mb-3 inline-block rounded-full bg-[#e5f5e9] px-3 py-1 text-xs font-medium text-green-700">
            বাজারদর, ১১ অক্টোবর, ২০২৬
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস ও মসলার বাজারদর সহজেই দেখুন।
          </p>
        </header>

        <ProductList />
      </section>
    </main>
  );
}
