import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Title';

const StyledIcon = styled.img`
    position : relative;
    width : 48px;
    height : auto;
`;

const Wrapper = styled.div`
    width: 100%;
    margin: 100px auto;
    flex-wrap: wrap;
`;


const Showcase = () => {
    return (
        <>
           <Link to='/'>
                <StyledIcon src='./images/icon.png' />
           </Link>
           <Wrapper>
               <div>
                    <Title title="Hi There, I'm ferolic" />
                    <p className='desc'> 
                      A <strong> React Js </strong> developer, who loves coffee and javascript.
                    </p>
               </div>
           </Wrapper>
        </>
    )
}

export default Showcase
