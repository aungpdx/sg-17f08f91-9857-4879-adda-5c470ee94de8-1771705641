import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}

export default App;