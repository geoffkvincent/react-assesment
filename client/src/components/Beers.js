import React from 'react'
import axios from 'axios'
import { Grid, Card, Image} from 'semantic-ui-react'


class Beers extends React.Component {
  state={beers: [],   category: [] }

  componentDidMount() {
    axios.get('/api/all_beers?page=5&per_page=10')
      .then( res => this.setState({ beers: res.data.entries }) )
  }

  // componentDidMount(){
  //   axios.get('/api/all_beers')
  //     .then( res => this.setState({ category: res.data.category }) )
  // }

  render() {
    const {beers} = this.state
    return (
        <Grid>
          { beers.map( b =>
              <Card key={b.id}>
                <Image src={b.image} />
                  <Card.Content>   
                    <Card.Header>{b.name}</Card.Header> 
                    <Card.Description>{b.description}</Card.Description>
                  </Card.Content>    
              </Card> 
            )
          }                      
        </Grid>
    )
  }

}

export default Beers