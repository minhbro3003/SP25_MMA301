import React from "react";

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class Slot3_1 extends React.Component {
    //code
    constructor() {
        super();
        this.state = {
            textResult: "",
            textCalculation: "",
            // currentNumber: "",
            // operator: "",
        };
    }
    pressButton(text) {
        if (text === "=") {
            //click button =
            //tinh gia tri bieu thuc
            this.setState({
                textResult: eval(this.state.textCalculation),
            });
        } else if (text === "DEL") {
            let text = this.state.textCalculation.split(""); //pha vo chuoi
            text.pop(); //xoa vo phan tu cuoi cung
            this.setState({
                textCalculation: text.join(""), //join cac phan con lai de thanh chuoi
            });
        } else {
            this.setState({
                textCalculation: this.state.textCalculation + text, //them text vao cuoi chuoi
            });
        }
    }
    //layout
    render() {
        return (
            <View style={style.containe}>
                <View style={style.result}>
                    <Text style={style.textDisplay}>
                        {this.state.textResult}
                    </Text>
                </View>
                {/* calculation */}
                <View style={style.calculation}>
                    <Text style={style.textDisplay}>
                        {this.state.textCalculation}
                    </Text>
                </View>
                {/* button */}
                <View style={style.button}>
                    {/* numbers1 */}
                    <View style={style.numbers1}>
                        <TouchableOpacity
                            key={1}
                            onPress={() => this.pressButton(1)}
                        >
                            <Text style={style.textDisplay}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={4}
                            onPress={() => this.pressButton(4)}
                        >
                            <Text style={style.textDisplay}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={7}
                            onPress={() => this.pressButton(7)}
                        >
                            <Text style={style.textDisplay}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={"DEL"}
                            onPress={() => this.pressButton("DEL")}
                        >
                            <Text style={style.textDisplay}>DEL</Text>
                        </TouchableOpacity>
                    </View>
                    {/* numbers2 */}
                    <View style={style.numbers2}>
                        <TouchableOpacity
                            key={2}
                            onPress={() => this.pressButton(2)}
                        >
                            <Text style={style.textDisplay}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={5}
                            onPress={() => this.pressButton(5)}
                        >
                            <Text style={style.textDisplay}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={8}
                            onPress={() => this.pressButton(8)}
                        >
                            <Text style={style.textDisplay}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={0}
                            onPress={() => this.pressButton(0)}
                        >
                            <Text style={style.textDisplay}>0</Text>
                        </TouchableOpacity>
                    </View>
                    {/* numbers3 */}
                    <View style={style.numbers3}>
                        <TouchableOpacity
                            key={3}
                            onPress={() => this.pressButton(3)}
                        >
                            <Text style={style.textDisplay}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={6}
                            onPress={() => this.pressButton(6)}
                        >
                            <Text style={style.textDisplay}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={9}
                            onPress={() => this.pressButton(9)}
                        >
                            <Text style={style.textDisplay}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={"="}
                            onPress={() => this.pressButton("=")}
                        >
                            <Text style={style.textDisplay}>=</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.operation}>
                        <TouchableOpacity
                            key={"+"}
                            onPress={() => this.pressButton("+")}
                        >
                            <Text style={style.textDisplay}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={"-"}
                            onPress={() => this.pressButton("-")}
                        >
                            <Text style={style.textDisplay}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={"*"}
                            onPress={() => this.pressButton("*")}
                        >
                            <Text style={style.textDisplay}>*</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={"/"}
                            onPress={() => this.pressButton("/")}
                        >
                            <Text style={style.textDisplay}>/</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* operation */}
            </View>
        );
    }
}

const style = StyleSheet.create({
    containe: {
        flex: 1,
        flexDirection: "column",
        padding: "10px",
    },
    //chia container thanh 10 phan
    result: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "flex-end",
        backgroundColor: "rgb(255 207 0)",
    },
    calculation: {
        flex: 2,
        //ding dang
        justifyContent: "space-around",
        alignItems: "flex-end",
        backgroundColor: "rgb(0 255 168)",
    },
    button: {
        flex: 7,
        flexDirection: "row",
        backgroundColor: "#1b1b1b",
    },
    //chia phan button thafnh 2 phan con
    numbers: {
        flex: 3,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-around",
        backgroundColor: "#5a5a5a",
    },
    //chia number thanh 3 cot, number 1, number 2, number 3
    numbers1: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-around",
        backgroundColor: "#3c3c3c",
    },
    numbers2: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-around",
        backgroundColor: "#5c5c5c",
    },
    numbers3: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-around",
        backgroundColor: "#3c3c3c",
    },

    operation: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "stretch",
        backgroundColor: "#1c1c1c",
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
    },
    textDisplay: {
        fontSize: "30px",
        fontWeight: "bold",
        color: "#fff",
    },
});
