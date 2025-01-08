import React from "react";
import Slot11 from "./src/Slot1/Slot11";
import Slot12 from "./src/Slot1/Slot12";
import Slot_2_4_Cha from "./src/Slot2/Slot_2_4_Cha";
import Slot_2_5_Cha from "./src/Slot2/Slot_2_5_Cha";
function App() {
    // App se goi cac component khac o day
    return (
        <div style={{ margin: "20px" }}>
            {/* <Slot11/> */}
            {/* <Slot12 /> */}
            <Slot_2_4_Cha />
            <Slot_2_5_Cha />
        </div>
    );
}
export default App;
