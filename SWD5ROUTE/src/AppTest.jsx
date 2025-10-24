import React from "react";
import Component1 from "./scroll/component1";
import Component2 from "./scroll/component2";
import Component3 from "./scroll/component3";

function AppTest() {
    return (
        <div className="overflow-y-auto">
            <Component1 />
            <Component2 />
            <Component3 />
        </div>
    )
}

export default AppTest