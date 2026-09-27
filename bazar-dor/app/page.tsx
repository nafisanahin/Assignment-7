import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      <section className="px-6 py-16">
        <h1 className="text-4xl font-bold text-green-500">বাজার দর</h1>

        <p className="mt-4 text-lg">প্রতিদিনের বাজারদর জানুন সহজেই।</p>
      </section>
    </main>
  );
}
