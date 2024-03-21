import React from "react";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

const OPTIONS: Option[] = [
  { label: "$100,000", value: "privateEquity" },
  { label: "$200,000", value: "privateEquity" },
  { label: "$300,000", value: "privateEquity" },
  { label: "$400,000", value: "privateEquity" },
  { label: "$500,000", value: "ventureCapital" },
];

const OPTIONS2: Option[] = [
  { label: "$500,000", value: "ventureCapital" },
  { label: "$400,000", value: "privateEquity" },
  { label: "$300,000", value: "privateEquity" },
  { label: "$200,000", value: "privateEquity" },
  { label: "$100,000", value: "privateEquity" },
];

const CheckSizeRangeField = () => {
  return (
    <div className="w-full">
      {/* <select className="border-yellow-200 p-2 mr-2 border-2 rounded-md w-full">
        <option value="" disabled selected>
          Select
        </option>
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select> */}
      <div>
        <p className="text-base leading-6 text-white mt-6 mb-2">From</p>
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
        <p className="text-base leading-6 text-white mt-6 mb-2">To</p>
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
    </div>
  );
};

export default CheckSizeRangeField;
