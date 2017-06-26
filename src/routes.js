import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Switch} from 'react-router-dom';
import App from './components/app';
import Vehicle from './components/vehicle';


export default(
	// <Switch>
	// <Route path="/:name/:model" component={Vehicle} />
	// </Switch>
	<Route path="/" component={App} />
);