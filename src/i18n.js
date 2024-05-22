import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    interpolation: {
        escapeValue: false
    },
    lng: "fr",
    resources: {
        en: {
            translation: {
                close: "close",
                labels: {
                    lang: "Language",
                    bio: "Biography",
                    project: "Project",
                    year: "Year",
                    for: "For",
                    with: "With",
                    category: "Category",
                    infos: "Project informations"
                },
                bioContent: {
                    p1: "Quentin is a graphic designer, coder and educator.",
                    p2: "He lives and works in Paris where he is part of the <1>Ravi workspace</1>. He works with artists, designers and institutions.",
                    p3: "He teaches graphic design at <1>Prep'Art</1>, as well as web design and interface design at <2>ECV</2>.",
                    p4: "Quentin is a member of <1>SNAP-CGT</1>.",
                    p5: "Website composed in Ductus by <1>Amélie Dumont</1> and developed with React."
                }
            }
        },
        fr: {
            translation: {
                close: "fermer",
                labels: {
                    lang: "Langue",
                    bio: "Biographie",
                    project: "Projet",
                    year: "Année",
                    for: "Pour",
                    with: "Avec",
                    category: "Categorie",
                    infos: "Informations projet"
                },
                bioContent: {
                    p1: "Quentin est designer graphique, codeur et enseignant.",
                    p2: "Il vit et travaille à Paris où il fait partie de l'<1>atelier Ravi</1>. Il collabore avec des artistes, des designer·euses et des institutions.",
                    p3: "Il enseigne le graphisme à <1>Prep'Art</1>, ainsi que le design web et le design d'interface à l'<2>ECV</2>.",
                    p4: "Quentin est un membre adhérent du <1>SNAP-CGT.</1>",
                    p5: "Site web composé en Ductus par <1>Amélie Dumont</1> et développé avec React."
                }
            }
        }
    }
})