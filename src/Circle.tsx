import styled from "styled-components";

const Container = styled.div<CircleProp>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProp {
  bgColor: string;
}

function Circle({ bgColor }: CircleProp) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
