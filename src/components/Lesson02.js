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
    > div {
        background: #373142;
        color: #fff;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
`;

export default Lesson02;
