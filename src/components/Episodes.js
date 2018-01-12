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
import { fetchEpisodes } from '../actions/episodes';

class Episodes extends React.Component {
  state = { category: '' }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchEpisodes())
  }


  episodes = () => {
    const { episodes } = this.props;
    const { category } = this.state;
    let visible = episodes;
    if (category)
      visible = episodes.filter(a => a.episode_type === category)
    return visible.map(episode =>
      <Card key={episode.id}>
        <Image src={episode.logo} />
        <Card.Content>
          <Card.Header>
            {episode.name}
          </Card.Header>
          <Card.Meta>
            <span>{episode.season}</span>
          </Card.Meta>
          <Card.Description>
            {episode.description}
          </Card.Description>
          <Card.Content extra>
            <Link to={`/episode/${episode.id}`}>
              View Episode
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
        <Header as="h3" textAlign="center" style={styles.heading}>Episodes</Header>
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
          {this.episodes()}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { episodes } = state;
  const categories = [...new Set(episodes.map(a => a.episode_type))]
  return { episodes, categories }
}

const styles = {
  heading: {
    color: 'blue',
    textDecoration: 'underline',
    textAlign: 'center',
    fontSize: '3em',
  },
}


export default connect(mapStateToProps)(Episodes);