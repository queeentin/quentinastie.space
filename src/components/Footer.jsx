import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { projects } from "../content/projects";
import { useTranslation } from "react-i18next";

export function Footer() {

    const { i18n } = useTranslation();
    const language = i18n.language;

    useEffect(() => {
        const iconImg = document.getElementById("iconImg");
        const scrolledElement = document.getElementById("links");
        const body = document.querySelector("body");

        body.addEventListener("wheel", (event) => {
            event.preventDefault();
          
            scrolledElement.scrollBy({
              left: event.deltaY
            });
        });
    
    }, []);

    function supportsHover() {
        return window.matchMedia("(hover: hover)").matches;
    }
    
    function displayIcon(event){
        if (supportsHover()){
            const myClass = event.currentTarget.className;
            const fileName = event.currentTarget.getAttribute("data-ext");
            const newSrc = "./images/" + myClass + "/" + fileName;
            iconImg.src = newSrc;
            iconImg.style.display = "block";
        }
    }

    function clearImageSrc(){
        iconImg.style.display = "none";
    }
    
    return (
        <footer>
            <div id="links">
                {projects.map((value, index) => {
                    const title = value.title[language];
                    const category = value.category[language];
                    return (
                        <NavLink onMouseOver={displayIcon} onMouseOut={clearImageSrc} key={index} className={value["id"]} data-ext={value["icon"]} to={"/"+value["id"]}>
                            <figure><img src={"./images/" + value["id"] + "/" + value["icon"]}></img></figure>
                            <div>
                                <p>{category}</p>
                                <p>{title}</p>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </footer>
    );
    
}