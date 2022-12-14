import React, { useEffect, useState } from "react";
import { keyMaps } from "./utils/positions";
import {
  ascOrDesc,
  ascAndDesc,
  ascAndDescAlternating,
  ascOrDescCoils,
} from "./utils/exercises";

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
    const data = ascOrDescCoils(scaleKey, keyMaps, "asc");
    console.log('log data', data);
    // const data = `
    //     tabstave notation=true key=F time=18/8
    //     notes :8 1/6 3/6 5/6 1/5 3/5 5/5 2/4 3/4 5/4 2/3 3/3 5/3 3/2 5/2 6/2 3/1 5/1 6/1 |
    //     notes :8 3/6 5/6 6/6 3/5 5/5 7/5 3/4 5/4 7/4 3/3 5/3 7/3 5/2 6/2 8/2 5/1 6/1 8/1 |
    // `;
    // console.log(data);

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
