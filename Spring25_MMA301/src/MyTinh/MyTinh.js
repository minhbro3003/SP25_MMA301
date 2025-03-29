// import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";

// const MyTinh = () => {
//     let rows = [];
//     let nums = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//         [".", 0, "="],
//     ];
//     for (let i = 0; i < 4; i++) {
//         let row = [];
//         for (let j = 0; j < 3; j++) {
//             row.push(
//                 <TouchableOpacity key={nums[i][j]}>
//                     <Text>{nums[i][j]}</Text>
//                 </TouchableOpacity>
//             );
//         }
//         rows.push(
//             <View style={styles.rows} key={i}>
//                 {row}
//             </View>
//         );
//     }
//     return (
//         <View style={styles.container}>
//             <View style={styles.button}>
//                 <View style={styles.number}>{rows}</View>
//             </View>
//         </View>
//     );
// };

// export default MyTinh;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // width: "100%", // Đảm bảo rộng toàn bộ màn hình
//         // height: "100%", // Đảm bảo cao toàn bộ màn hình
//         // backgroundColor: "#fff",
//         // alignItems: "center",
//         // justifyContent: "center",
//     },
//     rows: {
//         flex: 1,
//         borderWidth: 1,
//         borderRadius: 10,
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//     },
//     button: {
//         flex: 7,
//         flexDirection: "row",
//     },
//     number: {
//         flex: 3,
//         backgroundColor: "#ccc",
//     },
// });

import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class MayTinh extends React.Component {
    constructor() {
        super();
        this.state = {
            textResult: "",
            textCalculation: "",
        };
    }

    pressButton(text) {
        if (text === "=") {
            this.setState({
                textResult: eval(this.state.textCalculation),
            });
        } else if (text === "DEL") {
            let textArr = this.state.textCalculation.split("");
            textArr.pop();
            this.setState({
                textCalculation: textArr.join(""),
            });
        } else {
            this.setState({
                textCalculation: this.state.textCalculation + text,
            });
        }
    }

    render() {
        let rows = [];
        let nums = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [".", 0, "="],
        ];

        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push(
                    <TouchableOpacity
                        key={nums[i][j]}
                        onPress={() => this.pressButton(nums[i][j])}
                    >
                        <Text style={style.textDisplay}>{nums[i][j]}</Text>
                    </TouchableOpacity>
                );
            }
            rows.push(
                <View style={style.row} key={i}>
                    {row}
                </View>
            );
        }

        return (
            <View style={style.container}>
                <View style={style.result}>
                    <Text style={style.textDisplay}>
                        {this.state.textResult}
                    </Text>
                </View>
                <View style={style.calculation}>
                    <Text style={style.textDisplay}>
                        {this.state.textCalculation}
                    </Text>
                </View>
                <View style={style.button}>
                    <View style={style.numbers}>{rows}</View>
                    <View style={style.operation}>
                        {["+", "-", "*", "/", "DEL"].map((op) => (
                            <TouchableOpacity
                                key={op}
                                onPress={() => this.pressButton(op)}
                            >
                                <Text style={style.textDisplay}>{op}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
    },
    result: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "flex-end",
        backgroundColor: "rgb(255 207 0)",
    },
    calculation: {
        flex: 2,
        padding: 10,
        justifyContent: "space-around",
        alignItems: "flex-end",
        backgroundColor: "rgb(0 255 168)",
    },
    button: {
        flex: 7,
        flexDirection: "row",
        backgroundColor: "#1b1b1b",
    },
    numbers: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "#5a5a5a",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 5,
    },
    operation: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "stretch",
        backgroundColor: "#1c1c1c",
    },
    textDisplay: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
});
