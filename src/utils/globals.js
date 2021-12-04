import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        outline : none;
    }

    *, 
    ::before,
    ::after {
        box-sizing: inherit;
    }
    
    html {
        scroll-behavior : smooth;
        --text-color : ${props => props.theme.colors.text};
        --main : ${props => props.theme.colors.main};
    }

    body {
        font-family: 'Muli', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    a {
        text-decoration : none;
        color : var(--text-color);
    }

    img {
        border-style : none;
        outline: none;
    }

    .m-sm-0 {
        @media (max-width:960px){
            margin : 0;
        }
    }

    .container {
        margin : 100px 0 200px;
        width : 100%;
        height: auto;
        display : flex;
        -webkit-box-align: center;
        align-items:center;
        flex-wrap: wrap;

        @media ${props => props.theme.mediaQueries.large}{
            flex-wrap: nowrap;
        }
    }

    .sub-container {
        margin: 0px;
        width: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-wrap: wrap;

        @media ${props => props.theme.mediaQueries.large}{
            flex-wrap: nowrap;
        }
    }

    .w-100{
        width: 100%;
    }

    .max-w-700px {
        max-width : 700px;
    }

    .desc {
        margin: 50px 0px;
        color: rgb(105, 105, 105);
        width: 100%;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 184.69%;
        letter-spacing: 0.03em;
    }

    .link {
        margin: 50px 0px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 163.19%;
        display: inline;
        color: black;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        border-bottom: 2px solid transparent;
        transition: border-bottom 0.3s ease 0s;
    }

    .link:hover {
        border-bottom: 2px solid black;
    }

    .project-desc {
        margin : 10px 0 20px;
    }

    .max-w-60 {
        @media (min-width:960px){
            max-width : 60%;
        }
    }

    .text-lowercase {
        text-transform: lowercase;
    }

    .disabled-text {
        margin : 10px 0;
        text-transform : uppercase;
        font-size: 14px;
    }

    .header-title {
        margin-bottom : 0 !important;
    }
`;