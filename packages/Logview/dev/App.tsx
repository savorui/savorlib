import React from 'react';

import Logview from '../src';
import logs from './mock/logs_group_2level';

export default function App() {
  return (
    <div className='sa-w-[1000px]'>
      <Logview logs={logs} theme='dark' />
    </div>
  );
}
