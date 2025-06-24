import React from "react";

const ProfileLayout = ({ main, preview }) => {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-7">{main}</div>
      <div className="col-span-5">{preview}</div>
    </div>
  );
};

export default ProfileLayout;
