import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col leading-none transition-opacity hover:opacity-90"
    >
      <span className="font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-wide text-[#D62828]">
        ODIBO
      </span>

      <span className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.35em] text-gray-700">
        HANNAH
      </span>
    </Link>
  );
}