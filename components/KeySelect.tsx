import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const MAJOR_KEYS = [
  "F",
  "F#",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
  "Cb",
  "C",
  "C#",
  "Db",
  "D",
  "Eb",
  "E",
];
const PENTATONIC_KEYS = [
  "F",
  "F#",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
  "C",
  "C#",
  "D",
  "Eb",
  "E",
];

function KeySelect({ setKey, scaleType }: KeySelectProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<KeySelectInputs>();

  const onSubmit: SubmitHandler<KeySelectInputs> = (data) => {
    setKey(data?.key);
  };

  let keys: string[] = [];
  if (scaleType === "major") {
    keys = MAJOR_KEYS;
  } else if (scaleType === "minor-pentatonic") {
    keys = PENTATONIC_KEYS;
  }

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <label>Key</label>
      <select {...register("key")}>
        {keys.map((key: string) => {
          return (
            <option key={key} value={key}>
              {key}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default KeySelect;
