import React from 'react'
import styled from 'styled-components';

const StyledTitle = styled.h1`
    width : 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    transform : translateY(30px);
    opacity: 0;
    animation: 1s ease 0.2s 1 normal forwards running animate;

    @media ${props => props.theme.mediaQueries.large}{
        font-size: 40px;
        transform : scale(1);
    }
    
    @keyframes animate {
        0%{
            transform: translateY(30px);
            opacity: 0;
        }
        100% {
            transform : translateY(0);
            opacity: 1;
        }
    }
`;

const Title = ({ title }) => {
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    )
}

export default Title
