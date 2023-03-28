export interface Options {
  type?: "asc" | "desc";
  string1?: string;
  string2?: string;
}

export interface ButtonListItem {
  name: string;
  function: Function;
  options?: Options;
}

export type SetExerciseList = (prevState: ButtonListItem[] | Function) => ButtonListItem[];
