import React from "react";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

const OPTIONS: Option[] = [
    { label: "Venture Capital Funds", value: "ventureCapital" },
    { label: "Private Equity Funds", value: "privateEquity" },
    { label: "Direct Company", value: "directCompany" },
    { label: "Fund of Funds", value: "fundOfFunds" },
  ];
  

const TypesOfAssetsField = () => {
  return (
    <div className="w-full">
      <MultipleSelector
        className="border-yellow-200"
        defaultOptions={OPTIONS}
        placeholder="Type something that does not exist in dropdowns..."
        creatable
        emptyIndicator={
          <p className="text-center text-xl leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
    </div>
  );
};

export default TypesOfAssetsField;
