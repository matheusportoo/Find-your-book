import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Routes from './routes';

export const Pages = () => {
  return (
    <Switch>
      {Routes.map(({ path, component }, index) => (
        <Route
          exact
          path={path}
          component={component}
          key={`navigation-pages-${index}`}
        />
      ))}
    </Switch>
  );
};
