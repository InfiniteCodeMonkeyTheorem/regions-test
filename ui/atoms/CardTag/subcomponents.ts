import styled from "styled-components";

export const TagWrapper = styled.div<{ title: string }>`
  padding: 4px 7px 4px 8px;
  z-index: 1;
  position: absolute;
  top: 20px;
  left: -5px;
  background-color: #ffffff;
  height: 26px;
  border-left: 5px solid;
  border-left-color: ${({ title }) =>
    title === "International" ? "#F7B500" : "#32C5FF"};
`;

export const Tag = styled.span`
  font-size: 14px;
  letter-spacing: 0.8px;
  line-height: 18px;
  color: #333333;
`;
