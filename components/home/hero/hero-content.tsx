import { HeroButtons } from "./hero-buttons";

export function HeroContent() {
  return (
    <div className="max-w-xl">
      <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        Premium Nigerian FMCG Brand
      </span>

      <h1 className="mt-6 font-[family-name:var(--font-poppins)] text-5xl font-bold leading-tight text-foreground lg:text-6xl">
        Quality Products
        <br />
        For Every Home.
      </h1>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Discover premium food, household essentials, and stationery
        products crafted with quality, innovation, and African excellence.
      </p>

      <HeroButtons />
    </div>
  );
}