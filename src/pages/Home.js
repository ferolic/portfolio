import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Showcase from '../components/Showcase';

const Wrapper = styled.div`
    min-height: 100vh;
    padding : 20px;
    margin : 25px auto;

    @media ${props => props.theme.mediaQueries.large}{
        max-width: 940px;
        margin : 75px auto;
    }
`;

const Home = () => {
    return (
        <>
            <Wrapper>
                <Showcase />
                <About />
                <Portfolio />
            </Wrapper>
            <Contact />
            <Footer />
        </>
    )
}

export default Home
