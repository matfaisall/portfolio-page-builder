"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { profileSchema } from "@/schemas";
import { z } from "zod";

const useEdit = () => {
  const router = useRouter();

  const portfolioInitialState = {
    role: "",
    company: "",
    start_date: 0,
    end_date: 0,
    desc: "",
  };

  // Hooks
  const [profile, setProfile] = React.useState({
    name: "",
    title: "",
    description: "",
    image: null,
    background: null,
  });

  const [portfolio, setPortfolio] = React.useState([portfolioInitialState]);
  const [error, setError] = React.useState({});
  //
  console.log(error);

  // console.log("portfolio", portfolio);

  React.useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      const parsedData = JSON.parse(stored);
      setProfile({
        name: parsedData.name || "",
        title: parsedData.title || "",
        description: parsedData.description || "",
        image: parsedData.image || null,
        background: parsedData.background || null,
      });
      setPortfolio(
        parsedData.portfolio?.length > 0
          ? parsedData.portfolio
          : [portfolioInitialState]
      );
    }
  }, []);

  // HANDLER
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

  const handleValidationOnChange = (key, value) => {
    try {
      profileSchema.pick({ [key]: true }).parse({ [key]: value });
      setError((prev) => ({ ...prev, [key]: undefined }));
    } catch (error) {
      setError((prev) => ({ ...prev, [key]: error.errors[0].message }));
    }
  };

  const handleSave = () => {
    try {
      profileSchema.parse(profile);
      setError({});
      const data = {
        ...profile,
        portfolio,
      };

      localStorage.setItem("userProfile", JSON.stringify(data));
      // router.push("/about");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = {};
        error.errors.forEach((err) => {
          fieldError[err.path[0]] = err.message;
        });
        setError(fieldError);
      }
    }
  };

  return {
    router,

    profile,
    setProfile,
    portfolio,
    error,

    handleAddPortfolio,
    handleRemovePortfolio,
    handlePortfolioChange,
    handleValidationOnChange,
    handleSave,
  };
};

export default useEdit;
