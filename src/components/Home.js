import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>GAME OF THRONES</Header>
        <Link to='/Episodes'>
          <Header as='h3' textAlign='left'>Episodes</Header>
        </Link>
        <Link to='/Characters'>
          <Header as='h3' textAlign='left'>Characters</Header>
        </Link>
      </Container>
    );
  }
}

export default Home;
