import React from "react";

const ProfileLayout = ({ main, preview }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="col-span-1">{main}</div>
      <div className="col-span-1">{preview}</div>
    </div>
  );
};

export default ProfileLayout;
