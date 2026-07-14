import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col">
        <span className="font-bold text-xl text-[#D62828]">
          ODIBO
        </span>

        <span className="text-xs tracking-[0.3em]">
          HANNAH
        </span>
      </div>
    </Link>
  );
}