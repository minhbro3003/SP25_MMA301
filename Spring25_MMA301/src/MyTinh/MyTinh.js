import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MyTinh = () => {
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
                <TouchableOpacity key={nums[i][j]}>
                    <Text>{nums[i][j]}</Text>
                </TouchableOpacity>
            );
        }
        rows.push(
            <View style={styles.rows} key={i}>
                {row}
            </View>
        );
    }
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.button}>
                    <View style={styles.number}>{rows}</View>
                </View>
            </View>
        </View>
    );
};

export default MyTinh;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%", // Đảm bảo rộng toàn bộ màn hình
        height: "100%", // Đảm bảo cao toàn bộ màn hình
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
    rows: {
        // flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",

        justifyContent: "space-around",
        alignItems: "center",
    },
    button: {
        flex: 7,
        flexDirection: "row",
    },
    number: {
        flex: 3,
        backgroundColor: "#ccc",
    },
});
