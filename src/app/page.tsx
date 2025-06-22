import FeaturedProducts from "../../components/FeaturedProducts";
import BlogSlider from "../../components/BlogSlider";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist bg-gymbeam-light">
      <main className="flex flex-col gap-[32px] w-full max-w-7xl mx-auto">
        <FeaturedProducts />
        <BlogSlider />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
