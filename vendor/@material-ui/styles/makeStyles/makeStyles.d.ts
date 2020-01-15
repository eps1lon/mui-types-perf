import {
  ClassKeyOfStyles,
  ClassNameMap,
  PropsOfStyles,
  Styles,
  WithStylesOptions,
} from '@material-ui/styles/withStyles';
import { Omit } from '@material-ui/types';
import { DefaultTheme } from '../defaultTheme';


/**
 * @internal
 *
 * `Props` are `any` either by explicit annotation or if there are no callbacks
 * from which the typechecker could infer a type so it falls back to `any`.
 * See the test cases for examples and implications of explicit `any` annotation
 */
export type StylesHook<S extends Styles<any, any>> = (props?: PropsOfStyles<S>) => ClassNameMap<ClassKeyOfStyles<S>>

export default function makeStyles<
  Theme = DefaultTheme,
  Props extends {} = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>,
): StylesHook<Styles<Theme, Props, ClassKey>>;
