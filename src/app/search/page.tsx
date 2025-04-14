
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold text-foreground mb-4">Search</h1>
      <div className="flex w-full max-w-md space-x-2">
        <Input type="text" placeholder="Search teachers, subjects, or skills..." className="shadow-sm rounded-md" />
        <Button className="bg-accent text-accent-foreground shadow-md rounded-md hover:bg-accent/80">Search</Button>
      </div>
    </div>
  );
}
