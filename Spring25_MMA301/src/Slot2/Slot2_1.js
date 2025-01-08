import React from "react";
import { Text,View } from "react-native";
export default class Slot2_1 extends React.Component{
    //code
    constructor(props){
        super(props);
        this.state = {
            text: 'Click me',
            dem: 0,
        }
    }
    //ham updatetext
    updateText(){
        this.setState(pre => {
            return {
                dem: pre.dem +1,
                text: 'ban vua click lan ',

            }
        });
    }
    //giao dien
    render(){
        return(
            <View>
                <Text onPress={()=>this.updateText()}>{this.state.text}: {this.state.dem}</Text>
            </View>
        );
    }
}
