import React from "react";
import { useForm } from "react-hook-form";
import "./Profile.module.css";

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First Name"
        {...register("First Name", {})}
      />
      <input
        type="text"
        placeholder="Last Name"
        {...register("Last Name", {})}
      />
      <input type="text" placeholder="E-Mail" {...register("E-Mail", {})} />
      <input type="text" placeholder="Role" {...register("Role", {})} />
      <input type="text" placeholder="Start-Up" {...register("Start-Up", {})} />
      <input
        type="text"
        placeholder="Mentoring"
        {...register("Mentoring", {})}
      />
      <input type="text" placeholder="Location" {...register("Location", {})} />
      <input type="text" placeholder="LNKD" {...register("LNKD", {})} />
      <input type="text" placeholder="FACEBOOK" {...register("FACEBOOK", {})} />
      <input
        type="text"
        placeholder="INSTAGRAM"
        {...register("INSTAGRAM", {})}
      />
      <input type="text" placeholder="GitHub" {...register("GitHub", {})} />
      <input
        type="text"
        placeholder="Expertise"
        {...register("Expertise", {})}
      />
      <input
        type="text"
        placeholder="PhoneNumber"
        {...register("PhoneNumber", {})}
      />
      <textarea {...register("About", {})} />

      <input type="submit" />
    </form>
  );
}
