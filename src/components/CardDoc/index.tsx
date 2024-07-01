import React from 'react';

import { Bottom, CardContainer, CardItem, DateTitle, Header, HeaderContainer, HeaderSubtitle, HeaderTitle, Logo, WrapperHeader } from './styles';


interface CardProps {
    title: string;
    subtitle: string;
    date: string;
}


const CardDoc: React.FC<CardProps> = ({ title, subtitle, date }) => {
    return (
        <CardContainer>
            <CardItem>

                <Header>
                    <HeaderContainer>
                        <Logo source={require('assets/images/3-layers.png')} />
                        <WrapperHeader>
                            <HeaderTitle>Workspace 1</HeaderTitle>
                        </WrapperHeader>

                        <Bottom>
                        <HeaderSubtitle>123</HeaderSubtitle>
                        <DateTitle>Devices</DateTitle>
                        </Bottom>
      

                    </HeaderContainer>
                </Header>

         


            </CardItem>

        </CardContainer>
    );
}

export default CardDoc;