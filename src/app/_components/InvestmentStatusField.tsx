import React from "react";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

const OPTIONS: Option[] = [
  { label: "Actively investing", value: "ventureCapital" },
  { label: "Not investing", value: "privateEquity" },
];

const OPTIONS2: Option[] = [
  { label: "$500,000", value: "ventureCapital" },
  { label: "$400,000", value: "privateEquity" },
  { label: "$300,000", value: "privateEquity" },
  { label: "$200,000", value: "privateEquity" },
  { label: "$100,000", value: "privateEquity" },
];
const OPTIONS3: Option[] = [
  { label: "Years 1", value: "ventureCapital" },
  { label: "Years 2", value: "privateEquity" },
  { label: "Years 3", value: "privateEquity" },
  { label: "Years 4", value: "privateEquity" },
  { label: "Years 5", value: "privateEquity" },
];

const InvestmentStatusField = () => {
  return (
    <div className="w-full">
      <select className="border-yellow-200 p-2 mr-2 border-2 rounded-md w-full">
        <option value="" disabled selected>
          Select
        </option>
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        <p className="text-base leading-6 text-gray-300 mt-6 mb-2">
          How much do you plan to invest into venture capital funds in USD?
        </p>
        <select className="border-yellow-200 p-2 mr-2 border-2 rounded-md w-full">
          <option value="" disabled selected>
            Select
          </option>
          {OPTIONS2.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-base leading-6 text-gray-300 mt-6 mb-2">
          In what timeframe do you plan to invest the above amount?
        </p>
        <select className="border-yellow-200 p-2 mr-2 border-2 rounded-md w-full">
          <option value="" disabled selected>
            Select
          </option>
          {OPTIONS3.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InvestmentStatusField;
