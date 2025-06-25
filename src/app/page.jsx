"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <Image
        src="/maintenance.png"
        alt="404 Not Found"
        width={150}
        height={150}
        className="mb-2"
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        We're still Working on this page
      </h1>
      <p className="text-gray-600 mb-4">Come back and check it again soon</p>
      <p className="text-gray-400 mb-4 text-sm">
        I do have a page you’ve been waiting for. <br /> Just click the button
        below or hit ‘Profile’ on the navbar above.{" "}
      </p>
      <Button
        onClick={() => router.push("/about")}
        className="bg-yellow-600 text-white cursor-pointer"
      >
        Let's Gooo
      </Button>
    </div>
  );
}
