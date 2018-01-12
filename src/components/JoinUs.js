import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
// import { MapWithAMarker } from 'whatever';

class JoinUs extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header as='h1' textAlign='center'>JOIN US</Header>
          <Header as='h3' textAlign='left'>Location</Header>
          <iframe src="https://www.google.com/maps/place/Iceland/@64.8013826,-23.7302259,6z/data=!3m1!4b1!4m5!3m4!1s0x48d22b52a3eb6043:0x6f8a0434e5c1459a!8m2!3d64.963051!4d-19.020835" width="300" height="250" frameborder="0" allowfullscreen></iframe>
        </Container>
      </div>
    );
  }
}

export default JoinUs;
