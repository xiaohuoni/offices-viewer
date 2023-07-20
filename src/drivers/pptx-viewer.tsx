import React, { useRef, useEffect } from 'react';
import JSZip from 'jszip';
import {
  getContentTypes,
  getSlideSize,
  loadTheme,
  processSingleSlide,
  processMsgQueue,
  setThemeContent,
  genGlobalCSS,
} from '../utils/pptx';

import './pptx.css';
import './nv.d3.min.css';
import './chart/d3.min.js';
import './chart/nv.d3.min.js';

function processPPTX(data) {
  const zip = new JSZip(data);

  const filesInfo = getContentTypes(zip);
  const slideSize = getSlideSize(zip);
  const themeContent = loadTheme(zip);
  setThemeContent(themeContent);

  const numOfSlides = filesInfo['slides'].length;
  const slides: string[] = [];
  for (let i = 0; i < numOfSlides; i++) {
    const filename = filesInfo['slides'][i];
    const slideHtml = processSingleSlide(zip, filename, i, slideSize);
    slides.push(slideHtml);
  }
  return slides;
}

const PptxViewer = (props) => {
  const { data } = props;
  const slides = processPPTX(data);
  const str = genGlobalCSS();
  const refs = useRef(null);
  useEffect(() => {
    if (refs.current) {
      processMsgQueue();
    }
  }, [refs.current]);
  return (
    <div className="pg-driver-view">
      {slides.map((i) => (
        <div key={i} dangerouslySetInnerHTML={{ __html: i }}></div>
      ))}
      <style dangerouslySetInnerHTML={{ __html: str }}></style>
      <div ref={refs}></div>
    </div>
  );
};

export default PptxViewer;
