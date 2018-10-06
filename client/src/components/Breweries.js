import React from 'react'
import axios from 'axios'
import { Grid, Card, Image} from 'semantic-ui-react'

class Breweries extends React.Component {
  state={brews: []}

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => this.setState({ brews: res.data.entries }))
  }

  render() {
    const { brews } = this.state
    return (
      <Grid>
        { brews.map( b =>
            <Card key={b.id}>
            <Image  />       
              <Card.Header>{b.name}</Card.Header> 
              <Card.Description>{b.description}</Card.Description>
            </Card> 
          )
        }                      
      </Grid>
    )
  }
}

export default Breweries