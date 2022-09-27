import { useState, useEffect } from 'react';



export function useWindowSizing() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

// export default function useWindowDimensions() {

//     const hasWindow = typeof window !== 'undefined';
  
//     function getWindowDimensions() {
//       const width = hasWindow ? window.innerWidth : null;
//       const height = hasWindow ? window.innerHeight : null;
//       return {
//         width,
//         height,
//       };
//     }
  
//     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
//     useEffect(() => {
//       if (hasWindow) {
//         function handleResize() {
//           setWindowDimensions(getWindowDimensions());
//         }
  
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//       }
//     }, [hasWindow]);
  
//     return windowDimensions;
//   }