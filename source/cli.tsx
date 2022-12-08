#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(`
  Usage
    $ electrophoresis

  Examples
    $ electrophoresis --resolution=100 # resolution turns into histogram step value.
`, {
  flags: {
    resolution: {
      type: 'number'
    }
  }
});

render(<App resolution={cli.flags.resolution} />);
