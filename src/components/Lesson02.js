import React from 'react';
import styled from 'styled-components';

// HOW TO GET STARTED WITH FLEXBOX
function Lesson02() {
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
    border: 2px dashed red;
    box-sizing: border-box;
    height: 100vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: flex-end;
    /* align-content: center; */
    /* align-items: baseline; */
    flex-wrap: wrap;

    > div {
        background: #373142;
        color: #fff;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 150px;

        &:nth-child(2) {
            height: 250px;
        }
    }
`;

export default Lesson02;
