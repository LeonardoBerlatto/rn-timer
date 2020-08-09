import { registerRootComponent } from 'expo';
import React from 'react';

import { TimeCounter } from './pages';

export default function App() {

  return (
    <TimeCounter />
  );
}

registerRootComponent(App)