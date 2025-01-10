import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const Download: React.FC<SvgProps> = ({
  width = 72,
  height = 72,

  ...props
}) => (
  <Svg
    width={width}
    height={height}
    color={'black'}
    fill="none"
    viewBox="0 0 72 72"
    {...props}>
    <Circle cx={36.5} cy={36} r={35.5} stroke="black" />
    <Path stroke="black" d="M37 20v32m0 0 11.5-11.5M37 52 25.5 40.5" />
  </Svg>
);
export default Download;
