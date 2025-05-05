'use client';

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <Button
        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-md
                   hover:bg-accent hover:text-accent-foreground
                   transition-all duration-300 ease-in-out transform hover:scale-105
                   text-lg font-medium" // Added font styling
      >
        Hello World
      </Button>
    </main>
  );
}
