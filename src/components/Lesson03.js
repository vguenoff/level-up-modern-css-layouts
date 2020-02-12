import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    border: dashed 2px red;
    display: flex;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    /* flex-wrap: wrap; */
    > div {
        box-sizing: border-box;
        background: #373142;
        color: #fff;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        border: 1px solid red;
        &:nth-child(2) {
            height: 150px;
            /* flex-grow 1; flex-shrink 0; flex basis: auto */
            flex: 1 0 auto;
            /* flex-grow: 1;
            flex-basis: 200px; */
            /* order: 2; */
        }
        &:nth-child(3) {
            height: 150px;
            flex-grow: 3;
            /* order: 1; */
            /* align-self: flex-end; */
        }
    }
`;

// Flexbox container children
const Lesson03 = () => (
    <StyledContainer>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </StyledContainer>
);

export default Lesson03;
