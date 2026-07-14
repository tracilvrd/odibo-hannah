import { HeroButtons } from "./hero-buttons";
import { HeroFeatures } from "./hero-features";

export function HeroContent() {
  return (
    <div className="max-w-xl">
      <p className="font-semibold uppercase tracking-[0.3em] text-primary">
        Premium Quality
      </p>

      <h1 className="mt-5 font-heading text-6xl font-extrabold leading-none">
        Premium Quality.
        <br />
        <span className="text-primary">
          Everyday Inspiration.
        </span>
      </h1>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        High-quality food, household and stationery
        products made for every home.
        Made in Nigeria.
        Made to inspire.
      </p>

      <HeroButtons />

      <HeroFeatures />
    </div>
  );
}