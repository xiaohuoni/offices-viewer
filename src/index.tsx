import FileViewer from 'react-file-viewer';
import React, { Component } from 'react';
import OfficeViewer from './office-viewer';

const getType = (filename = '') => {
  const exts = filename.split('.');
  if (!exts || exts.length === 0) return '';
  const ext = exts[exts.length - 1];
  switch (ext) {
    case 'et':
    case 'xls':
      return 'xlsx';
    case 'wps':
    case 'doc':
      return 'docx';
    case 'dps':
    case 'pptx':
      return 'pptx';
    case 'mov':
      return 'mp4';
    default:
      return ext;
  }
};

const OfficesViewer = (props) => {
  const { filePath } = props;
  // 如果没传 fileType，尝试使用 getType 获得
  return (
    <FileViewer
      unsupportedComponent={OfficeViewer}
      fileType={getType(filePath)}
      {...props}
    />
  );
};

export default OfficesViewer;
