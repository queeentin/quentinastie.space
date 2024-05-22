import { useTranslation } from "react-i18next";

export function Lang() {

    const {t, i18n} = useTranslation();

    const languages = [
        {code:"fr", frLang:"Français", enLang: "French"},
        {code: "en", frLang:"Anglais", enLang: "English"}
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return(
        <div id="lang">
            <h4>{t("labels.lang")}</h4>
            <ul>
                {
                    languages.map((lng) => {
                        const displayLang = i18n.language === "fr" ? lng.frLang : lng.enLang;
                        return (
                            <li
                                className={lng.code === i18n.language ? "active" : ""}
                                key={lng.code}
                                onClick={() => changeLanguage(lng.code)}>
                                {displayLang}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}