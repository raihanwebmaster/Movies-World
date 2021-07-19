import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Videos = styled.video`
  left: 73px;
  width: 73%;
  position: absolute;
  top: 86px;

  @media (max-width: 1024px) {
    left: 62px;
    top: 72px;
  }
  @media (max-width: 768px) {
    left: 127px;
    top: 94px;
    width: 63%;
  }
  @media (max-width: 500px) {
    left: 84px;
    top: 44px;
    width: 56%;
  }
  @media (max-width: 400px) {
    left: 78px;
    top: 39px;
  }
  @media (max-width: 320px) {
    left: 71px;
    top: 31px;
  }
`;
export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
  &:nth-last-of-type(2) {
    ${Videos}{
      max-width: 61%;
        left: 105px;
        top: 46px;
        @media (max-width: 1024px) {
          left: 87px;
          top: 39px;
        }
        @media (max-width: 768px) {
          left: 159px;
          top: 48px;
          width: 53%;
        }
        @media (max-width: 500px) {
          left: 102px;
          top: 24px;
          width: 47%;
        }
        @media (max-width: 400px) {
          left: 92px;
          top: 20px;
          width: 45%;
        }
        @media (max-width: 320px) {
    
          left: 85px;
          top: 16px;
          width: 41%;
      
        }
    
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 99;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
