import React from 'react';
import { FlatList } from 'react-native';
import CardDoc from '~/components/CardDoc';
import { Container, Logo, Title, WrapperTitle } from './styles';

interface DocSectionProps {
    documents: number;
}

const data = [
    { id: '1', title: 'Documento ABC', date: '25/03/2024', subtitle: 'Convênio XYZ' },
    { id: '2', title: 'Documento ABC', date: '25/03/2024', subtitle: 'Convênio XYZ' },
];


const DocSection: React.FC<DocSectionProps> = ({ documents }) => {
    return (
        <Container>
            <WrapperTitle>
                <Logo />
                <Title>Workspaces</Title>

            </WrapperTitle>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CardDoc title={item.title} date={item.date} subtitle={item.subtitle} />
                )}
                horizontal={true}
            />
        </Container>
    );
}

export default DocSection;