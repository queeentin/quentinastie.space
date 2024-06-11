import React, { useState, useEffect } from 'react';

export function Clock() {
    const [time, setTime] = useState(new Date());
    const [daytime, setDaytime] = useState("");
    const [mode, setMode] = useState("");
    const [styles, setStyles] = useState([
        {"morning" : ["linear-gradient(#fffadc, #ffbbe9)", "#000", "multiply", "none", "1", "0.3", "0.3", "0.3", "0.3"]},
        {"afternoon" : ["linear-gradient(to top, #fddb92 0%, #73b7ff 100%)", "#000", "multiply", "none", "0.3", "1", "0.3", "0.3", "0.3"]},
        {"evening" : ["linear-gradient(to top,#D88B19, #132758)", "#FFF", "screen", "invert(100%)", "0.3", "0.3", "1", "0.3", "0.3"]},
        {"night" : ["linear-gradient(#2f1862, #6847ae)", "#FFF", "screen", "invert(100%)", "0.3", "0.3", "0.3", "1", "0.3"]},
        {"rainbow" : ["","", "multiply", "none", "0.3", "0.3", "0.3", "0.3", "1"]}
    ]);

    useEffect(() => {
        defineMode();
        updateSheet();
    }, []);

    useEffect(() => {
        updateSheet();
    }, [mode]);

    useEffect(() => {
        defineMode();
    }, [daytime]);

    useEffect(() => {
        defineDaytime();
        countTime();
    }, [time]);

    const countTime = () => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }

    const defineMode = () => {
        let newMode = daytime;
        setMode(newMode);
    };

    const defineDaytime = () => {
        const hour = new Date().getHours();
        let newDaytime = "";
        if (hour >= 6 && hour < 12) {
            newDaytime = "morning";
        } else if (hour >= 12 && hour < 17) {
            newDaytime = "afternoon";
        } else if (hour >= 17 && hour < 21) {
            newDaytime = "evening";
        } else {
            newDaytime = "night";
        }
        setDaytime(newDaytime);
    };

    const changeMode = (newMode) => {
        setMode(newMode);
    };
    
    const updateSheet = () => {
        let styleObject = styles.find(style => style[mode]);
        if (styleObject) {
            let modeStyles = styleObject[mode];
            document.getElementById("home").style.background = modeStyles[0];
            document.querySelector("#home > header").style.color = modeStyles[1];
            document.querySelectorAll(".icons li svg").forEach(function(svgElement) {svgElement.style.stroke = modeStyles[1];});
            document.querySelector("#home > figure").style.mixBlendMode = modeStyles[2];
            document.getElementById("iconImg").style.webkitFilter = modeStyles[3];
            document.querySelector(".icons li:nth-child(1)").style.opacity = modeStyles[4];
            document.querySelector(".icons li:nth-child(2)").style.opacity = modeStyles[5];
            document.querySelector(".icons li:nth-child(3)").style.opacity = modeStyles[6];
            document.querySelector(".icons li:nth-child(4)").style.opacity = modeStyles[7];
            document.querySelector(".icons li:nth-child(5)").style.opacity = modeStyles[8];
        }
    };

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function addNewstyles() {
        var color1 = getRandomColor();
        var color2 = getRandomColor();
        styles[4]["rainbow"] = ["linear-gradient(white, " + color1 + ")", color2, "multiply", "none", "0.3", "0.3", "0.3", "0.3", "1"];
        updateSheet();
    }

    return (
    <div id="clock">
        <h4>{time.toLocaleTimeString()}</h4>
        <ul className="icons">
            <li onClick={() => changeMode("morning")}><svg><use xlinkHref="./icons/icon_morning.svg#morning"></use></svg></li>
            <li onClick={() => changeMode("afternoon")}><svg><use xlinkHref="./icons/icon_afternoon.svg#afternoon"></use></svg></li>
            <li onClick={() => changeMode("evening")}><svg><use xlinkHref="./icons/icon_evening.svg#evening"></use></svg></li>
            <li onClick={() => changeMode("night")}><svg><use xlinkHref="./icons/icon_night.svg#night"></use></svg></li>
            <li onClick={() => {addNewstyles(); changeMode("rainbow");}}><svg><use xlinkHref="./icons/icon_rainbow.svg#rainbow"></use></svg></li>
        </ul>
    </div>
    );
}