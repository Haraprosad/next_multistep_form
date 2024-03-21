"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
// import { FormDataSchema } from '@/lib/schema'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import MultipleSelector from "@/components/ui/multiple-selector";
import MultipleSelectorCreatable from "./SectorSelectionField";
import { Button } from "@/components/ui/button";
import TypesOfAssetsField from "./TypeOfAssetsField";
import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import ImageUpload from "./ImageUploadField";
import CountrySelectField from "./CountrySelectField";
import PotentialAddedField from "./PotentialAddedField";
import FundMaturityField from "./AssetFocusField";
import VentureCapitalFundField from "./VentureCapitalFundField";
import InvestmentStatusField from "./InvestmentStatusField";
import IdealCheckSizeField from "./IdealCheckSizeField";
import CheckSizeRangeField from "./CheckSizeRangeField";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const FormDataSchema = z.object({
  // headline: z.string().min(1),
  // logo: z
  //   .any()
  //   .refine((files) => files?.[0]?.size > 0, "Please upload a picture.")
  //   .refine(
  //     (files) => files?.[0]?.size <= MAX_FILE_SIZE,
  //     `Max image size is 5MB.`
  //   )
  //   .refine(
  //     (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //     "Only .jpg, .jpeg, .png and .webp formats are supported."
  //   ),
  // country: z.string().min(1),
  // state: z.string().min(1),
  // city: z.string().min(1),
  // street: z.string().min(1),
  // zip: z.string().min(1),
});

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  {
    id: "Step 1",
    name: "Focused Sectors",
    fields: ["focusedSectors"],
  },
  {
    id: "Step 2",
    name: "Address",
    fields: ["country", "state", "city", "street", "zip"],
  },
  {
    id: "Step 3",
    name: "Headline",
    fields: ["headline"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["logo"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log1"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log2"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log3"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log4"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log5"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log6"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log7"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log8"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log9"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log10"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log18"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log19"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log11"],
  },
  {
    id: "Step 4",
    name: "Logo",
    fields: ["log12"],
  },
  { id: "Step 3", name: "Complete", fields: ["complete"] },
];

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="bg-[#1F2023] absolute inset-0 p-24 flex flex-col justify-center">
      {/* steps */}
      {/* <nav aria-label='Progress'>
        <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
          {steps.map((step, index) => (
            <li key={step.name} className='md:flex-1'>
              {currentStep > index ? (
                <div className='group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-sky-600 transition-colors '>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className='flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                  aria-current='step'
                >
                  <span className='text-sm font-medium text-sky-600'>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              ) : (
                <div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-gray-500 transition-colors'>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium text-white'>{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav> */}

      {/* Form */}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(processForm)}
      >
        {currentStep === 0 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">1→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  What are the primary sectors in which your firm focuses its
                  investments?*
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  Choose as many as you like
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  {/* <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.firstName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.lastName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div> */}
                  <MultipleSelectorCreatable />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 1 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">2→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Could you specify the types of assets your firm typically
                  invests in?*
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  Choose as many as you like
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <TypesOfAssetsField />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 2 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">3→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Headline for your brand?*
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="headline"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Headline
                    </label>
                    <div className="mt-2">
                      <input
                        id="headline1"
                        type="text"
                        // {...register("headline1")}
                        // autoComplete="headline"
                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                      {/* {errors.headline?.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.headline.message}
                        </p>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 3 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">4→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Upload your logo*
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="headline"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Upload logo
                    </label>
                    <div className="mt-2">
                      {/* <input type="submit"> */}
                      <ImageUpload register={register} errors={errors} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">5→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Describe yourself as an Investor?*
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  How do you invest and how do you add value as an Investor?
                  This will help you to get high acceptance rate from
                  opportunities.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="headline"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Describe
                    </label>
                    <div className="mt-2">
                      <input
                        id="headline"
                        type="text"
                        {...register("headline")}
                        autoComplete="headline"
                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                      {errors.headline?.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.headline.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 5 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">6→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Select Your Country
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <div className="sm:col-span-4">
                    <div>
                      {/* <input type="submit"> */}
                      <CountrySelectField />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 6 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">7→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Potential added value?*
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  Choose as many as you like
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <PotentialAddedField />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 7 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">8→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Fund maturity focus?*
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  Choose as many as you like
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <FundMaturityField />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 8 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">9→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Venture capital fund experience?*
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  How experienced are you in venture capital funds?
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <VentureCapitalFundField />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 9 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">10→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Number of VC fund investments?*
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="headline"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="headline4"
                        type="text"
                        // {...register("headline")}
                        // autoComplete="headline"
                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                      {/* {errors.headline?.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.headline.message}
                        </p>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 10 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">11→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Investment status?*
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  Let us make your profile stand out by showcasing your
                  investment plans.
                </p>
                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <InvestmentStatusField />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 11 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">12→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Check size range?*
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  In which range do you consider to invest into funds?
                </p>
                <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <CheckSizeRangeField />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 12 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-row">
              <div className="text-yellow-200 text-xl font-bold pr-2">13→ </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white">
                  Ideal check size?*
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  What is the ideal check size that you consider?
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <IdealCheckSizeField />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 18 && (
          <motion.div
            initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Address
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    {...register("country")}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  {errors.country?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="street"
                    {...register("street")}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.street?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.street.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="city"
                    {...register("city")}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.city?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="state"
                    {...register("state")}
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.state?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="zip"
                    {...register("zip")}
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.zip?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.zip.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 13 && (
          <div className="ml-12">
            <h2 className="text-5xl mb-8 font-bold leading-7 text-white">
              Complete
            </h2>
            <p className="mt-1 text-2xl leading-6 text-gray-200">
              Thank you for your submission.
            </p>
          </div>
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 ml-12 pt-5">
        <div className="flex items-center justify-center">
          {/* <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button> */}
          <Button
            onClick={prev}
            // disabled={currentStep === 0}
            variant={
              currentStep === 0 ? "disableSelectionType" : "selectionType"
            }
          >
            Prev
          </Button>
          <div className="px-4"></div>
          <Button
            variant={"selectionType"}
            onClick={next}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}
