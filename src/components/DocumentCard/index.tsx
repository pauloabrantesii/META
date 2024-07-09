import React from 'react';

import { BackgroundImage, Connected, Container, Content, Header, HeaderContent, HeaderTextContainer, Logo, Subtitle, Title } from './styles';

interface DocumentsProps {
    title: string;
    code: string;
    cadaster: string;
    date: string;
    background: string;
}

const DocumentCard: React.FC<DocumentsProps> = ({ title, code, cadaster, background}) => {
    return (
        <Container>
<Title>{title}</Title>
<Content>
            <Header>
                <HeaderContent>
                    <BackgroundImage background={background}>
                    <Logo source={require('assets/images/truck.png')} />
                    </BackgroundImage>

                    <HeaderTextContainer>
                        <Title>{code}</Title>
                        <Subtitle>{cadaster}</Subtitle>
                    </HeaderTextContainer>
                </HeaderContent>

                <Connected>Ligado</Connected>

            </Header>

        </Content>
        </Container>
       
    );
}

export default DocumentCard;