import React from 'react';
import { Container, StyledInput } from './styles';

interface InputProps {
    placeholder: string;
    icon?: boolean
}

export const Input: React.FC<InputProps> = ({ placeholder, icon }) => {
    return (
        <Container>
            <StyledInput placeholder={placeholder} />
        </Container>
    );
}