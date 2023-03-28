import { ButtonListItem } from "../utils/types";
import {
  ascOrDesc,
  ascAndDesc,
  ascAndDescAlternating,
  ascOrDescThreeNoteCoils,
  ascAndDescThreeNoteCoils,
  alternatingThreeNoteCoils,
  ascOrDescFourNoteCoils,
  ascAndDescFourNoteCoils,
  alternatingFourNoteCoils,
  singleString,
  twoString,
} from "../utils/exercises";
import {
  scaleToneAscOrDesc,
  scaleToneAscAndDesc,
  scaleToneAlternating,
} from "../utils/scaleTones";

export const buttonList: ButtonListItem[] = [
  {
    name: "Ascending",
    function: ascOrDesc,
    options: { type: "asc" },
  },
  {
    name: "Descending",
    function: ascOrDesc,
    options: { type: "desc" },
  },
  {
    name: "Ascending & Descending",
    function: ascAndDesc,
    options: {},
  },
  {
    name: "Alternating",
    function: ascAndDescAlternating,
    options: {},
  },
  {
    name: "Three Note Coils Asc",
    function: ascOrDescThreeNoteCoils,
    options: { type: "asc" },
  },
  {
    name: "Three Note Coils Desc",
    function: ascOrDescThreeNoteCoils,
    options: { type: "desc" },
  },
  {
    name: "Three Note Coils Asc & Desc ",
    function: ascAndDescThreeNoteCoils,
    options: {},
  },
  {
    name: "Three Note Coils Alternating ",
    function: alternatingThreeNoteCoils,
    options: {},
  },
  {
    name: "Four Note Coils Asc",
    function: ascOrDescFourNoteCoils,
    options: { type: "asc" },
  },
  {
    name: "Four Note Coils Desc",
    function: ascOrDescFourNoteCoils,
    options: { type: "desc" },
  },
  {
    name: "Four Note Coils Asc & Desc ",
    function: ascAndDescFourNoteCoils,
    options: {},
  },
  {
    name: "Four Note Coils Alternating ",
    function: alternatingFourNoteCoils,
    options: {},
  },
  {
    name: "Single String",
    function: singleString,
    options: {},
  },
  {
    name: "Two String",
    function: twoString,
    options: {},
  },
  {
    name: "Scale Tones Asc",
    function: scaleToneAscOrDesc,
    options: { type: "asc" },
  },
  {
    name: "Scale Tones Desc",
    function: scaleToneAscOrDesc,
    options: { type: "desc" },
  },
  {
    name: "Scale Tones Asc & Desc",
    function: scaleToneAscAndDesc,
    options: {},
  },
  {
    name: "Scale Tones Alternating",
    function: scaleToneAlternating,
    options: {},
  },
];
