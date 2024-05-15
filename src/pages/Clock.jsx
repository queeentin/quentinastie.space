import React, { useState, useEffect } from 'react';

export function Clock() {
    const [time, setTime] = useState(new Date());
    const [daytime, setDaytime] = useState("");
    const [mode, setMode] = useState("");

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
        const styleSheets = document.styleSheets;
        for (let i = 1; i < styleSheets.length; i++){
            const sheet = styleSheets[i];
            const sheetName = sheet.ownerNode.attributes[1].nodeValue;
            if (sheetName.includes(mode)){
                sheet.disabled = false;
            } else {
                sheet.disabled = true;
            }
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
        const newStyles = "body {--bg-color: " + color1 + "; --font-color: " + color2 + ";}";
        const feuilleDeStyle = document.styleSheets[5];
        feuilleDeStyle.insertRule(newStyles, feuilleDeStyle.cssRules.length);    
    }

    return (
    <div className="gutter">
        <h4>{time.toLocaleTimeString()}</h4>
        <ul className="icons">
            <li onClick={() => changeMode("morning")}><svg><use xlinkHref="./icons/icon_morning.svg#morning"></use></svg></li>
            <li onClick={() => changeMode("afternoon")}><svg><use xlinkHref="./icons/icon_afternoon.svg#afternoon"></use></svg></li>
            <li onClick={() => changeMode("evening")}><svg><use xlinkHref="./icons/icon_evening.svg#evening"></use></svg></li>
            <li onClick={() => changeMode("night")}><svg><use xlinkHref="./icons/icon_night.svg#night"></use></svg></li>
            <li onClick={() => {changeMode("rainbow"); addNewstyles();}}><svg><use xlinkHref="./icons/icon_rainbow.svg#rainbow"></use></svg></li>
        </ul>
    </div>
    );
}