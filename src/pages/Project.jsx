import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { projects } from '../content/projects';

export function Project() {

    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const selectedProject = projects.find(project => project.id === id);
        if (selectedProject) {
            setProject(selectedProject);
        }
    }, [id]);

    if (!project) {
        return null;
    }

    return (
        <motion.div
          key="modal"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: .75, ease: "easeInOut" }}
          id="content"
        >
            <div className="scroller">
                <div>
                    <NavLink className="close" to="/">fermer</NavLink>
                    <header>
                        <NavLink className="close" to="/">fermer</NavLink>
                        <dl>
                            <dt>Projet</dt>
                            <dd>{project.title}</dd>
                        </dl>
                        <dl>
                            <dt>Année</dt>
                            <dd>{project.date}</dd>
                        </dl>
                    </header>
                    <main>
                        <div className="infos">
                            <div id="datas">
                                <dl>
                                    <dt>Pour</dt>
                                    <dd>{project.for}</dd>
                                </dl>
                                <dl>
                                    <dt>Avec</dt>
                                    <dd>
                                        {project.with.map((value, index) => {
                                            return <a key={index} href={value["link"]}>{value["name"]}</a>
                                        })}
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>Catégorie</dt>
                                    <dd>{project.category}</dd>
                                </dl>
                            </div>
                            <div id="details">
                                <dl>
                                    <dt>Informations projet</dt>
                                    <dd>{project.informations}</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="images">
                            {project.images.map((item, index) => {
                                if (item.display === "solo"){
                                    if (item.source.endsWith("mp4")){
                                        return <figure key={index} className="solo"><video autoPlay loop muted src={"./images/" + id + "/" + item.source}/></figure>
                                    } else {
                                        return <figure key={index} className="solo"><img src={"./images/" + id + "/" + item.source}/></figure>
                                    }
                                } else {
                                    if (item.source.endsWith("mp4")){
                                        return <figure key={index} className="duo"><video autoPlay loop muted src={"./images/" + id + "/" + item.source}/></figure>
                                    } else {
                                        return <figure key={index} className="duo"><img src={"./images/" + id + "/" + item.source}/></figure>
                                    }
                                }
                            })}
                        </div>
                    </main>
                </div>
            </div>
        </motion.div>
    )
}