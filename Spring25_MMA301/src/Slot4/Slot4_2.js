import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
export default class Slot4_2 extends React.Component {
    //code
    constructor() {
        super();
        this.state = {
            ketQua: "",
            bieuThuc: "",
        };
        this.pressButton = this.pressButton.bind(this);
    }
    //dinh nghia ham pressbutton
    pressButton(text) {
        let calculationText = "";
        if (text === "=") {
            //tinh gia tri bieu thuc
            calculationText = this.state.bieuThuc;
            this.setState({
                ketQua: eval(calculationText),
            });
        } else if (text === "DEL") {
            //xoa ky tu
            calculationText = this.state.bieuThuc;
            let text1 = calculationText.split(""); //pha vo chuoi
            text1.pop(); //xoa ky tu cuoi cung
            calculationText = text1.join("");
            //cap nhat lai bieu thuc
            this.setState({
                bieuThuc: calculationText,
            });
        } else {
            //noi chuoi
            calculationText = this.state.bieuThuc;
            calculationText = calculationText + text;
            this.setState({
                bieuThuc: calculationText,
            });
        }
    }
    //layout
    render() {
        let rows = []; //chua cac con so
        let nums = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [".", "0", "="],
        ];
        //dua con so vao cac dong
        for (let i = 0; i < 4; i++) {
            let row = []; //khai bao dong de chua con so
            for (let j = 0; j < 3; j++) {
                row.push(
                    <TouchableOpacity
                        key={nums[i][j]}
                        style={styles.btn}
                        onPress={() => this.pressButton(nums[i][j])}
                    >
                        <Text style={styles.textStyle}>{nums[i][j]}</Text>
                    </TouchableOpacity>
                );
            }
            //
            rows.push(
                <View key={i} style={styles.dong}>
                    {row}
                </View>
            );
        }

        let ops = []; //chua cac phep tinh
        let op = ["+", "-", "*", "/", "DEL"];
        //dua phep tinh vao opers
        for (let i = 0; i < 5; i++) {
            ops.push(
                <TouchableOpacity
                    style={styles.btn}
                    key={op[i]}
                    onPress={() => this.pressButton(op[i])}
                >
                    <Text style={styles.textStyle}>{op[i]}</Text>
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.container}>
                {/* result */}
                <View style={styles.result}>
                    <Text style={styles.textStyle}>{this.state.ketQua}</Text>
                </View>
                {/* calculation */}
                <View style={styles.calculation}>
                    <Text style={styles.textStyle}>{this.state.bieuThuc}</Text>
                </View>
                {/* buttons */}
                <View style={styles.buttons}>
                    <View style={styles.numbers}>{rows}</View>
                    <View style={styles.opers}>{ops}</View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    //chia container lam 3 phan: 1,3,7
    result: {
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "space-around",
        justifyContent: "flex-end",
    },
    calculation: {
        flex: 2,
        backgroundColor: "green",
        justifyContent: "space-around",
        alignItems: "flex-end",
    },
    buttons: {
        flex: 7,
        flexDirection: "row",
        backgroundColor: "#a1a1a1",
        justifyContent: "space-around",
        alignItems: "stretch",
    },
    //chia phan buttons thanh 2 phan: 3,1
    numbers: {
        flex: 3,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-around",
        backgroundColor: "#a2a2a2",
    },
    dong: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-around",
        backgroundColor: "#a2a2a2",
    },
    opers: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-around",
        backgroundColor: "#a2a2a2",
    },
    btn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
    textStyle: {
        fontSize: 30,
        fontWeight: "bold",
    },
});
