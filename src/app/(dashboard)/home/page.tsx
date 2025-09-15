"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Edit, Trash2, Plus } from "lucide-react";

interface Note {
  id: number;
  title: string;
  content: string;
}

const sampleNotes: Note[] = [
  { id: 1, title: "Meeting Notes", content: "Discuss project deadlines..." },
  { id: 2, title: "Ideas", content: "New SaaS feature ideas..." },
];

export default function Dashboard() {
  const [notes, setNotes] = useState<Note[]>(sampleNotes);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (currentNote) {
      // Update note
      setNotes(
        notes.map((note) =>
          note.id === currentNote.id ? { ...note, title, content } : note
        )
      );
    } else {
      // Create note
      setNotes([...notes, { id: Date.now(), title, content }]);
    }
    setCurrentNote(null);
    setTitle("");
    setContent("");
  };

  const handleEdit = (note: Note) => {
    setCurrentNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-indigo-50">
      <h1 className="text-3xl font-bold mb-6 text-zinc-900">Dashboard</h1>

      <div className="flex justify-end mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Note
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-96 p-6">
            <h2 className="text-2xl font-bold mb-4">
              {currentNote ? "Edit Note" : "Create Note"}
            </h2>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-4"
            />
            <Textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mb-4"
            />
            <Button
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
              onClick={handleSave}
            >
              {currentNote ? "Update" : "Create"}
            </Button>
          </SheetContent>
        </Sheet>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <Card key={note.id} className="hover:shadow-lg transition">
            <CardHeader className="flex justify-between items-start mb-2">
              <CardTitle>{note.title}</CardTitle>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => handleEdit(note)}>
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600"
                  onClick={() => handleDelete(note.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-700">{note.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
