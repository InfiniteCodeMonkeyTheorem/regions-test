import styled from "styled-components";
import { Tag, TagWrapper } from "./subcomponents";

const CardTag = ({ title }: { title: string }) => {
  return (
    <TagWrapper title={title}>
      <Tag>{title.toUpperCase()}</Tag>
    </TagWrapper>
  );
};

export default CardTag;
