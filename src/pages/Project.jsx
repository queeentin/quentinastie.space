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

    // lazyload

    useEffect(() => {
        const lazyLoadElements = document.querySelectorAll(".lazyload");

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.9
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const src = entry.target.getAttribute("data-src");
                    if (entry.target.classList.contains("video")) {
                        const video = document.createElement("video");
                        video.src = src;
                        video.autoplay = true;
                        video.loop = true;
                        video.playsinline = true;
                        video.muted = true;
                        video.addEventListener('loadeddata', () => {
                            entry.target.classList.add('is-visible');
                        });
                        entry.target.appendChild(video);
                    } else if (entry.target.classList.contains("img")) {
                        const img = document.createElement("img");
                        img.src = src;
                        img.addEventListener('load', () => {
                            entry.target.classList.add('is-visible');
                        });
                        entry.target.appendChild(img);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        lazyLoadElements.forEach(element => {
            observer.observe(element);
        });
    });

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
                                if (Array.isArray(item) && item.length > 0) {
                                    return (
                                        <div key={index} className="inline">
                                        {item.map((subItem, subIndex) => {
                                            if (subItem.endsWith("mp4")) {
                                                return <figure key={subIndex}>
                                                            <div className="lazyload video" data-src={"./images/" + id + "/" + subItem}></div>
                                                        </figure>
                                            } else {
                                                return <figure key={subIndex}>
                                                            <div className="lazyload img" data-src={"./images/" + id + "/" + subItem}></div>
                                                        </figure>
                                            }
                                        })}
                                        </div>
                                    )
                                } else {
                                    if (item.endsWith("mp4")) {
                                        return <figure key={index}>
                                                    <div className="lazyload video" data-src={"./images/" + id + "/" + item}></div>
                                                </figure>
                                    } else {
                                        return <figure key={index}>
                                                    <div className="lazyload img" data-src={"./images/" + id + "/" + item}></div>
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