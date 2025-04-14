"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

const subjects = ["Math", "Science", "English", "History", "Computer Science"];

export default function DashboardPage() {
  const [username, setUsername] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [newInterest, setNewInterest] = useState("");

  useEffect(() => {
    // Retrieve user data from local storage on component mount
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUsername(userData.username);
      setFullName(userData.fullName);
      setInterests(userData.selectedSubjects);
    }
  }, []);

  const addInterest = () => {
    if (newInterest && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      setNewInterest(""); // Clear the input
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setInterests(interests.filter((interest) => interest !== interestToRemove));
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-background rounded-lg shadow-md p-8">
      <Card className="w-full max-w-md shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl">User Dashboard</CardTitle>
          <CardDescription className="text-muted-foreground">
            Welcome, {fullName || username}! This is your profile.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Label htmlFor="interests">Areas of Interest:</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {interests.map((interest) => (
                <div
                  key={interest}
                  className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground flex items-center gap-1"
                >
                  {interest}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeInterest(interest)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-interest">Add New Interest</Label>
            <div className="flex gap-2">
              <Input
                type="text"
                id="new-interest"
                placeholder="Enter your interest"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                className="shadow-sm rounded-md"
              />
              <Button onClick={addInterest} className="bg-accent text-accent-foreground shadow-md rounded-md hover:bg-accent/80">
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
