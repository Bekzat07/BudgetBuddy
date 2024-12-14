import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ArrowLeftIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#000"
      d="M10.53 12.47a.751.751 0 1 1-1.062 1.062l-5-5a.75.75 0 0 1 0-1.063l5-5a.751.751 0 1 1 1.063 1.063L6.062 8l4.469 4.47Z"
    />
  </Svg>
);
export default ArrowLeftIcon;
