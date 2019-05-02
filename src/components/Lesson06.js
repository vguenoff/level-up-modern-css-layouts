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
    }
`;

export default Lesson06;
