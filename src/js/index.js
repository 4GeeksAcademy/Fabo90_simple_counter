//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//import your own components
import Home from "./component/home.jsx";


let secs = 0;
let ten = 0;
let hundred = 0;
let thousand = 0;
let tenThousand = 0;
let hundredThousand = 0;
setInterval(() => {
    ++secs;
    if (secs > 9) {
        secs = 0;
        ten ++;
    };
    if (ten > 9) {
        ten = 0;
        hundred ++;
    };
    if (hundred > 9) {
        hundred = 0;
        thousand ++;
    };
    if (thousand > 9) {
        thousand = 0;
        tenThousand ++;
    };
    if (tenThousand > 9) {
        tenThousand = 0;
        hundredThousand ++;
    };
    if (ten == 1 && secs == 0 && hundred == 0 && thousand == 0 && tenThousand == 0 && hundredThousand == 0) {
        alert ("Ten seconds!!");
    };
    ReactDOM.render(<Home 
        seconds={secs} 
        tenSecs={ten} 
        hundredSecs={hundred} 
        thousandSecs={thousand} 
        tenThousandSecs={tenThousand}
        hundredThousandSecs={hundredThousand}
        />, document.querySelector("#app"));
    
}, 1000);
