import Head from 'next/head';
import React from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';
import config from 'react-reveal/globals';

import { NavMain } from '../components';
import { _MenuContext } from '../contexts';

config({ ssrFadeout: true });

const LayoutBase = ({ children }) => {
    const [ref, percentage] = useScrollPercentage();
    
    console.log(percentage);
    
    return <>
        <_MenuContext>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/rvs5fwh.css" />
            </Head>
            { children }
            <NavMain />
        </_MenuContext>
    </>
}

export default LayoutBase