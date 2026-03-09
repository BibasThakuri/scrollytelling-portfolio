import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white/90">
      <ScrollyCanvas />
      <Projects />
      
      <footer className="text-center py-10 text-white/40 text-sm">
        © {new Date().getFullYear()} Bibas Malla Thakuri. IT Admin Supervisor & Creative Developer.
      </footer>
    </main>
  );
}
