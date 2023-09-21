import { IconType } from 'react-icons';
import { GiCook } from 'react-icons/gi';
import { PrimaryColor } from 'src/constants/color';

const LogoIcon: IconType = (props) => {
  return <GiCook color={PrimaryColor} {...props} />;
};

export default LogoIcon;
