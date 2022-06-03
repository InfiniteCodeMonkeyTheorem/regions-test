import styled from "styled-components";

export const CardWrapper = styled.div<{ height: number; width: number }>`
  background-color: #ffffff;
  display: flex;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

export const ImageWrapper = styled.div<{ width: number }>`
  position: relative;
  height: 100%;
  width: ${({ width }) => width}px;
`;

export const ExpositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

export const Subtitle = styled.span<{ height: number }>`
  margin-top: ${({ height }) => (height === 402 ? "80px" : "30px")};
  font-weight: 400px;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 18px;
  color: #888888;
`;

export const Title = styled.span<{ height: number }>`
  margin-top: margin-top: ${({ height }) => (height === 402 ? "6px" : "10px")};
  font-weight: 700px;
  font-size: 30px;
  letter-spacing: -0.3px;
  line-height: 38px;
  color: #333333;
`;

export const DateLabel = styled.span<{ height: number }>`
margin-top: ${({ height }) => (height === 402 ? "10px" : "5px")};
font-weight: 500px;
font-size: 16px
letter-spacing: 0.91px;
line-height: 20px;
color: #333333;
`;

export const Description = styled.span<{ width: number; height: number }>`
  margin-top: ${({ height }) => (height === 402 ? "10px" : "5px")};
  font-size: ${({ height }) => (height === 402 ? "18px" : "16px")};
  letter-spacing: 0px;
  line-height: ${({ height }) => (height === 402 ? "28px" : "20px")};
  color: #333333;
  width: ${({ width }) => (width === 1170 ? "540px" : "259px")};
`;
