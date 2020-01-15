import { makeStyles } from "@material-ui/styles";

// https://github.com/mui-org/material-ui/issues/19113#issuecomment-573614279

const useStaticStyles = makeStyles({ root: { color: "blue" } });
const useDynamicStyles = makeStyles({
  root: { color: (props: { color: string }) => props.color }
});
function Component() {
  const staticClasses = useStaticStyles(); // No error
  const throwingClasses = useDynamicStyles(); // $ExpectError
  const dynamicClasses = useDynamicStyles({ color: "blue" });
}
