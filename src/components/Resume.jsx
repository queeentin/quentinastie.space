import { useTranslation, Trans } from 'react-i18next';

export function Resume() {
    const {t} = useTranslation();

    return (
        <div id="resume">
            <h4>{t("labels.bio")}</h4>
            <div>
                <p><Trans i18nKey="bioContent.p1"></Trans></p>
                <p><Trans i18nKey="bioContent.p2" components={{ 1: <a href="https://www.instagram.com/atelier.ravi.paris/" /> }} /></p>
                <p><Trans i18nKey="bioContent.p3" components={{ 1: <a href="https://prepart.fr/" />, 2: <a href="https://www.ecv.fr/" />}} /></p>
                <p><Trans i18nKey="bioContent.p4" components={{ 1: <a href="http://snapcgt.org/" /> }} /></p>
                <p><Trans i18nKey="bioContent.p5" components={{ 1: <a href="http://amelie.tools/" /> }} /></p>
            </div>
        </div>
    )
}