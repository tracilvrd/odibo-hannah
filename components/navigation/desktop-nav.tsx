"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/navigation";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`font-medium transition-colors duration-200 ${
              isActive
                ? "text-[#D62828]"
                : "text-gray-700 hover:text-[#D62828]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}