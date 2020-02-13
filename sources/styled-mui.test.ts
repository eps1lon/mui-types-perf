import { styled } from "@material-ui/styles";

const Div = styled("div")(theme => {
  return {
    background: String(theme),
    color: ({ hidden }: React.HTMLAttributes<unknown>) =>
      hidden ? "transparen" : "black"
  };
});
