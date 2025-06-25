"use client";
import React from "react";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";

const FileUploader = ({ onFileSelect, label }) => {
  const [fileName, setFileName] = React.useState("");
  const inputId = React.useId();

  const handleFile = (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      onFileSelect?.(base64);
      setFileName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => handleFile(e.target.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <Card className="w-full rounded-md">
      <CardHeader>
        <CardTitle>{label || "File Uploader"}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <div
          className="bg-gray-100 rounded-md"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            type="file"
            id={inputId}
            accept=".png,.jpg,.jpeg"
            onChange={handleChange}
            className="hidden"
          />

          <label
            htmlFor={inputId}
            className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer p-12"
          >
            <p className="font-sm">
              Drag and drop files, or {""}
              <span className="text-blue-500 underline">Browse</span>
            </p>
            <span className="text-xs text-gray-500">
              Supported formats: png, jpg, jpeg
            </span>
            <span className="text-xs text-gray-500">Max size: 1 MB</span>
          </label>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUploader;
