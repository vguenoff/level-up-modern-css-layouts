import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: grid;
    /* grid: 100px / repeat(3, 100px) auto; */
    /* grid: 100px / repeat(3, auto 50px); */
    /* grid: 100px / 1fr 10fr 1fr; 1fr = 1fraction */
    grid: 100px / repeat(2, 1fr 2fr); /* 1fr = 1fraction */
    grid-gap: 10px;
    > div {
        background: #373142;
        color: #fff;
        text-align: center;
        line-height: 100px;
    }
`;

// CSS grid container advanced properties
const Lesson05 = () => (
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

export default Lesson05;
