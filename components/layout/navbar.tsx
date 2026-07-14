import { Container } from "./container";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <h1 className="text-2xl font-bold text-[#D62828]">
            ODIBO HANNAH
          </h1>

          <nav>
            Navbar
          </nav>

        </div>
      </Container>
    </header>
  );
}