import React from 'react';
import Container from 'react-bootstrap/Container';


import RowPc1 from './RowPc1';
import RowPc2 from './RowPc2';
import RowPc3 from './RowPc3';
import RowPc4 from './RowPc4';
import RowPc5 from './RowPc5';

const VersionPC = () => {
    return (

        <Container fluid className=' d-none d-lg-block ' >
            
            <RowPc1/>

            <RowPc2/>

            <RowPc3/>

            <RowPc4/>

            <RowPc5/>

        </Container>

    );
}

export default VersionPC;