import React, { useState, useRef } from 'react';
import { PptxViewer, DriverViewer } from './drivers';
import withFetching from './fetch-wrapper';

const OfficeViewer = (props) => {
  const { fileType } = props;
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(true);
  const [height, setHeight] = useState(true);
  const ele = useRef<HTMLDivElement>(null);
  const getDriver = () => {
    switch (fileType) {
      case 'pptx': {
        return withFetching(PptxViewer, { responseType: 'arraybuffer', props });
      }
      default: {
        return DriverViewer;
      }
    }
  };
  const Driver = getDriver();
  return (
    <div className="pg-viewer-wrapper">
      <div className="pg-viewer" id="pg-viewer" ref={ele}>
        <Driver {...props} width={width} height={height} />
      </div>
    </div>
  );
};

export default OfficeViewer;
