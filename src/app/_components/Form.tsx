"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "dns";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {z} from "zod";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    
});

const steps = [
  { id: "Step 1", name: "Personal Information" },
  { id: "Step 2", name: "Address" },
  { id: "Step 3", name: "Complete" },
];

type FormFields = z.infer<typeof schema>;
const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "test@email.com",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error("The email is already taken!");
    } catch (e) {
      setError("root", { message: "The email is already taken!" });
    }
  };

  return (
    <section>
      <form className="gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
      </form>
    </section>
  );
};

export default Form;
