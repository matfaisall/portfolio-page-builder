import React from "react";
import { Card } from "@/components/ui/card";
import moment from "moment";

const CardPortfolio = ({ val }) => {
  return (
    <Card className="p-4 rounded-md gap-1 border-1 shadow-sm">
      <h4 className="text-sm font-bold">{val.role || "Your Role"}</h4>
      <p className="text-xs font-semibold">{val.company || "your company"}</p>
      <p className="text-xs font-light">
        {val.start_date === 0
          ? "No Start Date"
          : moment(val.start_date).format("DD MMMM YYYY")}{" "}
        -{" "}
        {val.end_date === 0
          ? "No End Date"
          : moment(val.end_date).format("DD MMMM YYYY")}
      </p>
      <p className="text-xs font-light">{val.desc || "Description"}</p>
    </Card>
  );
};

export default CardPortfolio;
