import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = { setKey: (value: string) => void };
type Inputs = {
  key: string;
};

const KEYS = ["f", "g", "a", "b♭", "c", "c♯", "d", "e♭", "e"];

function KeySelect({ setKey }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setKey(data?.key);
  };

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <label>Key</label>
      <select {...register("key")}>
        {KEYS.map((key: string) => {
          return (
            <option key={key} value={key}>
              {key.toUpperCase()}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default KeySelect;
