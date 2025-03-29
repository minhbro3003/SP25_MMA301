import React from "react";
import { TouchableWithoutFeedback,View,Text,Image,StyleSheet } from "react-native";
export default class ProductSL9 extends React.Component{
    //code
    constructor(){
        super();
        this.props={
            dataProd: {},
            handlePress: null,
        };
        this.fun_handlePress=this.fun_handlePress.bind(this);
    }
    fun_handlePress(){
        if(this.props.handlePress){
            this.props.handlePress(this.props.dataProd);
        }
    }
    //layout
    render(){
        return(
            <TouchableWithoutFeedback onPress={this.fun_handlePress}>
                <View>
                    <Image source={{uri:this.props.dataProd.search_image}} style={styles.image}/>
                    <Text>{this.props.dataProd.styleid}</Text>
                    <Text>{this.props.dataProd.brands_filter_facet}</Text>
                    <Text>{this.props.dataProd.price}</Text>
                    <Text>{this.props.dataProd.product_additional_info}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width:200,height:200,borderWidth:1,
    },  
});

