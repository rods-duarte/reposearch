import 'styled-components/native';
import { type theme } from './theme';

declare module 'styled-components/native' {
  type TypeTheme = typeof theme;

  export interface DefaultTheme extends TypeTheme {}
}
