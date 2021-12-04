import React from 'react';
import styled from 'styled-components';

const SocialIconsWrapper = styled.div`
  margin-top : 24px;
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SocialIcon = styled.a`
  & > i {
    display: inline-block;
    padding: 0.7rem 0.8rem;
    font-size: 1.6rem;
    color: #555;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
  }

  & > i:hover {
    color: #333;
  }
`;

const FooterImgWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const FooterImg = styled.img`
  width: 18%;
  margin-bottom: 0 auto;
  display: inline-block;
  text-align: center;
`;

const CopyRight = styled.p`
  font-size: 0.575rem;
  line-height: 0.66125rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const Footer = () => {
  return (
    <>
      <>
        <div>
          <SocialIconsWrapper>
          <SocialIcon
              href="https://www.linkedin.com/in/ashwin-ferolic-5786541b6/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
            
            <SocialIcon
              href="https://www.instagram.com/coldcoffee_cinema/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </SocialIcon>

            <SocialIcon
              href="https://github.com/ferolic"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </SocialIcon>
            
          </SocialIconsWrapper>
          <div>
            <FooterImgWrapper>
              <FooterImg src='./images/icon.png' />
              <CopyRight> copyright &copy; 2022,ferolic </CopyRight>
            </FooterImgWrapper>
          </div>
        </div>
      </>
    </>
  );
};

export default Footer;