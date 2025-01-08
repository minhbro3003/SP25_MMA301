import React from "react";
import { Text, View } from "react-native";
import Slot2_4_Con from "./Slot2_4_Con";
const Slot2_4_Cha = () => {
    //code
    const userName = "Tran Van Ben"; //khai bao gia tri de truyen cho props
    //layout
    return (
        //truyen du lieu cho props
        <Slot2_4_Con name={userName} />
    );
};
export default Slot2_4_Cha;
