import React from "react";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

const OPTIONS: Option[] = [
    { label: "<1 year", value: "ventureCapital" },
    { label: "1-5 years", value: "privateEquity" },
    { label: "5+ years", value: "directCompany" },
  ];
  

const VentureCapitalFundField = () => {
  return (
    <div className="w-full">
      <select
        className="border-yellow-200 p-2 mr-2 border-2 rounded-md w-full"
      >
        <option value="" disabled selected>
          Select
        </option>
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default VentureCapitalFundField;
