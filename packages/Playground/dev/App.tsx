import './App.css';

import Playground from '../src';
import _defaultPropsCode from './codes/raw/layout1/_defaultProps';
import indexCode from './codes/raw/layout1/index';

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
