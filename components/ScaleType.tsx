import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = { setScaleType: (value: string) => void };
type Inputs = {
  scaleType: string;
};

function ScaleType({ setScaleType }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
