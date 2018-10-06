import React from 'react'
import axios from 'axios'
import { Segment, Card} from 'semantic-ui-react'

class Beers extends React.Component {
  state={beers: []}

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => this.setState({ beers: res.data }) )
  }

  render() {
    const {beers} = this.state
    return (
      <Segment>
        <Card>
          hello
        </Card>
      </Segment>
    )
  }

}

export default Beers