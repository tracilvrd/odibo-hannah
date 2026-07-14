import { Container } from "@/components/layout/container";

import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { NavActions } from "./nav-actions";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Logo />

          <DesktopNav />

          <NavActions />

        </div>
      </Container>
    </header>
  );
}