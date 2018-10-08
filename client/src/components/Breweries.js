import React, {Fragment} from 'react'
import axios from 'axios'
import { Container, Grid, Card, Image, Icon} from 'semantic-ui-react'

class Breweries extends React.Component {
  state={brews: []}

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => this.setState({ brews: res.data.entries }) )
  }

  
  render() {
    const { brews } = this.state
    return (
      <Container>
      <Grid>
        { brews.map( b =>
            <Card key={b.id}>
              <Image  />     
                <Card.Content> 
                  <Card.Header>{b.name}</Card.Header> 
                  <Card.Meta>{b.brand_classification}</Card.Meta>
                  <Card.Description>{b.description}</Card.Description>

                </Card.Content> 
                <Card.Content extra>
                  <a>
                    <Icon name='linkify' />
                    <a href={b.website}>{b.website}</a>
                  </a>
                </Card.Content>
            </Card> 
          )
        }                      
      </Grid>
      </Container>
    )
  }
}

export default Breweries