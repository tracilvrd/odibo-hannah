import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function NavActions() {
  return (
    <div className="flex items-center gap-5">

      {/* Search */}

      <button
        aria-label="Search"
        className="transition hover:text-[#D62828]"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Account */}

      <Link
        href="/account"
        className="transition hover:text-[#D62828]"
      >
        <User className="h-5 w-5" />
      </Link>

      {/* Cart */}

      <Link
        href="/cart"
        className="relative transition hover:text-[#D62828]"
      >
        <ShoppingCart className="h-5 w-5" />

        <Badge
          className="absolute -right-3 -top-3
                     h-5 w-5 rounded-full
                     bg-[#D62828]
                     p-0
                     flex
                     items-center
                     justify-center"
        >
          0
        </Badge>
      </Link>
    </div>
  );
}