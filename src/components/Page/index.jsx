import React from 'react';
import { Container } from './styles';

function Page({children}) {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Page;