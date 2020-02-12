import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/gridlayoutio-logo.svg';

const StyledContainer = styled.div`
    display: grid;
    height: 100vh;
    /* grid areas */
    header {
        grid-area: header;
        background: #f4991a;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;

        @media (min-width: 768px) {
            justify-content: space-between;
        }
    }
    nav {
        grid-area: nav;
    }
    main {
        grid-area: main;
        background: #f9f5f0;
    }
    aside {
        grid-area: aside;
    }
    footer {
        grid-area: footer;
        background: #321313;
    }
    nav,
    aside {
        background: #f2ead3;
    }
    header,
    footer {
        color: #fff;
    }

    /* mobile */
    grid-template-areas:
        'header'
        'nav'
        'main'
        'aside'
        'footer';
    grid-template-columns: 1fr;
    grid-template-rows:
        auto /* Header */
        minmax(75px, auto) /* Nav */
        1fr /* Main */
        minmax(75px, auto) /* Aside */
        auto; /* Footer */
    grid-gap: 5px;

    /* desktop */
    @media (min-width: 801px) {
        max-width: 1200px;
        margin: 0 auto;

        grid-template-areas:
            'header header'
            'nav nav'
            'main aside'
            'footer footer';
        grid-template-columns: 1fr 300px;
        grid-template-rows: auto 1fr auto;
        grid-gap: 10px;
    }
    header,
    nav,
    main,
    aside,
    footer {
        padding: 5px;
        @media (min-width: 768px) {
            padding: 10px;
        }
    }
`;

// CSS grid container advanced properties
const Lesson05 = () => (
    <StyledContainer>
        <header>
            <img src={Logo} width="210" alt="GridLayout.io"></img>
            <h1>Holy Grail Layout with CSS Grid</h1>
        </header>
        <nav>NAVIGATION</nav>
        <main>
            <h1>MAIN CONTENT</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, tempora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia fuga facere voluptate consequuntur
                quasi eaque ad laborum odit! Molestias. Lorem ipsum dolor sit
                amet consectetuora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia fuga facere voluptate consequuntur
                quasi eaque ad laborum odit! Molestias. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eveniet, tempora! Cumque aut
                assumenda ex modi id minima, deleniti explicabo mollitia fuga
                facere voluptate consequuntur quasi eaque ad laborum odit!
                Molestias. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eveniet, tempora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia ad laborum odit! Molestias. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                tempora! Cumque aut assumenda ex modi id minima, deleniti
                explicabo mollitia fuga facere voluptate consequuntur quasi
                eaque ad laborum odit! Molestias.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, tempora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia fuga facere voluptate consequuntur
                quasi eaque ad laborum odit! Molestias. Lorem ipsum dolor sit
                amet consectetuora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia fuga facere voluptate consequuntur
                quasi eaque ad laborum odi quasi eaque ad laborum odit!
                Molestias. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eveniet, tempora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia ad laborum odit! Molestias. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                tempora! Cumque aut assumenda ex modi id minima, deleniti
                explicabo mollitia fuga facere voluptate consequuntur quasi
                eaque ad laborum odit! Molestias.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, tempora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia fuga facere voluptate consequuntur
                quasi eaque ad laborum odit! Molestias. Lorem ipsum dolor sit
                amet consectetuora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia fuga facere voluptate consequuntur
                quasi eaque ad laborum odit! Moit amet consectetur adipisicing
                elit. Eveniet, tempora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia ad laborum odit! Molestias. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                tempora! Cumque aut assumenda ex modi id minima, deleniti
                explicabo mollitia fuga facere voluptate consequuntur quasi
                eaque ad laborum odit! Molestias.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, tempora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia fuga facere voluptate consequuntur
                quasi eaque ad laborum odit! Molestias. Lorem ipsum dolor sit
                amet consectetuora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia fuga facere voluptate consequuntur
                quasi eaque ad laborum o quasi eaque ad laborum odit! Molestias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, tempora! Cumque aut assumenda ex modi id minima,
                deleniti explicabo mollitia ad laborum odit! Molestias. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                tempora! Cumque aut assumenda ex modi id minima, deleniti
                explicabo mollitia fuga facere voluptate consequuntur quasi
                eaque ad laborum odit! Molestias.
            </p>
        </main>
        <aside>SIDEBAR / ADS</aside>
        <footer>© 2020 GridLayout.io</footer>
    </StyledContainer>
);

export default Lesson05;
