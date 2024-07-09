import React from 'react';

import { Header, Icon, IconContainer, Logo } from './styles';

const HeaderComponent: React.FC = () => {
  return (
    <Header>
    <Logo source={require('assets/images/meta_logo.png')} />
    <IconContainer>
      <Icon source={require('assets/images/nav_menu.png')} />
    </IconContainer>
  </Header>
  );
}

export default HeaderComponent;