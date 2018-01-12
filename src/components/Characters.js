import React from 'react';
import {
  Container,
  Grid,
  Header,
  Card,
  Image,
  Dropdown,
  Divider,
  Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../actions/characters';

class Characters extends React.Component {
  state = { category: '' }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCharacters())
  }


  characters = () => {
    const { characters } = this.props;
    const { category } = this.state;
    let visible = characters;
    if (category)
      visible = characters.filter(a => a.character_type === category)
    return visible.map(character =>
      <Card key={character.id}>
        <Image src={character.logo} />
        <Card.Content>
          <Card.Header>
            {character.name}
          </Card.Header>
          <Card.Meta>
            <span>{character.location}</span>
          </Card.Meta>
          <Card.Description>
            {character.description}
          </Card.Description>
          <Card.Content extra>
            <Link to={`/character/${character.id}`}>
              View Character
            </Link>
          </Card.Content>
        </Card.Content>
      </Card>
    )
  }

  categoryOptions = () => {
    return this.props.categories.map((c, i) => {
      return { key: i, text: c, value: c }
    })
  }

  render() {
    const { category } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center" style={styles.heading}>Characters</Header>
        <Dropdown
          placeholder="Search by category"
          fluid
          selection
          options={this.categoryOptions()}
          onChange={(e, data) => this.setState({ category: data.value })}
          value={category}
        />
        {category &&
          <Button
            fluid
            basic
            onClick={() => this.setState({ category: '' })}
          >
            Clear Filter: {category}
          </Button>
        }
        <Divider />
        <Card.Group itemsPerRow={4}>
          {this.characters()}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { characters } = state;
  const categories = [...new Set(characters.map(a => a.character_type))]
  return { characters, categories }
}

const styles = {
  heading: {
    color: 'blue',
    textDecoration: 'underline',
    textAlign: 'center',
    fontSize: '3em',
  },
}


export default connect(mapStateToProps)(Characters);