"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve username from local storage on component mount
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("username");
    setUsername(null);
    router.push("/login");
  };

  return (
    <div className="bg-secondary p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="text-lg font-bold mr-4 hover:text-accent">
          Skill Swap
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {username ? (
          <>
            <Button variant="outline" onClick={handleLogout}>
              <UserIcon className="mr-2 h-4 w-4" />
              {username} (Logout)
            </Button>
          </>
        ) : (
          <Link href="/login">
            <Button variant="outline">
              <UserIcon className="mr-2 h-4 w-4" />
              Login
            </Button>
          </Link>
        )}
        <Link href="/search">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
            <SearchIcon className="mr-2 h-4 w-4" />
            Search
          </Button>
        </Link>
      </div>
    </div>
  );
}
