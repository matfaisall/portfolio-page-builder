"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardPortfolio from "@/components/shared/Card/CardPortfolio";
import Image from "next/image";

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
            className="bg-yellow-700 w-full relative h-42 bg-cover bg-center"
            style={{ backgroundImage: `url(${dataProfile?.background}` }} // TODO: rubah ke url
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
                src={dataProfile?.image}
                alt="Profile Image"
                className="h-32 w-32 rounded-full border border-white bg-cover bg-center"
              />
              <AvatarFallback className="h-32 w-32 rounded-full flex items-center justify-center bg-gray-200 text-gray-500 text-xl font-semibold">
                ?
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

        {dataProfile?.portfolio?.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {dataProfile.portfolio.map((val, index) => (
              <div key={index}>
                <CardPortfolio val={val} />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              src="/empty.png"
              alt="Empty portfolio"
              width={80}
              height={80}
            />
            <p className="mt-4 text-gray-500 text-sm">No portfolio found</p>
            <p className="text-gray-500 text-sm">
              Please add your portfolio on the edit profile page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
