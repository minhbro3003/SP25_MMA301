import { View, Text, Button } from 'react-native'
import React from 'react'

export default class Slot5_1 extends React.Component {
  //
  constructor(props) {
    super(props)
    this.state = {
      // state
    }
  }
  increment(){
    this.setState({count: this.state.count + 1})
  }
  //layout
  render(){
    return(
        <View>
            <Text style={{padding: 50}}>Test debug</Text>
            <Button title='Press me' onPress={() =>this.increment()}/>
                <Text>Ban click {this.state.count} lan</Text>
        </View>
    )
  }
}