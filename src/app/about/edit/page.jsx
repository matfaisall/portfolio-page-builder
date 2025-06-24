"use client";
import React from "react";
import ProfileLayout from "@/components/layout/ProfileLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CircleX } from "lucide-react";

const EditProfile = () => {
  const router = useRouter();
  const [profile, setProfile] = React.useState({
    name: "",
    title: "",
    description: "",
    image: "",
    background: "",
  });

  const portfolioInitialState = {
    role: "",
    company: "",
    start_date: 0,
    end_date: 0,
    desc: "",
  };

  const [portfolio, setPortfolio] = React.useState([portfolioInitialState]);

  const handleAddPortfolio = () => {
    setPortfolio([...portfolio, portfolioInitialState]);
  };

  const handleRemovePortfolio = (index) => {
    if (portfolio.length > 1) {
      setPortfolio(portfolio.filter((_, i) => i !== index));
    }
  };

  const handlePortfolioChange = (index, key, value) => {
    const newPortfolio = [...portfolio];
    newPortfolio[index] = {
      ...newPortfolio[index],
      [key]: value,
    };
    setPortfolio(newPortfolio);
  };

  console.log(portfolio);

  const PreviewPage = () => {
    return (
      <div className="w-full">
        <h1 className="font-bold text-yellow-700">Preview</h1>
      </div>
    );
  };

  return (
    <div className="mt-6">
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
                <Button
                  className="cursor-pointer"
                  onClick={() => console.log("hello world")}
                >
                  Save
                </Button>
              </div>
            </div>

            <Card className="w-full ">
              <CardHeader>
                <CardTitle>Background Image</CardTitle>
              </CardHeader>
            </Card>
            <Card className="w-full ">
              <CardHeader>
                <CardTitle>Profile Image</CardTitle>
              </CardHeader>
            </Card>

            <Card className="w-full ">
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
                <Card className="w-full " key={index}>
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
                    {/* tambahkan input sampai kapan */}
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
        preview={<PreviewPage />}
      />
    </div>
  );
};

export default EditProfile;
