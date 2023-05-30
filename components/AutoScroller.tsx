import React, { useState, useEffect } from "react";

const AutoScroller: React.FC = () => {
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;

    if (isScrolling) {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, scrollSpeed);
      }, 100); // Adjust time interval as needed
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval); // Cleanup on unmount
      }
    };
  }, [scrollSpeed, isScrolling]); // Rerun effect when scrollSpeed or isScrolling changes

  return (
    <div className="flex flex-col fixed bottom-0 right-0 text-white rounded p-2.5 text-white bg-[#0093E9] hover:bg-[#0093E9] focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#0093E9] dark:hover:bg-[#0093E9] focus:outline-none dark:focus:ring-blue-800">
      <button onClick={() => setScrollSpeed((prevSpeed) => prevSpeed + 1)}>
        +
      </button>
      <button onClick={() => setIsScrolling((prevState) => !prevState)}>
        {isScrolling ? `Stop (${scrollSpeed})` : `Scroll (${scrollSpeed})`}
      </button>
      <button onClick={() => setScrollSpeed((prevSpeed) => prevSpeed - 1)}>
        -
      </button>
    </div>
  );
};

export default AutoScroller;
