import React from 'react'
import axios from 'axios'
import { Segment, Card} from 'semantic-ui-react'

class Beers extends React.Component {
  state={beers: []}

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => this.setState({ beers: res.data.entries }) )
  }

  render() {
    const {beers} = this.state
    return (
      <Segment>
        <Card>
        <ul>
          { beers.map( b =>
              <li key={b.id}>
                {b.name}
              </li>
            )
          }
        </ul>
        </Card>
      </Segment>
    )
  }

}

export default Beers