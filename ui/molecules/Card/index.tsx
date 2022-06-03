import Image from "next/image";
import styled from "styled-components";
import CardTag from "../../atoms/CardTag";
import {
  CardWrapper,
  DateLabel,
  Description,
  ExpositionWrapper,
  ImageWrapper,
  Subtitle,
  Title,
} from "../subcomponents";

const Card = ({
  tag,
  image,
  imageWidth,
  title,
  description,
  subtitle,
  date,
  height,
  width,
}: {
  tag: string;
  image: string;
  imageWidth: number;
  title: string;
  description: string;
  subtitle: string;
  date: string;
  height: number;
  width: number;
}) => {
  return (
    <CardWrapper height={height} width={width}>
      <ImageWrapper width={imageWidth}>
        <Image layout="fill" src={image} style={{ zIndex: 0 }} />
        <CardTag title={tag} />
      </ImageWrapper>
      <ExpositionWrapper>
        <Subtitle children={subtitle.toUpperCase()} height={height} />
        <Title children={title} height={height} />
        <DateLabel children={date.toUpperCase()} height={height} />
        <Description children={description} width={width} height={height} />
      </ExpositionWrapper>
    </CardWrapper>
  );
};

export default Card;
