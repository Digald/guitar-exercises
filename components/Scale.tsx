import React, { useEffect, useState } from "react";
import { positions, keyMaps } from "./utils/positions";

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
        console.log("log not hit");
        return null;
      }
      setVextab(window?.vextab);
      clearInterval(intervalId);
    }, 100);
  }, []);

  useEffect(() => {
    // console.log("log scaleKey", scaleKey);
    // console.log("log scaleType", scaleType);
    // console.log("log keyMap", keyMaps[scaleKey as keyof typeof keyMaps]);
    // console.log("log positions", positions);
    const elementId = document.getElementById("boo");
    if (elementId) elementId.innerHTML = "";

    // Create data string based on key and scale
    let testTab = `
      tabstave notation=true key=${scaleKey} time=18/8
    `;
    keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
      console.log(
        "log position",
        positions[position.position as keyof typeof positions]
      );
      console.log("log start", position.startingFret);
    });
    const data = `
  tabstave notation=true key=${scaleKey} time=18/8

  notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
  notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :q p5/4 |
  notes :8 2/6 4/6 6/6 2/5 4/5 6/5 2/6 4/6 6/6 2/5 4/5 6/5 2/5 4/5 6/5 2/5 4/5 6/5 2/5 4/5 6/5
`;

    if (vextab) {
      const VF = vextab?.Vex?.Flow;
      const renderer = new VF.Renderer(
        document.getElementById("boo"),
        VF.Renderer.Backends.SVG
      );

      // Initialize VexTab artist and parser.
      const artist = new vextab.Artist(10, 10, 750, { scale: 0.8 });
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
