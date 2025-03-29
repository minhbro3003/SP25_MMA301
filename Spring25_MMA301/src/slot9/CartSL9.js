import React from "react";
import { ScrollView,Button,Text,FlatList } from "react-native";
import ProductSL9 from "./ProductSL9";
global.mycart=[];
export default class CartSL9 extends React.Component{
    //code
    constructor(props){
        super(props);
        this.state={
            prd: props.route?.params?.data,
            count:1,
            list:global.mycart,
        };
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.getAllProductOfCart=this.getAllProductOfCart.bind(this);
        this.fn_renderItem=this.fn_renderItem.bind(this);
    }
    increment(){
        this.setState({
            count: this.state.count+1,
        });
    }
    decrement(){
        this.setState({
            count: this.state.count-1,
        });
    }
    getAllProductOfCart(){
        //push prd to mycart
        if(this.state.prd){
            global.mycart.push({data: this.state.prd});
        }
        //set list
        this.setState({
            list: [...global.mycart],
        });
    }
    fn_renderItem({item}){
        return(
            <ProductSL9 dataProd={item.data} />
        );
    }
    //layout
    render(){
        return(
            <ScrollView>
                <ProductSL9 dataProd={this.state.prd}/>
                <Button title="+" onPress={()=>this.increment()}/>
                <Button title="-" onPress={()=>this.decrement()}/>
                <Text>quantity 0f products in your cart: {this.state.count}</Text>
                <Button title="List of products" onPress={this.getAllProductOfCart}/>
                <FlatList 
                    data={this.state.list}
                    renderItem={this.fn_renderItem}
                    numColumns={2}
                    removeClippedSubviews
                />
            </ScrollView>
        );
    }
}