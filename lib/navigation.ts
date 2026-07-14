export interface NavigationItem {
  label: string;
  href: string;
  protected?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];