import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: grid;
    /* grid-template-columns: 100px auto 100px 100px; */
    /* grid-template-rows: 100px 100px; */
    /* shorthand / template rows / template columns */
    grid: 100px 100px / 100px auto 100px 100px;
    grid-gap: 20px 10px; /* could be only 10px */
    grid-auto-flow: dense; /* column */

    > div {
        background: #373142;
        color: #fff;
        text-align: center;
        line-height: 100px;
    }
`;

// CSS grid basic container properties
const Lesson04 = () => (
    <StyledContainer>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        {/* <div>9</div> */}
        {/* <div>9</div> */}
    </StyledContainer>
);

export default Lesson04;
