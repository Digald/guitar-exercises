import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

function ScaleType({ setScaleType }: ScaleTypeProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScaleTypeInputs>();

  const onSubmit: SubmitHandler<ScaleTypeInputs> = (data) => {
    setScaleType(data?.scaleType);
  };

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <label>Scale Type</label>
      <select {...register("scaleType")}>
        <option value="major">Major</option>
        <option value="minor-pentatonic">Minor Pentatonic</option>
      </select>
    </form>
  );
}

export default ScaleType;
