
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Welcome to SkillSwap Connect
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        A platform for students and teachers to learn and share knowledge for
        free.
      </p>
      <div className="flex space-x-4">
        <Button variant="outline" className="rounded-md shadow-sm">
          <a href="/login">Login</a>
        </Button>
        <Button className="bg-accent text-accent-foreground shadow-md rounded-md hover:bg-accent/80">
          <a href="/search">Search</a>
        </Button>
      </div>
    </div>
  );
}
