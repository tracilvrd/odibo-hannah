import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Link href="/shop">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90"
        >
          Shop Now
        </Button>
      </Link>

      <Link href="/about">
        <Button
          size="lg"
          variant="outline"
        >
          Learn More
        </Button>
      </Link>
    </div>
  );
}