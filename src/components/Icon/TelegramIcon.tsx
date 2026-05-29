import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const TelegramIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M62.04 3.52C29.3 3.52 3 29.82 3 62.56s26.3 59.04 59.04 59.04 59.04-26.3 59.04-59.04S94.78 3.52 62.04 3.52zm28.3 40.44l-9.68 45.68c-.72 3.24-2.64 4.04-5.36 2.52l-14.8-10.92-7.16 6.88c-.8.8-1.48 1.48-3 1.48l1.08-15.36 27.96-25.24c1.2-1.08-.28-1.68-1.88-.6L43.1 70.2 28.5 65.64c-3.16-1-3.24-3.16.68-4.68l57-21.96c2.64-.96 4.96.64 4.16 4.96z"
      fill="currentColor"></path>
  </Icon>
));

export default TelegramIcon;