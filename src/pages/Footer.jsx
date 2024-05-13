import React from "react";
import { NavLink } from "react-router-dom";
import { projects } from "../content/projects";

export function Footer() {
    return (
        <footer>
            {projects.map((value, index) => {
                return <NavLink key={index} to={"/"+value["id"]}>{value["title"]}</NavLink>
            })}
        </footer>
    );
}