export declare const DEPENDENCIES_MAPPING: {
    [key: string]: string;
};
export declare const defaultFiles: {
    "./index.tsx": string;
};
export declare const defaultAppCode = "\nimport React from 'react';\n\nexport default function App() {\n  return <div>\n    Hello World! \n    <br/>\n    This is Matter UI.\n  </div>;\n}\n";
export declare const execCode: (code: string, playgroundId: string) => void;
