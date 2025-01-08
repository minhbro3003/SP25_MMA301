import React,{useState} from "react";
import { Text,View,Button,TextInput } from "react-native";
import Slot2_5_Con from "./Slot2_5_Con";
//dinh nghia them 1 props
const SuDungProps = (props) =>{ //se truyen onChangeText vao props
    return(
        <TextInput {...props} editable maxLength={120} />
    );
}
//Dinh nghia State (Component Cha)

const SuDungState = () =>{
    //code
    const [name,setName]=useState('');
    //layout 
    return(
        <View>
            {/* cho nguoi dung nhap text */}
        <SuDungProps
            placeholder="nhap text vao day"
            onChangeText={name=>setName(name)} value={name}
        />
        {/* hien thi text */}
        <Text>Gia tri vua nhap: {name}</Text>
        {/* goi prop ben ngoai */}
        <Slot2_5_Con giaTri={name} />
        </View>
       
    );
}
export default SuDungState;