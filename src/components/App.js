import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import About from './About';
import JoinUs from './JoinUs';
import Episodes from './Episodes';
import Characters from './Characters';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment basic>
        <NavBar />
        <Flash />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/joinus' component={JoinUs} />
            <Route exact path='/episodes' component={Episodes} />
            <Route exact path='/characters' component={Characters} />
            //NO ROUTES PAST THIS LINE 
            <Route component={NoMatch} />
          </Switch>
      </Segment>
    );
  }
}

export default App;
