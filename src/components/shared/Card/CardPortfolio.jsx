import React from "react";
import { Card } from "@/components/ui/card";

const CardPortfolio = ({ val }) => {
  return (
    <Card className="p-4 rounded-md gap-1 border-1 shadow-sm">
      <h4 className="text-sm font-bold">{val.role || "Your Role"}</h4>
      <p className="text-xs font-semibold">{val.company || "your company"}</p>
      <p className="text-xs font-light">
        {val.start_date} - {val.end_date}
      </p>
      <p className="text-xs font-light">{val.desc || "Description"}</p>
    </Card>
  );
};

export default CardPortfolio;
