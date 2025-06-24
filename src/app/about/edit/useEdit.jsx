"use client";
import React from "react";
import { useRouter } from "next/navigation";

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
    image: "",
    background: "",
  });

  const [portfolio, setPortfolio] = React.useState([portfolioInitialState]);

  React.useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      const parsedData = JSON.parse(stored);
      setProfile({
        name: parsedData.name || "",
        title: parsedData.title || "",
        description: parsedData.description || "",
        image: parsedData.image || "",
        background: parsedData.background || "",
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

  const handleSave = () => {
    const data = {
      ...profile,
      portfolio,
    };

    localStorage.setItem("userProfile", JSON.stringify(data));
    router.push("/about");
  };

  return {
    router,

    profile,
    setProfile,
    portfolio,
    setPortfolio,

    handleAddPortfolio,
    handleRemovePortfolio,
    handlePortfolioChange,
    handleSave,
  };
};

export default useEdit;
