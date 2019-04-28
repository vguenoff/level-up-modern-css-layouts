import React from 'react';
import { createGlobalStyle } from 'styled-components';

// import Lesson02 from './components/Lesson02';
// import Lesson03 from './components/Lesson03';
import Lesson04 from './components/Lesson04';

function App() {
    return (
        <>
            <GlobalStyle />
            {/* <Lesson02 /> */}
            {/* <Lesson03 /> */}
            <Lesson04 />
        </>
    );
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

`;

export default App;
