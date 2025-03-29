import React from "react";
import { ScrollView,Button } from "react-native";
import ProductSL9 from "./ProductSL9";
export default class DetailSL9 extends React.Component{
    //code
    constructor(props){
        super(props);
        this.state={
            prd: props.route?.params?.data,
        };
        this.addToCart=this.addToCart.bind(this);
    }
    addToCart(p){
        this.props.navigation.navigate('CartSL9',{data:p});
    }
    //layout
    render(){
        return(
            <ScrollView>
                <ProductSL9 dataProd={this.state.prd}/>
                <Button title="Add to cart" onPress={()=>this.addToCart(this.state.prd)}/>
            </ScrollView>
        );
    }
}