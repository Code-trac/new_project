"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    // In a real application, you would fetch data from a database or API here.
    // For this example, we'll use a mock list of teachers.
    const mockTeachers = [
      { id: 1, name: "John Doe", subject: "Math" },
      { id: 2, name: "Jane Smith", subject: "Science" },
    ];

    const results = mockTeachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTeachers(results);
    setNotFound(results.length === 0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold text-foreground mb-4">Search</h1>
      <div className="flex w-full max-w-md space-x-2">
        <Input
          type="text"
          placeholder="Search teachers, subjects, or skills..."
          className="shadow-sm rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch} className="bg-accent text-accent-foreground shadow-md rounded-md hover:bg-accent/80">Search</Button>
      </div>

      {notFound && (
        <p className="mt-4 text-muted-foreground">Teacher not found.</p>
      )}

      {teachers.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-bold text-foreground mb-2">Search Results:</h2>
          <ul>
            {teachers.map((teacher) => (
              <li key={teacher.id} className="text-foreground">
                {teacher.name} - {teacher.subject}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
