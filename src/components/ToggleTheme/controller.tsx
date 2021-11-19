import React, { useState } from 'react';

import { defaultTheme, secondaryTheme } from 'styles/themes';

import View from './view';

const Controller = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const updateTheme = () => {
    if (theme.name == 'dark') {
      setTheme(defaultTheme);
    }

    if (theme.name == 'light') {
      setTheme(secondaryTheme(theme));
    }
  };

  return <View theme={theme} updateTheme={updateTheme} />;
};

export default Controller;
