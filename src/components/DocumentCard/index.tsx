import React from 'react';

import { BackgroundImage, Connected, Container, Header, HeaderContent, HeaderTextContainer, Logo, Subtitle, Title } from './styles';

interface DocumentsProps {
    title: string;
    code: string;
    cadaster: string;
    date: string;
}

const DocumentCard: React.FC<DocumentsProps> = ({ title, code, cadaster, date }) => {
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <BackgroundImage>
                    <Logo source={require('assets/images/truck.png')} />
                    </BackgroundImage>

                    <HeaderTextContainer>
                        <Title>STRADA CBP-1717</Title>
                        <Subtitle>55199992938283</Subtitle>
                    </HeaderTextContainer>
                </HeaderContent>

                <Connected>Ligado</Connected>

            </Header>

        </Container>
    );
}

export default DocumentCard;