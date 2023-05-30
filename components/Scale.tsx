import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import { keyMaps } from "./data/majorPositions";
import { Options } from "./utils/types";

declare global {
  interface Window {
    vextab: any;
  }
}

interface ScaleProps {
  id: string;
  parseScale: Function;
  options: Options;
  scaleKey: string;
  scaleName: string;
}

const Scale = ({
  id,
  parseScale,
  options,
  scaleKey,
  scaleName,
}: ScaleProps) => {
  const [vextab, setVextab] = useState<VexState>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const data = parseScale(scaleKey, keyMaps, options);

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

    if (vextab && elementId) {
      const VF = vextab?.Vex?.Flow;
      const renderer = new VF.Renderer(elementId, VF.Renderer.Backends.SVG);

      // Initialize VexTab artist and parser.
      const artist = new vextab.Artist(10, 10, window?.innerWidth, {
        scale: 1,
      });
      const tab = new vextab.VexTab(artist);

      tab.parse(data);
      artist.render(renderer);
    }
  }, [vextab, id, data, windowSize]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 200); // Adjust debounce time as needed

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="vexbox mt-12">
      <h2 className="text-4xl capitalize text-center">{scaleName}</h2>
      <div id={id}></div>
    </div>
  );
};

export default Scale;
