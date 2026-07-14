import { Hero } from "@/components/home/hero";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/navigation/navbar";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}