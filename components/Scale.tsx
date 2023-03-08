import React, { useEffect, useState } from "react";
import { keyMaps } from "./data/majorPositions";
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
} from "./utils/exercises";
import {
  scaleToneAscOrDesc,
  scaleToneAscAndDesc,
  scaleToneAlternating,
} from "./utils/scaleTones";

declare global {
  interface Window {
    vextab: any;
  }
}

interface ActiveScales {
  asc: boolean;
  desc: boolean;
  ascDesc: boolean;
  alt: boolean;
  coilAsc: boolean;
  coilDesc: boolean;
  coilAscDesc: boolean;
  coilAlt: boolean;
  coil4Asc: boolean;
  coil4Desc: boolean;
  coil4AscDesc: boolean;
  coil4Alt: boolean;
  oneString: boolean;
  twoString: boolean;
  thirdsAsc: boolean;

}

interface ScaleProps {
  scaleKey: string;
  scaleType: string;
  id: string;
}

const Scale = ({ id, scaleKey, scaleType }: ScaleProps) => {
  const [vextab, setVextab] = useState<VexState>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!window?.vextab) {
        return null;
      }
      setVextab(window?.vextab);
      clearInterval(intervalId);
    }, 100);
  }, []);

  useEffect(() => {
    const elementId = document.getElementById(id);
    if (elementId) elementId.innerHTML = "";

    // Create data string based on key and scale
    let data = ascOrDesc(scaleKey, keyMaps, "asc");
    // data += ascAndDesc(scaleKey, keyMaps);
    // const data = ascAndDescAlternating(scaleKey, keyMaps);
    // const data = ascOrDescThreeNoteCoils(scaleKey, keyMaps, "asc");
    // const data = ascAndDescThreeNoteCoils(scaleKey, keyMaps);
    // const data = ascOrDescFourNoteCoils(scaleKey, keyMaps, 'desc');
    // const data = ascAndDescFourNoteCoils(scaleKey, keyMaps);
    // const data = alternatingThreeNoteCoils(scaleKey, keyMaps);
    // const data = alternatingFourNoteCoils(scaleKey, keyMaps);
    // data += singleString(scaleKey, keyMaps, '1');
    // data += twoString(scaleKey, keyMaps, '6', '5');
    // const data = scaleToneAscOrDesc(scaleKey, keyMaps, "asc");
    // const data = scaleToneAscAndDesc(scaleKey, keyMaps);
    // const data = scaleToneAlternating(scaleKey, keyMaps);

    if (vextab) {
      const VF = vextab?.Vex?.Flow;
      const renderer = new VF.Renderer(
        document.getElementById("boo"),
        VF.Renderer.Backends.SVG
      );

      // Initialize VexTab artist and parser.
      const artist = new vextab.Artist(10, 10, window?.innerWidth, {
        scale: 1,
      });
      const tab = new vextab.VexTab(artist);

      tab.parse(data);
      artist.render(renderer);
    }
  }, [scaleKey, scaleType, vextab, id]);

  return (
    <div className="vexbox mt-12">
      <div id={id}></div>
    </div>
  );
};

export default Scale;
