import Playground from "../index";
import "./Demo.css";

import indexCode from "./codes/layout1/index?raw";
import _defaultPropsCode from "./codes/layout1/_defaultProps?raw";

const files = {
  "./App.tsx": indexCode,
  "./_defaultProps.tsx": _defaultPropsCode,
};

console.log('--- files ---', files);

export default function App() {
  return (
    <Playground
      // code={code}
      files={files}
      type="panel"
    />
  );
}
