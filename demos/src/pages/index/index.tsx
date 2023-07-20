import FileViewer from '../../../../src/index';
import React from 'react';

const suffix = [
  // 'avi',
  'csv',
  // 'doc',
  'docx',
  // 'dps',
  'et',
  'jpg',
  // 'mov',
  'mp3',
  'mp4',
  'pdf',
  'pptx',
  // 'rtf',
  'webm',
  'wexbim',
  // 'wps',
  'xlsx',
];

// const suffix = ['docx']
export default function ({}) {
  return (
    <div>
      <h1>已支持文件后缀</h1>
      <div style={{ height: '550px' }}>
        <FileViewer filePath={`a.csv`} />
      </div>
      {suffix.map((i) => (
        <>
          <h1>{i}</h1>
          <FileViewer
            onGridSort={() => null}
            key={i}
            filePath={`test.${i}`}
            // errorComponent={CustomErrorComponent}
            onError={(e) => console.error(e)}
          />
        </>
      ))}
    </div>
  );
}
