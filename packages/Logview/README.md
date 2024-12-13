# @savorui/logview

A log browsing component that supports ANSI color, virtual scrolling, and grouping log lines.

## Install

```bash
$ npm i @savorui/logview --save
```

## Usage

```jsx
import Logview from '@savorui/logview';

const logs = ['this is log'];

function App(){
  return <Logview logs={logs} />;
}
```
