import React from 'react';
import styled from 'styled-components';

// How to get started with flexbox
const StyledContainer = styled.div`
    border: 2px dashed red;
    box-sizing: border-box;
    height: 100vh;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;

    > div {
        background: #373142;
        color: #fff;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 150px;
        border: 1px solid red;

        &:nth-child(2) {
            height: 150px;
        }
    }
`;

const Lesson02 = () => (
    <StyledContainer>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </StyledContainer>
);

export default Lesson02;
