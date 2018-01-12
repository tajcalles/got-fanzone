import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Characters from './Characters';
import { getCharacters } from '../actions/characters';
import { Loader, Segment, Dimmer, Header } from 'semantic-ui-react';

class FetchCharacters extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getCharacters(this.setLoaded))
  }

  setLoaded = () => this.setState({ loaded: true })

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/Characters" component={Characters} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchCharacters);
