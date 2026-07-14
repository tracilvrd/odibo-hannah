import { Container } from "./container";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white">
      <Container>
        <div className="flex h-10 items-center justify-between text-xs md:text-sm">
          <p>Premium Quality. Everyday Inspiration.</p>

          <p>
            Fast Delivery Across Nigeria |
            Customer Care: +234 912 314 6458
          </p>
        </div>
      </Container>
    </div>
  );
}