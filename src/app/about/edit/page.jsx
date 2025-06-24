"use client";
import React from "react";
import ProfileLayout from "@/components/layout/ProfileLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import CardPortfolio from "@/components/shared/Card/CardPortfolio";

import useEdit from "./useEdit";

const EditProfile = () => {
  const {
    router,

    profile,
    setProfile,
    portfolio,
    setPortfolio,

    handleAddPortfolio,
    handleRemovePortfolio,
    handlePortfolioChange,
    handleSave,
  } = useEdit();

  const PreviewPage = React.useMemo(() => {
    return (
      <div className="w-full">
        <Card className="rounded-md py-0 pb-6 gap-0 overflow-hidden">
          <div
            className="bg-yellow-700 w-full relative h-32 bg-color"
            style={{ backgroundImage: `url` }} // TODO: rubah ke url
          />
          <div className="flex align-center justify-center w-full mt-[-64px] z-10">
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
          <CardContent className="flex flex-col gap-2 mt-2 px-2">
            <CardTitle className="text-center">
              {profile.name || "Jhon Doe"}
            </CardTitle>
            <CardDescription className="text-center">
              {profile.title || "Your Role"}
            </CardDescription>
            <CardDescription className="text-center">
              {profile.description || "Lorem ipsum dolor sit amet consectetur."}
            </CardDescription>
          </CardContent>
          <hr className="my-4 border-t border-gray-300" />
          <CardContent className="flex flex-col gap-4 px-2">
            <h4 className="text-sm font-semibold text-yellow-700">Portfolio</h4>
            {portfolio?.map((val, index) => (
              <div key={index}>
                <CardPortfolio val={val} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  });

  return (
    <div className="">
      <ProfileLayout
        main={
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-bold text-yellow-700">Editor</h1>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => router.push("/about")}
                >
                  Cancel
                </Button>
                <Button className="cursor-pointer" onClick={handleSave}>
                  Save
                </Button>
              </div>
            </div>

            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>Background Image</CardTitle>
              </CardHeader>
            </Card>
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>Profile Image</CardTitle>
              </CardHeader>
            </Card>

            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <Input
                  type="text"
                  placeholder="Title | Position"
                  value={profile.title}
                  onChange={(e) =>
                    setProfile((prev) => ({ ...prev, title: e.target.value }))
                  }
                />
                <Textarea
                  placeholder="Description"
                  value={profile.description}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
              </CardContent>
            </Card>

            {/* portfolio */}

            {portfolio.map((val, index) => {
              return (
                <Card className="w-full rounded-md" key={index}>
                  <CardHeader className="flex justify-between items-center">
                    <CardTitle>Portfolio {index + 1}</CardTitle>
                    <CircleX
                      size={20}
                      color={portfolio.length === 1 ? "gray" : "red"}
                      onClick={() => handleRemovePortfolio(index)}
                      disabled={portfolio.length === 1}
                      className="cursor-pointer"
                    />
                  </CardHeader>

                  <CardContent className="flex flex-col gap-4">
                    <Input
                      type="text"
                      placeholder="Role"
                      value={val.role}
                      onChange={(e) =>
                        handlePortfolioChange(index, "role", e.target.value)
                      }
                    />
                    <Input
                      type="text"
                      placeholder="Company"
                      value={val.company}
                      onChange={(e) =>
                        handlePortfolioChange(index, "company", e.target.value)
                      }
                    />
                    <div className="flex flex-row justify-between items-center gap-2">
                      <Input
                        type="number"
                        placeholder="Start Date"
                        value={val.start_date}
                        onChange={(e) =>
                          handlePortfolioChange(
                            index,
                            "start_date",
                            e.target.value
                          )
                        }
                      />
                      <Input
                        type="number"
                        placeholder="End Date"
                        value={val.end_date}
                        onChange={(e) =>
                          handlePortfolioChange(
                            index,
                            "end_date",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <Textarea
                      placeholder="Description"
                      value={val.desc}
                      onChange={(e) =>
                        handlePortfolioChange(index, "desc", e.target.value)
                      }
                    />
                  </CardContent>
                </Card>
              );
            })}

            <Button className="cursor-pointer" onClick={handleAddPortfolio}>
              Add Portfolio
            </Button>
          </div>
        }
        preview={PreviewPage}
      />
    </div>
  );
};

export default EditProfile;
