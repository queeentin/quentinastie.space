import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { projects } from "../content/projects";

export function Footer() {

    useEffect(() => {
        const iconImg = document.getElementById("iconImg");
    }, []);
    
    function displayIcon(event){
        const myClass = event.currentTarget.className;
        const newSrc = "./images/" + myClass + "/icon.svg";
        iconImg.src = newSrc;
    }

    function clearImageSrc(){
        iconImg.src = "";
    }
    
    return (
        <footer>
            <div id="links">
                {projects.map((value, index) => {
                    return (
                        <NavLink onMouseOver={displayIcon} onMouseOut={clearImageSrc} key={index} className={value["id"]} to={"/"+value["id"]}>
                            <figure><img src={"./images/" + value["id"] + "/icon.svg"}></img></figure>
                            <p>{value["title"]}</p>
                        </NavLink>
                        // <NavLink key={index} className={value["id"]} to={"/"+value["id"]}>
                        //     <figure><img src={"./images/" + value["id"] + "/icon.svg"}></img></figure>
                        //     <p>{value["title"]}</p>
                        // </NavLink>
                    );
                })}
            </div>
        </footer>
    );
}