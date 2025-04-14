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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

const codingSubjects = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "TypeScript",
  "React",
  "Node.js",
  "Angular",
  "Vue.js",
  "HTML/CSS",
  "Data Structures",
  "Algorithms",
  "Databases",
  "Cloud Computing",
];

export default function LoginPage() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const router = useRouter();

  const handleLogin = () => {
    if (fullName && username && password && role && selectedSubjects.length > 0) {
      // Store user data in local storage
      const userData = {
        fullName,
        username,
        password, // Note: Storing passwords in local storage is insecure. Use proper authentication in a real app.
        role,
        selectedSubjects,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("username", username); // Store username separately for Navbar

      router.push("/dashboard");
    } else {
      alert("Please fill in all fields and select at least one area of interest.");
    }
  };

  const handleSubjectChange = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-background">
      <Card className="w-full max-w-md shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="shadow-sm rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow-sm rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-sm rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <Select onValueChange={setRole}>
              <SelectTrigger className="shadow-sm rounded-md">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Areas of Interest:</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {codingSubjects.map((subject) => (
                <label
                  key={subject}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Checkbox
                    checked={selectedSubjects.includes(subject)}
                    onCheckedChange={() => handleSubjectChange(subject)}
                  />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
          </div>
          <Button
            onClick={handleLogin}
            className="bg-accent text-accent-foreground shadow-md rounded-md hover:bg-accent/80"
          >
            Log In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
