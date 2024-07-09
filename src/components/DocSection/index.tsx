import React from 'react';
import { FlatList } from 'react-native';
import CardDoc from '~/components/CardDoc';
import { Container, Logo, Title, WrapperTitle } from './styles';

interface DocSectionProps {
    documents: number;
    horizontal: boolean;
    width: string;
    showTitle: boolean;
}

const data = [
    { id: '1', title: 'Documento ABC', date: '25/03/2024', subtitle: 'Convênio XYZ' },
    { id: '2', title: 'Documento ABC', date: '25/03/2024', subtitle: 'Convênio XYZ' },
];


const DocSection: React.FC<DocSectionProps> = ({ documents, horizontal, width, showTitle }) => {
    return (
        <Container>
            {showTitle && (
                <WrapperTitle>
                 <Logo />
                <Title>Workspaces</Title>
            </WrapperTitle>
            )}
            

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CardDoc title={item.title} date={item.date} subtitle={item.subtitle} width={width} />
                )}
                horizontal={horizontal}
            />
        </Container>
    );
}

export default DocSection;