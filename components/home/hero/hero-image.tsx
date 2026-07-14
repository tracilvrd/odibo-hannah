import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-2xl">
        <Image
          src="/images/hero-placeholder.png"
          alt="Odibo Hannah Products"
          width={500}
          height={500}
          priority
          className="h-auto w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
}