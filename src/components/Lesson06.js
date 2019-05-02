import React from 'react';
import styled from 'styled-components';

// Children properties for CSS grid
function Lesson06() {
    return (
        <StyledContainer>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: grid;
    grid: 100px / repeat(2, 1fr 3fr);
    grid-gap: 10px;
    > div {
        background: #373142;
        color: #fff;
        text-align: center;
        line-height: 100px;

        :nth-child(1) {
            grid-column: 3 / -1; /* takes the whole line */
        }
        :nth-child(2) {
            grid-column: 1 / 3;
            /* grid-row: 1 / span 3; */
            grid-row: 1 / span 4;
            z-index: 10;
            /* Things could be overlaid and we can use z-index with grid! */
        }
        :nth-child(3) {
            grid-column: 4 / -1;
            grid-row: 4 / span 2;
        }
    }
`;

export default Lesson06;
