import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { projects } from "../content/projects";
import { useTranslation } from "react-i18next";
import LazyLoad from "react-lazy-load";

export function Project() {

    const {t, i18n} = useTranslation();
    const language = i18n.language;

    const { id } = useParams();
    const [project, setProject] = useState(null);
    
    useEffect(() => {
        const medias = document.querySelectorAll("#content img, #content video");
        console.log(medias);

        medias.forEach((element) => {
            const media = element.src;
            console.log(media.width, media.height);
        });
    });

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
                    <NavLink className="close" to="/">{t("close")}</NavLink>
                    <header>
                        <NavLink className="close" to="/">{t("close")}</NavLink>
                        <dl>
                            <dt>{t("labels.project")}</dt>
                            <dd>{project.title[language]}</dd>
                        </dl>
                        <dl>
                            <dt>{t("labels.year")}</dt>
                            <dd>{project.date}</dd>
                        </dl>
                    </header>
                    <main>
                        <div className="infos">
                            <div id="datas">
                                <dl>
                                    <dt>{t("labels.for")}</dt>
                                    <dd>{project.for}</dd>
                                </dl>
                                {project.with && (
                                <dl>
                                    <dt>{t("labels.with")}</dt>
                                    <dd>
                                        {project.with.map((value, index) => {
                                            return <a key={index} href={value["link"]}>{value["name"]}</a>
                                        })}
                                    </dd>
                                </dl>
                                )}
                                <dl>
                                    <dt>{t("labels.category")}</dt>
                                    <dd>{project.category[language]}</dd>
                                </dl>
                            </div>
                            <div id="details">
                                <dl>
                                    <dt>{t("labels.infos")}</dt>
                                    <dd>{project.informations[language]}</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="images">
                            {project.images.map((item, index) => {
                                //console.log(item);
                                if (Array.isArray(item) && item.length > 0) {
                                    return (
                                        <div key={index} className="inline">
                                        {item.map((subItem, subIndex) => {
                                            if (subItem.endsWith("mp4")) {
                                                return <figure key={subIndex}>
                                                            {/* <LazyLoad offset={100}> */}
                                                                <video preload="auto" autoPlay loop muted playsInline src={"./images/" + id + "/" + subItem} />
                                                            {/* </LazyLoad> */}
                                                        </figure>
                                            } else {
                                                return <figure key={subIndex}>
                                                            {/* <LazyLoad offset={100}> */}
                                                                <img src={"./images/" + id + "/" + subItem} />
                                                            {/* </LazyLoad> */}
                                                        </figure>
                                            }
                                        })}
                                        </div>
                                    )
                                } else {
                                    if (item.endsWith("mp4")) {
                                        return <figure key={index}>
                                                    {/* <LazyLoad offset={100}> */}
                                                        <video preload="auto" autoPlay loop muted playsInline src={"./images/" + id + "/" + item} />
                                                    {/* </LazyLoad> */}
                                                </figure>
                                    } else {
                                        return <figure key={index}>
                                                {/* <LazyLoad offset={100}> */}
                                                    <img src={"./images/" + id + "/" + item} />
                                                {/* </LazyLoad> */}
                                            </figure>
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