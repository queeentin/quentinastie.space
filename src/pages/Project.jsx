import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { projects } from "../content/projects";
import { useTranslation } from "react-i18next";

export function Project() {

    const {t, i18n} = useTranslation();
    const language = i18n.language;

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
                                    <dd>{project.informations}</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="images">
                            {project.images.map((item, index) => {
                                if (Array.isArray(item) && item.length > 0) {
                                    return (
                                        <div key={index} className="inline">
                                            <div>
                                                {item.map((subItem, subIndex) => {
                                                    if (subItem.source.endsWith("mp4")) {
                                                        return <figure key={subIndex}><video autoPlay loop muted playsInline src={"./images/" + id + "/" + subItem.source} /></figure>;
                                                    } else {
                                                        return <figure key={subIndex}><img src={"./images/" + id + "/" + subItem.source} /></figure>
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    );
                                } else {
                                    if (item.source.endsWith("mp4")) {
                                        return <figure key={index}><video autoPlay loop muted playsInline src={"./images/" + id + "/" + item.source} /></figure>;
                                    } else {
                                        return <figure key={index}><img src={"./images/" + id + "/" + item.source} /></figure>
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