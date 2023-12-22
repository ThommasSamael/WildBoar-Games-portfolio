import React from 'react';
import Container from 'react-bootstrap/Container';



import RowSp1 from './RowSp1';
import RowSp2 from './RowSp2';
import RowSp3 from './RowSp3';
import RowSp4 from './RowSp4';
import RowSp5 from './RowSp5';

const VersionSmartPhone = () => {
    return ( 

        <Container fluid className='d-block d-lg-none '>

            <RowSp1/>
            <RowSp2/>
            <RowSp3/>
            <RowSp4/>
            <RowSp5/>

           

        </Container>


     );
}
 
export default VersionSmartPhone;