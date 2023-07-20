import React from 'react';
import './driver-viewer.css';

const DriverViewer = (props) => (
  <div className="pg-driver-view">
    <div className="driver-message">
      {props.driverViewer ? (
        <props.driverViewer {...props} />
      ) : (
        <p className="alert">
          <b>{`.${props.fileType}`}</b> is not supported.
        </p>
      )}
    </div>
  </div>
);

export default DriverViewer;
