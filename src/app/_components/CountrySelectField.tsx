import { count } from "console";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const countriesForEurope = [
  { label: "Albania", value: "albania" },
  { label: "Andorra", value: "andorra" },
  { label: "Austria", value: "austria" },
  { label: "Belarus", value: "belarus" },
  { label: "Belgium", value: "belgium" },
  { label: "Bosnia and Herzegovina", value: "bosnia_and_herzegovina" },
  { label: "Bulgaria", value: "bulgaria" },
  { label: "Croatia", value: "croatia" },
  { label: "Cyprus", value: "cyprus" },
  { label: "Czech Republic", value: "czech_republic" },
  { label: "Denmark", value: "denmark" },
  { label: "Estonia", value: "estonia" },
  { label: "Finland", value: "finland" },
  { label: "France", value: "france" },
  { label: "Germany", value: "germany" },
  { label: "Greece", value: "greece" },
  { label: "Hungary", value: "hungary" },
  { label: "Iceland", value: "iceland" },
  { label: "Ireland", value: "ireland" },
  { label: "Italy", value: "italy" },
  { label: "Kosovo", value: "kosovo" },
  { label: "Latvia", value: "latvia" },
  { label: "Liechtenstein", value: "liechtenstein" },
  { label: "Lithuania", value: "lithuania" },
  { label: "Luxembourg", value: "luxembourg" },
  { label: "Malta", value: "malta" },
  { label: "Moldova", value: "moldova" },
  { label: "Monaco", value: "monaco" },
  { label: "Montenegro", value: "montenegro" },
  { label: "Netherlands", value: "netherlands" },
  { label: "North Macedonia", value: "north_macedonia" },
  { label: "Norway", value: "norway" },
  { label: "Poland", value: "poland" },
  { label: "Portugal", value: "portugal" },
  { label: "Romania", value: "romania" },
  { label: "Russia", value: "russia" },
  { label: "San Marino", value: "san_marino" },
  { label: "Serbia", value: "serbia" },
  { label: "Slovakia", value: "slovakia" },
];

const countriesForNorthAmerica = [
  { label: "Antigua and Barbuda", value: "antigua_and_barbuda" },
  { label: "Bahamas", value: "bahamas" },
  { label: "Barbados", value: "barbados" },
  { label: "Belize", value: "belize" },
  { label: "Canada", value: "canada" },
  { label: "Costa Rica", value: "costa_rica" },
  { label: "Cuba", value: "cuba" },
  { label: "Dominica", value: "dominica" },
  { label: "Dominican Republic", value: "dominican_republic" },
  { label: "El Salvador", value: "el_salvador" },
  { label: "Grenada", value: "grenada" },
  { label: "Guatemala", value: "guatemala" },
  { label: "Haiti", value: "haiti" },
  { label: "Honduras", value: "honduras" },
  { label: "Jamaica", value: "jamaica" },
  { label: "Mexico", value: "mexico" },
  { label: "Nicaragua", value: "nicaragua" },
  { label: "Panama", value: "panama" },
];

const countriesForMiddleEast = [
  { label: "Afghanistan", value: "afghanistan" },
  { label: "Bahrain", value: "bahrain" },
  { label: "Cyprus", value: "cyprus" },
  { label: "Egypt", value: "egypt" },
  { label: "Iran", value: "iran" },
  { label: "Iraq", value: "iraq" },
  { label: "Israel", value: "israel" },
  { label: "Jordan", value: "jordan" },
  { label: "Kuwait", value: "kuwait" },
  { label: "Lebanon", value: "lebanon" },
  { label: "Oman", value: "oman" },
  { label: "Palestine", value: "palestine" },
  { label: "Qatar", value: "qatar" },
  { label: "Saudi Arabia", value: "saudi_arabia" },
  { label: "Syria", value: "syria" },
  { label: "Turkey", value: "turkey" },
  { label: "United Arab Emirates", value: "united_arab_emirates" },
  { label: "Yemen", value: "yemen" },
];

const countriesForAfrica = [
  { label: "Algeria", value: "algeria" },
  { label: "Angola", value: "angola" },
  { label: "Benin", value: "benin" },
  { label: "Botswana", value: "botswana" },
  { label: "Burkina Faso", value: "burkina_faso" },
  { label: "Burundi", value: "burundi" },
  { label: "Cabo Verde", value: "cabo_verde" },
  { label: "Cameroon", value: "cameroon" },
  { label: "Central African Republic", value: "central_african_republic" },
  { label: "Chad", value: "chad" },
  { label: "Comoros", value: "comoros" },
  {
    label: "Democratic Republic of the Congo",
    value: "democratic_republic_of_the_congo",
  },
  { label: "Djibouti", value: "djibouti" },
  { label: "Egypt", value: "egypt" },
  { label: "Equatorial Guinea", value: "equatorial_guinea" },
  { label: "Eritrea", value: "eritrea" },
  { label: "Eswatini", value: "eswatini" },
  { label: "Ethiopia", value: "ethiopia" },
];

const countriesForSouthAmerica = [
  { label: "Argentina", value: "argentina" },
  { label: "Bolivia", value: "bolivia" },
  { label: "Brazil", value: "brazil" },
  { label: "Chile", value: "chile" },
  { label: "Colombia", value: "colombia" },
  { label: "Ecuador", value: "ecuador" },
  { label: "Guyana", value: "guyana" },
  { label: "Paraguay", value: "paraguay" },
  { label: "Peru", value: "peru" },
  { label: "Suriname", value: "suriname" },
  { label: "Uruguay", value: "uruguay" },
  { label: "Venezuela", value: "venezuela" },
  { label: "Antigua and Barbuda", value: "antigua_and_barbuda" },
  { label: "Bahamas", value: "bahamas" },
  { label: "Barbados", value: "barbados" },
  { label: "Belize", value: "belize" },
  { label: "Canada", value: "canada" },
  { label: "Costa Rica", value: "costa_rica" },
];

const CountrySelectField = () => {
  const [selectedForEurope, setSelectedForEurope] = useState([]);
  const [selectedForNorthAmerica, setSelectedForNorthAmerica] = useState([]);
  const [selectedForMiddleEast, setSelectedForMiddleEast] = useState([]);
  const [selectedForAsia, setSelectedForAsia] = useState([]);
  const [selectedForAustralia, setSelectedForAustralia] = useState([]);
  const [selectedForPacific, setSelectedForPacific] = useState([]);
  const [selectedForSouthAmerica, setSelectedForSouthAmerica] = useState([]);
  const [selectedForAfrica, setSelectedForAfrica] = useState([]);

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <label
          htmlFor="headline"
          className="block text-sm font-medium leading-6 text-white"
        >
          Europe
        </label>
        <div className="mt-2 min-w-[300px]">
          <MultiSelect
            options={countriesForEurope}
            value={selectedForEurope}
            onChange={setSelectedForEurope}
            labelledBy="Select"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="headline"
          className="block text-sm font-medium leading-6 text-white"
        >
          North America
        </label>
        <div className="mt-2">
          <MultiSelect
            options={countriesForNorthAmerica}
            value={selectedForNorthAmerica}
            onChange={setSelectedForNorthAmerica}
            labelledBy="Select"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="headline"
          className="block text-sm font-medium leading-6 text-white"
        >
          Middle East
        </label>
        <div className="mt-2">
          <MultiSelect
            options={countriesForMiddleEast}
            value={selectedForMiddleEast}
            onChange={setSelectedForMiddleEast}
            labelledBy="Select"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="headline"
          className="block text-sm font-medium leading-6 text-white"
        >
          Asia
        </label>
        <div className="mt-2">
          <MultiSelect
            options={countriesForMiddleEast} //todo: replace with countriesForAsia
            value={selectedForAsia}
            onChange={setSelectedForAsia}
            labelledBy="Select"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="headline"
          className="block text-sm font-medium leading-6 text-white"
        >
          Australia
        </label>
        <div className="mt-2">
          <MultiSelect
            options={countriesForAfrica} //todo: replace with countriesForAustralia
            value={selectedForAustralia}
            onChange={setSelectedForAustralia}
            labelledBy="Select"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="headline"
          className="block text-sm font-medium leading-6 text-white"
        >
          Pacific
        </label>
        <div className="mt-2">
          <MultiSelect
            options={countriesForAfrica} //todo: replace with countriesForPacific
            value={selectedForPacific}
            onChange={setSelectedForPacific}
            labelledBy="Select"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="headline"
          className="block text-sm font-medium leading-6 text-white"
        >
          South America
        </label>
        <div className="mt-2">
          <MultiSelect
            options={countriesForAfrica} //todo: replace with countriesForSouthAmerica
            value={selectedForSouthAmerica}
            onChange={setSelectedForSouthAmerica}
            labelledBy="Select"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="headline"
          className="block text-sm font-medium leading-6 text-white"
        >
          Africa
        </label>
        <div className="mt-2">
          <MultiSelect
            options={countriesForAfrica}
            value={selectedForAfrica}
            onChange={setSelectedForAfrica}
            labelledBy="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default CountrySelectField;
