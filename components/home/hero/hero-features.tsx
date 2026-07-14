import {
  BadgeCheck,
  Gem,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
  },
  {
    icon: Gem,
    title: "Value Addition",
  },
  {
    icon: ShieldCheck,
    title: "Resilience",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
  },
];

export function HeroFeatures() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.title}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="rounded-full border border-primary/20 p-3 text-primary">
              <Icon className="h-5 w-5" />
            </div>

            <span className="text-sm font-medium">
              {feature.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}