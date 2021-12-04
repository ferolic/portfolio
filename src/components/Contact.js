import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(252, 252, 252);
    padding : 0;
    margin : 0;

    @media ${props => props.theme.mediaQueries.large}{
        padding: 0 0 16px 0;
        margin: 70px 0px 0px;
    }
`;

const Layout = styled.div`
    padding : 20px;
    margin : 75px auto;

    @media ${props => props.theme.mediaQueries.large}{
        max-width: 940px;
        padding : 100px 0 0;
        margin : 75px auto;
    }
`;

const Header = styled.div`
    margin: 60px 0px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;

    @media ${props => props.theme.mediaQueries.large}{
        flex-wrap: nowrap;
        margin-bottom: 50px;
    }
`;

const GridWrapper = styled.div`
    margin-top: 100px;
    display : flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items :center;
    height : auto;
    width: 100%;
    flex-wrap : wrap-reverse;

    @media ${props => props.theme.mediaQueries.large}{
        flex-wrap: nowrap;
    }
`;

const GridLeft = styled.div`
    flex : 1 1 100%;
    padding : 0;
    margin-top: 40px;
    display :flex;
    max-width: 100%;

    @media ${props => props.theme.mediaQueries.large}{
        flex: 1 1 30%;
        margin-top: 0px;
        max-width: 200px;
        margin-right: 200px;
    }
`;

const GridTextWrapper = styled.div`
    flex: 1 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0px;
    background-position: center center;
`;

const InstaTitle = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 129.69%;
    text-align: left;
    max-width: 90%;
    letter-spacing: normal;

    @media ${props => props.theme.mediaQueries.large}{
        max-width : 200px;
    }
`;

const GridRight = styled.div`
    padding : 0;
    display : grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows : 1fr 1fr;
    gap : 10px;
    grid-template-areas:
        "left left centertop right right"
        "left left centerbot right right";
    gap : 10px;
    flex : 1 1 100%;
    flex-wrap : wrap;
    
    @media ${props => props.theme.mediaQueries.large}{
        flex : 1 1 70%;
        gap: 20px;
    }
`;

const Left = styled.div`
    grid-area : left / left / left / left;
    height : 220px;
    background-image: url('./images/str.jpg');
    background-size: cover;
    border-radius: 4px;
    background-position: right right;

    @media ${props => props.theme.mediaQueries.large}{
        height : 300px;
    }
`;

const CenterTop = styled.div`
    grid-area: centertop / centertop / centertop / centertop;
    background-image: url('./images/ar.jpg');
    background-size: cover;
    border-radius: 4px;
    height: auto;
    background-position:center left;

    @media ${props => props.theme.mediaQueries.large}{
        height : unset;
    }
`;

const CenterBot = styled.div`
    grid-area: centerbot / centerbot / centerbot / centerbot;
    background-image: url('./images/tamasha.jpg');
    border-radius: 4px;
    background-size: cover;
    height: auto;
    background-position: center;

    @media ${props => props.theme.mediaQueries.large}{
        height : unset;
    }
`;

const Right = styled.div`
    grid-area: right / right / right / right;
    background-image: url('./images/ani.jpg');
    border-radius: 4px;
    background-size: cover;
    height: auto;
    background-position:center;

    @media ${props => props.theme.mediaQueries.large}{
        height : unset;
    }
`;

const Contact = () => {
    return (
        <Wrapper>
            <Layout>
                <Header>
                    <div className='max-w-700px'>
                        <Title title="Let's Build Something Together" />
                        <p className='desc max-w-60'>
                            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                        </p>
                        <a href='mailto:ferolicdev@gmail.com'>
                            <div className='link text-lowercase'> ferolicdev@gmail.com </div>
                        </a>
                    </div>
                </Header>
                <GridWrapper>
                    <GridLeft>
                        <GridTextWrapper>
                            <InstaTitle> I'm a lot cooler on instagram </InstaTitle>
                            <a href='/'>
                                <p className='link'> See More <span> › </span> </p>
                            </a>
                        </GridTextWrapper>
                    </GridLeft>
                    <GridRight>
                        <Left></Left>
                        <CenterTop></CenterTop>
                        <CenterBot></CenterBot>
                        <Right></Right>
                    </GridRight>
                </GridWrapper>
            </Layout>
        </Wrapper>
    )
}

export default Contact
