import React from 'react';
import styled from 'styled-components';

// Flexbox container children
function Lesson03() {
    return (
        <StyledContainer>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    border: dashed 2px red;
    display: flex;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    flex-wrap: wrap;
    > div {
        background: #373142;
        color: #fff;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        &:nth-child(2) {
            height: 150px;
        }
    }
`;

export default Lesson03;
