import React, { useState, useEffect } from 'react';
import { Clock } from '../components/Clock';
import { Lang } from '../components/Lang';
import { Socials } from '../components/Socials';

export function Home() {
    return (
      <>
        <header>
            <div id="name">
                <h1>Quentin Astié</h1>
            </div>
            <Clock />
            <Lang />
            <Socials />
            <div id="resume">
                <h4>Biographie</h4>
                <div>
                    <p>Quentin est designer graphique, codeur et enseignant.</p>
                    <p> Il vit et travaille à Paris où il fait partie de l'<a href="https://www.instagram.com/atelier.ravi.paris/">atelier Ravi</a>. Il collabore avec des artistes, des designer·euses et des institutions.</p>
                    <p>Il enseigne le graphisme à <a href="https://prepart.fr/">Prep'Art</a>, ainsi que le design web et le design d'interface à l'<a href="https://www.ecv.fr/">ECV</a>.</p>
                    <p>Quentin est un membre adhérent du <a href="http://snapcgt.org/">SNAP-CGT.</a></p>
                    <p>Site web composé en Ductus par <a href="http://amelie.tools/">Amélie Dumont</a> et développé avec React.</p>
                </div>
            </div>
        </header>
        </>
    )
}