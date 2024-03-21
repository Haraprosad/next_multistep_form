import React from "react";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

const OPTIONS: Option[] = [
    { label: "AgTech", value: "agTech" },
    { label: "B2C", value: "b2c" },
    { label: "ClimateTech", value: "climateTech" },
    { label: "Cyber Security", value: "cyberSecurity" },
    { label: "DeFi", value: "deFi" },
    { label: "EdTech", value: "edTech" },
    { label: "eSports", value: "eSports" },
    { label: "Space Tech", value: "spaceTech" },
    { label: "Web3", value: "web3" },
    { label: "AR/VR", value: "arVr" },
    { label: "BioTech", value: "biotech" },
    { label: "Consumer Tech", value: "consumerTech" },
    { label: "Digital Health", value: "digitalHealth" },
    { label: "Energy Tech", value: "energyTech" },
    { label: "Gaming", value: "gaming" },
    { label: "SaaS", value: "saas" },
    { label: "Other", value: "other" },
  ];
  

const MultipleSelectorCreatable = () => {
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

export default MultipleSelectorCreatable;
