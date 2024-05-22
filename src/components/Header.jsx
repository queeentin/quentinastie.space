import React, { useState, useEffect } from 'react';
import { Clock } from '../components/Clock';
import { Lang } from '../components/Lang';
import { Socials } from '../components/Socials';
import { Resume } from './Resume';

export function Header() {
    return (
      <>
        <header>
            <div id="name">
                <h1>Quentin Astié</h1>
            </div>
            <Clock />
            <Lang />
            <Socials />
            <Resume />
        </header>
        </>
    )
}