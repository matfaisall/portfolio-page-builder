"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardPortfolio from "@/components/shared/Card/CardPortfolio";

const About = () => {
  const getProfileFromStorage = () => {
    const stored = localStorage.getItem("userProfile");
    return stored ? JSON.parse(stored) : null;
  };

  const dataProfile = getProfileFromStorage();

  return (
    <div className="py-8">
      <div className="w-full flex flex-col gap-4">
        <Card className="rounded-md py-0 gap-0 overflow-hidden">
          <div
            className="bg-yellow-700 w-full relative h-42 bg-color"
            style={{ backgroundImage: `url` }} // TODO: rubah ke url
          >
            <Link
              href="/about/edit"
              className="absolute bottom-[-45] right-2 z-20"
            >
              <Button
                variant="outline"
                className="flex items-center gap-1 text-black bg-white/80 hover:bg-white"
              >
                <Pencil size={14} />
                Edit Profile
              </Button>
            </Link>
          </div>

          <div className="flex pl-4 mt-[-64px] z-10">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="h-32 w-32 rounded-full border-1 border-white"
              />
              <AvatarFallback className="flex items-center justify-center h-full w-full text-xs font-semibold bg-white text-yellow-700">
                MR
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex justify-between p-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold text-yellow-700 whitespace-nowrap">
                {dataProfile?.name || "Edit Your Name"}
              </h1>
              <p className="text-sm max-w-[60%] text-muted-foreground">
                {dataProfile?.description || "Write your description here"}
              </p>
            </div>

            <h4 className="text-medium font-semibold whitespace-nowrap">
              {dataProfile?.title || "Edit Your Title"}
            </h4>
          </div>
        </Card>

        <h1 className="text-2xl font-semibold text-yellow-700">Portfolio</h1>

        <div className="grid grid-cols-2 gap-4">
          {dataProfile?.portfolio
            ? dataProfile?.portfolio?.map((val, index) => (
                <div key={index}>
                  <CardPortfolio val={val} />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default About;
