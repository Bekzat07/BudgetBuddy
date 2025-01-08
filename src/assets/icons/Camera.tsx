import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Camera: React.FC<SvgProps> = ({
  width = 82,
  height = 82,
  color = '#393F32',
  ...props
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 82 82" {...props}>
    <Path
      d="M41 59.04c10.869 0 19.68-8.811 19.68-19.68S51.869 19.68 41 19.68s-19.68 8.811-19.68 19.68S30.131 59.04 41 59.04Z"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <Path
      d="M41 52.48c7.246 0 13.12-5.874 13.12-13.12 0-7.246-5.874-13.12-13.12-13.12-7.246 0-13.12 5.874-13.12 13.12 0 7.246 5.874 13.12 13.12 13.12Z"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <Path
      d="M77.08 16.4h-16.4c-2.41 0-4.074-6.56-6.56-6.56H27.88c-2.486 0-4.15 6.56-6.56 6.56H4.92c-1.81 0-3.28 1.47-3.28 3.28v44.28c0 1.81 1.47 3.28 3.28 3.28h72.16c1.81 0 3.28-1.47 3.28-3.28V19.68c0-1.81-1.47-3.28-3.28-3.28Z"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);

export default Camera;
