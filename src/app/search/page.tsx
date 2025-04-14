"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [teachers, setTeachers] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [selectedTeacherEmail, setSelectedTeacherEmail] = useState<string | null>(null);

  const subjects = ["Math", "Science", "English", "History", "Computer Science"];

  const mockTeachers = [
    { id: 1, name: "John Doe", subject: "Math", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", subject: "Science", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", subject: "English", email: "alice.johnson@example.com" },
    { id: 4, name: "Bob Williams", subject: "History", email: "bob.williams@example.com" },
    { id: 5, name: "Charlie Brown", subject: "Computer Science", email: "charlie.brown@example.com" },
    { id: 6, name: "Diana Miller", subject: "Math", email: "diana.miller@example.com" },
    { id: 7, name: "Eve Davis", subject: "Science", email: "eve.davis@example.com" },
  ];

  const handleSearch = () => {
    let results = mockTeachers;

    if (searchTerm) {
      results = results.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSubjects.length > 0) {
      results = results.filter((teacher) =>
        selectedSubjects.includes(teacher.subject)
      );
    }

    setTeachers(results);
    setNotFound(results.length === 0);
  };

  const handleSubjectChange = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const handleConnect = (email: string) => {
    setSelectedTeacherEmail(email);
  };

  const closeDialog = () => {
    setSelectedTeacherEmail(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-background rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold text-foreground mb-4">Search</h1>
      <div className="flex flex-col w-full max-w-md space-y-2">
        <Input
          type="text"
          placeholder="Search teachers by name..."
          className="shadow-sm rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div>
          <Label>Select Subjects:</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {subjects.map((subject) => (
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
          onClick={handleSearch}
          className="bg-accent text-accent-foreground shadow-md rounded-md hover:bg-accent/80 mt-4"
        >
          Search
        </Button>
      </div>

      {notFound && (
        <p className="mt-4 text-muted-foreground">Teacher not found.</p>
      )}

      {teachers.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-bold text-foreground mb-2">
            Search Results:
          </h2>
          <ul>
            {teachers.map((teacher) => (
              <li key={teacher.id} className="text-foreground flex items-center justify-between py-2 border-b">
                <span>
                  {teacher.name} - {teacher.subject}
                </span>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm" onClick={() => handleConnect(teacher.email)}>
                      Connect
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Connect with {teacher.name}</AlertDialogTitle>
                      <AlertDialogDescription>
                        Here is the email address of {teacher.name}:
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="mb-4">
                      <p>Email: {teacher.email}</p>
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel onClick={closeDialog}>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Okay</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
