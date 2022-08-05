import React, { useEffect } from "react";
import { Factory, EasyScore, System } from "vexflow";
// import { VexTab, Artist, Vex } from "vextab";
const vextab = require('vextab');

type Props = {
  scaleKey: string;
  scaleType: string;
};

const Scale = (props: Props) => {
  useEffect(() => {
    const outputNode = document.getElementById("output");
    console.log('log VexTab', vextab);
    // const Renderer = Vex.Flow.Renderer;

    // // Create VexFlow Renderer from canvas element with id #boo
    // const renderer = new Renderer(outputNode, Renderer.Backends.SVG);

    // // Initialize VexTab artist and parser.
    // const artist = new Artist(10, 10, 600, { scale: 0.8 });
    // const tab = new VexTab(artist);

    // try {
    //   tab.parse("tabstave").val();
    //   artist.render(renderer);
    // } catch (e) {
    //   console.error(e);
    // }

    return () => {
      if (outputNode) {
        outputNode.textContent = "";
      }
    };
  }, []);

  return <div id="output"></div>;
};

export default Scale;
