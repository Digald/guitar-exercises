import React, { useEffect } from "react";

type Props = {
  scaleKey: string;
  scaleType: string;
};

const Scale = ({ scaleKey, scaleType }: Props) => {
  useEffect(() => {
    console.log("log scaleKey", scaleKey);
    console.log("log scaleType", scaleType);
    const data = `
  tabstave notation=true key=A time=4/4

  notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
  notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :q p5/4
  text :w, |#segno, ,|, :hd, , #tr
`;

    // console.log(window.location.search = `tab=${data.replaceAll(' ', 'X')}`);
  }, [scaleKey, scaleType]);
  return (
    <iframe
      key={`${scaleKey}-${scaleType}`}
      id="output"
      width="100%"
      height="300"
      src="//jsfiddle.net/Digald/vmqnj4u6/40/embedded/result/"
      allowFullScreen={true}
      frameBorder="0"
    ></iframe>
  );
};

export default Scale;
