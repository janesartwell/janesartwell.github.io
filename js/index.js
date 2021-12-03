/* ASPECT RATIO STYLING OPTION 2*/
const updateSize = () => {
    const iframe = document?.getElementsByTagName('iframe')?.[0];
    if (!iframe) return;
   
    const width = iframe.getBoundingClientRect().width;
    const height = width * (16 / 9);
    iframe.style.height = height;
   };
   
   window.addEventListener('resize', updateSize);
   /* [END] ASPECT RATIO STYLING OPTION 2*/