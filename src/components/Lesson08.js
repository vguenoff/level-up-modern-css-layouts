import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    --box-color: #000;
    display: grid;
    background: var(--box-color);
    grid: 100px / repeat(2, 1fr 3fr);
    grid-gap: 10px;
    > div {
        --box-color: blue;
        background: var(--box-color);
        color: #fff;
        text-align: center;
        line-height: 100px;
        &:nth-child(1) {
            grid-column: 1 / -1;
        }
        &:nth-child(2) {
            grid-area: 2 / 2 / 5 / 3;
        }
        &:nth-child(3) {
            grid-area: 4 / 4 / 5 / -1;
        }
    }
`;

// A quick overview of CSS variables
const Lesson08 = () => (
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

export default Lesson08;
