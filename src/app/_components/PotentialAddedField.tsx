import React from "react";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

const OPTIONS: Option[] = [
    { label: "Mentoring", value: "ventureCapital" },
    { label: "Advisory board", value: "privateEquity2" },
    { label: "Fundraising", value: "directCompany3" },
    { label: "M&A", value: "fundOfFunds4" },
    { label: "Hiring", value: "ventureCapital5" },
    { label: "Business contacts", value: "privateEquity6" },
    { label: "Deal flow sharing", value: "directCompany7" },
    { label: "Networking", value: "fundOfFunds8" },
    { label: "Institutional Grade", value: "directCompany9" },
    { label: "Benchmarking", value: "fundOfFunds0" },
  ];
  

const PotentialAddedField = () => {
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

export default PotentialAddedField;
