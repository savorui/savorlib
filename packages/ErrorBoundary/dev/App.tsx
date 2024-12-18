import { useEffect } from 'react';

import ErrorBoundary from '../src';

function Child() {
  useEffect(() => {
    throw new Error('Error Test');
  }, []);

  return <div>child</div>;
}

export default function App() {
  return (
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  );
}
