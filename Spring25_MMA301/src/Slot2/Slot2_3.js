import React,{useState} from "react";
import { Text,View,TextInput } from "react-native";
const Slot2_3 = () =>{
    //code
    const [hoTen,setHoTen] = useState('');
    //layout
    return(
        <View>
            <TextInput
                placeholder="nhap ho ten"
                onChangeText={(hoTen)=>setHoTen(hoTen)}
                defaultValue={hoTen}
            />
            <Text>Ban vua nhap: {hoTen}</Text>
        </View>
    );
}
export default Slot2_3;