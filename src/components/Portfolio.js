import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const ProjectWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    margin-top: 0px;
    height: unset;

    @media ${props => props.theme.mediaQueries.large}{
        flex-wrap: nowrap;
        margin-bottom: 70px;
        margin-top: 40px;
        height: 500px;
    }
`;

const Project = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 90px;
    transition-duration: 0.3s;

    &:nth-child(1) {
        margin-right: 0;
    }
    
    &:nth-child(1) .project-image {
        background-image: url('./images/movie.png');
        background-size: cover;
        background-position:left center;
        background-repeat : no-repeat;
    }

    &:nth-child(2) .project-image {
        background-image: url('./images/coffee.jpg');
        background-size: cover;
        background-position: 50% 50%;
    }

    &:hover .project-image {
        transform : scale(1.03);
    }

    @media ${props => props.theme.mediaQueries.large}{
        width: 45%;
        margin-bottom: 0px;

        &:nth-child(1) {
            margin-right: 10%;
        }
    }
`;

const ProjectTitle = styled.div`
    width: 100%;
    font-style: normal;
    font-weight: 700;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    transform: translateY(30px);
    opacity: 0;
    animation: 1s ease 0.2s 1 normal forwards running animate;
    font-size: 30px;
    margin-bottom: 0px;
    margin-top: 30px;

    @media ${props => props.theme.mediaQueries.large}{
        font-size: 40px;
        transform: scale(1);
    }

    @keyframes animate {
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

const ProjectImg = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 4px;
    transition-duration: 0.3s;
`;

const Portfolio = () => {
    return (
        <div>
           <div className='sub-container'>
                <div className='max-w-700px'>
                    <Title title="What I've been working on"/>
                    <p className='desc'>
                        I like to stay busy and always have a project in the works.
                        Take a look at some of the projects which i have done lately!.
                    </p>
                </div>
           </div>

           <div className='sub-container'>
                <ProjectWrapper>
                   <Project>
                       <a href='https://ferolic.github.io/cinema' target='_blank' rel="noreferrer">
                            <ProjectImg className='project-image'></ProjectImg>
                       </a>
                       <a href='https://ferolic.github.io/cinema' target='_blank' rel="noreferrer">
                            <ProjectTitle> Movie Library </ProjectTitle>
                       </a>
                       <p className='desc project-desc'>
                           A Movie search app, done with react, which fetches info from tmdb api.
                        </p>
                        <a href='https://ferolic.github.io/cinema' target='_blank' rel="noreferrer">
                            <p className='link'> View Project <span> › </span>  </p>
                        </a>
                   </Project>
                   <Project>
                        <ProjectImg className='project-image'></ProjectImg>
                        <ProjectTitle> Coffee By Benjamin </ProjectTitle>
                        <p className='desc project-desc'>
                             A Clone of coffee by benjamin website, done with react. It's a kind of e-commerce app.
                            <br />
                        </p>
                        <p className='desc disabled-text'>
                           <strong>  Coming Soon ! </strong>
                        </p>
                   </Project>
                </ProjectWrapper>
           </div>
        </div>
    )
}

export default Portfolio
