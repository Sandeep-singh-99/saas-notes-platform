"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LayoutDashboard, Plus, FileText, Eye, Edit, Trash2, ArrowUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden m-4">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px]">
          <DashboardSidebar closeSheet={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:block h-screen w-[250px] border-r bg-background">
        <DashboardSidebar />
      </div>
    </div>
  );
};

export default Sidebar;

function DashboardSidebar({ closeSheet }: { closeSheet?: () => void }) {
  return (
    <div className="h-full px-4 py-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href={"/dashboard"}>
          <span className="text-3xl font-bold text-indigo-600">MultiNotes</span>
        </Link>
      </div>

      <nav className="space-y-1 flex-1">
        <Link href={"/dashboard/create-note"}>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={closeSheet}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Note
          </Button>
        </Link>

        <Link href={"/dashboard/notes-list"}>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={closeSheet}
          >
            <FileText className="mr-2 h-4 w-4" />
            Notes List
          </Button>
        </Link>

        <Link href={"/dashboard/upgrade"}>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={closeSheet}
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Upgrade Plan
          </Button>
        </Link>
      </nav>

      <div className="mt-auto">
        <Button variant="outline" className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
}
