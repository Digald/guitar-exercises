import React, { useEffect, useState } from "react";

type Props = {
  scaleKey: string;
  scaleType: string;
};

const Scale = ({ scaleKey, scaleType }: Props) => {
  const [vextab, setVextab] = useState(null);

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
    console.log("log scaleKey", scaleKey);
    console.log("log scaleType", scaleType);

    // Create data string based on key and scale
    const data = `
  tabstave notation=true key=A time=4/4

  notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
  notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :q p5/4
  text :w, |#segno, ,|, :hd, , #tr
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
