import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ScaleSelectProps = { setScaleType: (value: string) => void };
type ScaleSelectInputs = {
  scaleSelect: string;
};

function ScaleSelect({ setScaleType }: ScaleSelectProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScaleSelectInputs>();

  const onSubmit: SubmitHandler<ScaleSelectInputs> = (data) => {
    setScaleType(data?.scaleSelect);
  };

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <label>Scale Type</label>
      <select {...register("scaleSelect")}>
        <option value="major">Major</option>
        <option value="minor">Minor Pentatonic</option>
      </select>
    </form>
  );
}

export default ScaleSelect;
