import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Episodes from './Episodes';
import { getMenuItems } from '../actions/episodes';
import { Loader, Segment, Dimmer, Header } from 'semantic-ui-react';

class FetchEpisodes extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getEpisodes(this.setLoaded))
  }

  setLoaded = () => this.setState({ loaded: true })

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/Episodes" component={Episodes} />
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

export default connect()(FetchEpisodes);
