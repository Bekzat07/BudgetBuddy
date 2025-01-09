import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const User: React.FC<SvgProps> = ({width, height, ...props}) => (
  <Svg
    width={width}
    height={height}
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 4200 5360"
    {...props}>
    <Path
      fill="#ccc"
      d="M2140 103h18c517 0 936 419 936 936s-419 936-936 936h-18c-517 0-936-419-936-936s419-936 936-936zm2001 3922v-617s-722-804-1897-804c-31 0-63 1-94 2-31-1-62-2-94-2-1176 0-1897 804-1897 804v681h3982v-64z"
    />
  </Svg>
);
export default User;
