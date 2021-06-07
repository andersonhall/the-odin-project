import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import About from './About';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
