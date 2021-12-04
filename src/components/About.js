import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const HeaderImage = styled.div`
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    width: 100%;
    border-radius: 4px;
    height: 300px;
    background-image: url('./images/showcase.jpg');
    background-size: cover;
    background-position: center center;
    transform: translateY(30px);
    opacity: 0;
    animation: 1s ease 0.6s 1 normal forwards running animateImg;

    @media ${props => props.theme.mediaQueries.large}{
        height: 400px;
        background-position: 100% 50%;
    }

    @keyframes animateImg {
        0% { 
            transform: translateY(30px);
            opacity: 0;
        }

        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
`;

const Wrapper = styled.div`
    width : 100%;
    height: auto;
    display : flex;
    -webkit-box-align: start;
    align-items : start;
    margin: 0;
    justify-content : space-between;
    flex-wrap : wrap;
    @media ${props => props.theme.mediaQueries.large}{
        flex-wrap: nowrap;
    }
`;

const Content = styled.div`
    max-width : 700px;
    width : 100%;

    @media ${props => props.theme.mediaQueries.large}{
        width : 45%;
    }
`;

const Desc = styled.p`
    margin : 40px 0;
    color: rgb(105, 105, 105);
    width : 100%;
    font-style : normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
`;

const SkillsWrapper = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${props => props.theme.mediaQueries.large}{
        flex-wrap: nowrap;
    }
`;

const Skill = styled.p`
    color: black;
    font-weight: 700;
    min-width: 200px;
    margin: 26px 0px 0px;

    & span {
        font-size: 20px;
        margin-right: 5px;
        color: rgb(180, 225, 231);
    }

    @media ${props => props.theme.mediaQueries.large}{
        min-width: unset;
        margin: 30px 0px;
    }
`;

const About = () => {
    return (
        <div>
            <HeaderImage></HeaderImage>
            <Wrapper>
                <Content>
                   <Desc>
                        I'm a <strong> self taught web developer </strong>, who loves to build products, that delight people.
                        <br />
                        <br />
                        Programming has always been at the very core of my interests.I
                        love to to build something new that people around the world
                        can experience and interact with.
                   </Desc>
                </Content>
                <Content>
                    <Desc className='m-sm-0'>
                         I build products that are not only enjoyable to use but are written in code that's maintainable and easy to understand.
                    </Desc>
                    <Desc>
                         Apart from coding, I love to watch movies with cold coffee in hand and i'm a big fan of <strong> Ar Rahman </strong> and <strong> Mani Ratnam </strong>.
                    </Desc>
                </Content>
            </Wrapper>

            <div className='container'>
                <div className='sub-container'>
                    <div className='w-100'>
                        <div className='max-w-700px'>
                            <Title title='My Skills' />
                            <p className='desc'>
                                Through my studies, I've gained a solid understanding of computer science and web development concepts, and have dedicated a lot of my free time to apply these concepts to
                                real-world scenarios and applications.
                            </p>
                        </div>

                        <SkillsWrapper>
                            <div>
                                <Skill> <span> o </span> Javascript ES6 </Skill>
                                <Skill> <span> o </span> HTML & CSS </Skill>
                            </div>

                            <div>
                                <Skill> <span> o </span> React </Skill>
                                <Skill> <span> o </span> Styled Components </Skill>
                            </div>

                            <div>
                                <Skill> <span> o </span> Node JS </Skill>
                                <Skill> <span> o </span> Express </Skill>
                            </div>

                            <div>
                                <Skill> <span> o </span> MongoDB </Skill>
                                <Skill> <span> o </span> Git </Skill>
                            </div>
                        </SkillsWrapper>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
