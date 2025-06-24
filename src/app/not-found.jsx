"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <Image
        src="/empty.png"
        alt="404 Not Found"
        width={150}
        height={150}
        className="mb-2"
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        404 - Page not found
      </h1>
      <p className="text-gray-600 mb-4">Sorry, the page is not available.</p>
      <Button
        onClick={() => router.push("/")}
        className="bg-yellow-600 text-white"
      >
        Back to home
      </Button>
    </div>
  );
}
