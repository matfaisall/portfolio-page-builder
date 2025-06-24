"use client";
import React from "react";

const About = () => {
  const getProfileFromStorage = () => {
    const stored = localStorage.getItem("userProfile");
    return stored ? JSON.parse(stored) : null;
  };

  console.log(getProfileFromStorage());

  return <p>hello</p>;
};

export default About;
