import React, { useEffect, useState } from "react";
import { keyMaps } from "./utils/positions";
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
  twoString
} from "./utils/exercises";
import { scaleToneAscOrDesc, scaleToneAscAndDesc, scaleToneAlternating } from './utils/scaleTones';

declare global {
  interface Window {
    vextab: any;
  }
}

const Scale = ({ scaleKey, scaleType }: ScaleProps) => {
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
    const elementId = document.getElementById("boo");
    if (elementId) elementId.innerHTML = "";

    // Create data string based on key and scale
    // const data = ascOrDesc(scaleKey, keyMaps, "asc");
    // const data = ascAndDesc(scaleKey, keyMaps);
    // const data = ascAndDescAlternating(scaleKey, keyMaps);
    // const data = ascOrDescThreeNoteCoils(scaleKey, keyMaps, "asc");
    // const data = ascAndDescThreeNoteCoils(scaleKey, keyMaps);
    // const data = ascOrDescFourNoteCoils(scaleKey, keyMaps, 'desc');
    // const data = ascAndDescFourNoteCoils(scaleKey, keyMaps);
    const data = alternatingThreeNoteCoils(scaleKey, keyMaps);
    // const data = alternatingFourNoteCoils(scaleKey, keyMaps);
    // const data = singleString(scaleKey, keyMaps, '1');
    // const data = twoString(scaleKey, keyMaps, '6', '5');
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
  }, [scaleKey, scaleType, vextab]);

  return (
    <div className="vexbox">
      <div id="boo"></div>
    </div>
  );
};

export default Scale;
