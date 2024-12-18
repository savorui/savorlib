import React, { useEffect, useState } from 'react';

import Editor, { IMarkerData } from '../src';
import { yamlData1, yamlData2, yamlData3 } from './mock';
import customSchema from './schema/custom.json';
import draft07Schema from './schema/json-schema-draft-07.json';
import prettierSchema from './schema/prettier.json';

const completionItems = [
  {
    label: 'stages',
    insertText: `stages:
  build_stage:
    name: 构建阶段
    jobs:`,
  },
  {
    label: 'sources',
    insertText: `sources:`,
  },
  {
    label: 'variables',
    insertText: `variables:
  - key: `,
  },
];

const App = () => {
  const [markers, setMarkers] = useState<IMarkerData[]>();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMarkers([
  //       {
  //         startLineNumber: 3,
  //         startColumn: 1,
  //         endLineNumber: 3,
  //         endColumn: 100,
  //         message: '这里有个语法报错，语法不合法',
  //         severity: 8,
  //       },
  //     ]);
  //   }, 1000);
  // }, []);

  return (
    <div style={{ width: '100%', height: 600, display: 'flex', gap: 10 }}>
      <div style={{ flex: 1 }}>
        <Editor
          language="yaml"
          theme="light"
          value={yamlData1}
          autoCompletion={{ completionItems }}
          markers={markers}
          diagnostics={{
            schemaName: 'prettier',
            schemaUrl: 'https://json.schemastore.org/prettierrc.json',
            schemas: [prettierSchema],
          }}
          showCopy={true}
        />
      </div>
      <div style={{ flex: 1 }}>
        <Editor
          language="yaml"
          theme="light"
          value={yamlData2}
          autoCompletion={{ completionItems }}
          diagnostics={{
            schemaName: 'prettier',
            schemaUrl: 'https://json.schemastore.org/prettierrc.json',
            schemas: [prettierSchema],
          }}
          markers={markers}
          showCopy={true}
        />
      </div>
      {/* <div style={{ flex: 1 }}>
        <Editor
          language="yaml"
          theme="light"
          value={yamlData3}
          autoCompletion={{ completionItems }}
          diagnostics={{
            schemaName: 'prettier',
            schemaUrl: 'https://json.schemastore.org/prettierrc.json',
            schemas: [prettierSchema],
          }}
          markers={markers}
          showCopy={true}
        />
      </div> */}
    </div>
  );
};

export default App;
