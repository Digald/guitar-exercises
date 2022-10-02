import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ScaleType from "./ScaleType";

type Props = { setKey: (value: string) => void; scaleType: string };
type Inputs = {
  key: string;
};

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

function KeySelect({ setKey, scaleType }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
