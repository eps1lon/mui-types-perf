import styled from "styled-components";

const Div = styled("div")`
  background: ${props => String(props.theme)};
`;

const Span = styled("div")({
  // not supported
  // background: props => String(props.theme)
  background: "back",
  color: "white"
});

const Button = styled("button")({
  ":hover": {
    "@media screen": {
      color: "black"
    }
  }
});
