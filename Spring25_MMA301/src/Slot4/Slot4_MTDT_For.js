import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default class Slot4_MTDT_For extends React.Component {
    constructor() {
        super();
        this.state = {
            ketqua: "",
            bieuThuc: "",
        };
        this.presButton = this.presButton.bind(this);
    }

    presButton(text) {
        let calculationText = "";
        if (text === "=") {
            //tinh
            calculationText = this.state.bieuThuc;
            this.setState({
                ketqua: eval(calculationText),
            });
        } else if (text === "DEL") {
            //xoa ki tu
            calculationText = this.state.bieuThuc;
            let text1 = calculationText.split(""); //pha vo chuoi
            text1.pop(); //xoa ky tu cuoi cung
            calculationText = text1.join(""); //noi cac ky tu con lai
            //cap nhap vao state
            this.setState({
                bieuThuc: calculationText,
            });
        } else {
            //noi chuoi
            calculationText = this.state.bieuThuc;
            calculationText += text;
            this.setState({
                bieuThuc: calculationText,
            });
        }
    }

    render() {
        let rows = [];
        let nums = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [".", "0", "="],
        ];
        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push(
                    <TouchableOpacity
                        key={nums[i][j]}
                        style={styles.btn}
                        onPress={() => this.presButton(nums[i][j])}
                    >
                        <Text style={styles.textSize}>{nums[i][j]}</Text>
                    </TouchableOpacity>
                );
            }
            rows.push(
                <View style={styles.dong} key={i}>
                    {row}
                </View>
            );
        }
        let ops = [];
        let op = ["+", "-", "*", "/", "DEL"];
        for (let i = 0; i < 5; i++) {
            ops.push(
                <TouchableOpacity
                    key={op[i]}
                    onPress={() => this.presButton(op[i])}
                >
                    <Text style={styles.textSize}>{op[i]}</Text>
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.textSize}>{this.state.ketqua}</Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.textSize}>{this.state.bieuThuc}</Text>
                </View>
                <View style={styles.button}>
                    <View style={styles.numbers}>{rows}</View>
                    <View style={styles.oper}>{ops}</View>
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
    //chia container lam 3 phan
    result: {
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "space-around",
        alignItems: "flex-end",
    },
    calculation: {
        flex: 2,
        backgroundColor: "green",
        justifyContent: "space-around",
        alignItems: "flex-end",
    },
    button: {
        flex: 7,
        flexDirection: "row",
        backgroundColor: "#a1a1a1",
        justifyContent: "space-around",
        alignItems: "stretch",
    },
    //chia phan button thanh 2 phan
    numbers: {
        flex: 3,
        flexDirection: "row",
        alignContent: "stretch",
        justifyContent: "space-around",
        backgroundColor: "blue",
    },
    dong: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-around",
        backgroundColor: "#a2a2a2",
    },
    oper: {
        flex: 1,
        flexDirection: "column",
        alignContent: "stretch",
        justifyContent: "space-around",
        backgroundColor: "blue",
    },
    btn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
    textSize: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
});
