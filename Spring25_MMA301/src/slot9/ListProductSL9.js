import React from "react";
import { FlatList } from "react-native";
import ProductSL9 from "./ProductSL9";
export default class ListProductSL9 extends React.Component{
    //code
    constructor(){
        super();
        this.state={
            prd:null,
        };
        this.fun_renderItemFlatlist=this.fun_renderItemFlatlist.bind(this);
        this.fun_viewDetail=this.fun_viewDetail.bind(this);
        this.getProducts=this.getProducts.bind(this);
    }
    fun_viewDetail(p){
        this.props.navigation.navigate('DetailSL9',{data:p});
    }
    fun_renderItemFlatlist({item}){
        return(
            <ProductSL9 dataProd={item} handlePress={()=>this.fun_viewDetail(item)}/>
        );
    }
    async getProducts(){
        const url='https://hungnttg.github.io/shopgiay.json';
        const response = await fetch(url,{method:'GET'});
        const responseJSON = await response.json();
        this.setState({
            prd:responseJSON.products,
        });
    }
    componentDidMount(){
        this.getProducts();
    }
    //layout
    render(){
        return(
            <FlatList
                data={this.state.prd}
                renderItem={this.fun_renderItemFlatlist}
                numColumns={3}
                removeClippedSubviews
            />
        );
    }
}