# offices-viewer

## Current Renderable File Types

| Extension | MIME Type                                                                          | Available |
| --------- | ---------------------------------------------------------------------------------- | --------- |
| wps       | -                                                                          | `x`       |
| dps       | -                                                                          | `x`       |
| cxv       | -                                                                          | `✓`       |
| doc       | application/msword                                                                 | `✓`       |
| docx      | application/vnd.openxmlformats-officedocument.wordprocessingml.document            | `✓`       |
| et       | -                                                                           | `✓`       |
| jpg       | image/jpg                                                                          | `✓`       |
| jpeg      | image/jpeg                                                                         | `✓`       |
| mp3      | audio/mpeg                                                                         | `✓`       |
| mp4      | video/mp4                                                                        | `✓`       |
| pdf       | application/pdf                                                                    | `✓`       |
| png       | image/png                                                                          | `✓`       |
| ppt       | application/vnd.ms-powerpoint                                                      | `✓`       |
| pptx      | applicatiapplication/vnd.openxmlformats-officedocument.presentationml.presentation | `✓`       |
| webm      | video/webm                                                                      | `✓`       |
| wexbim       | text/plain                                                                         | `✓`       |
| xls       | application/vnd.ms-excel                                                           | `✓`       |
| xlsx      | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet                  | `✓`       |

<br />
<br />

## Installation

### Core

```bash
 npm i offices-viewer
 # or
 yarn add offices-viewer
 #  or
 pnpm i offices-viewer
```

## Usage

Note this module works best with react 16+.  If you are using React < 16 you will likely need to use version 0.5. `npm install react-file-viewer@0.5.0`.

There is one main React component, `FileViewer`, that takes the following props:

`fileType` string: type of resource to be shown (one of the supported file
formats, eg `'png'`). Passing in an unsupported file type will result in displaying
an `unsupported file type` message (or a custom component).

`filePath` string: the url of the resource to be shown by the FileViewer.

`onError` function [optional]: function that will be called when there is an error in the file
viewer fetching or rendering the requested resource. This is a place where you can
pass a callback for a logging utility.

`errorComponent` react element [optional]: A component to render in case of error
instead of the default error component that comes packaged with react-file-viewer.

`unsupportedComponent` react element [optional]: A component to render in case
the file format is not supported.

To use a custom error component, you might do the following:

```
// MyApp.js
import React, { Component } from 'react';
import logger from 'logging-library';
import FileViewer from 'offices-viewer';
import { CustomErrorComponent } from 'custom-error';

const file = 'http://example.com/image.png'
const type = 'png'

class MyComponent extends Component {
  render() {
    return (
      <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        onError={this.onError}/>
    );
  }

  onError(e) {
    logger.logError(e, 'error in file-viewer');
  }
}
```