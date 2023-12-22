import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DivFourPc1 from "./DivFourPc1";
import DivFourPc2 from "./DivFourPc2";
import DivFourPc3 from "./DivFourPc3";
import DivFourPc4 from "./DivFourPc4";
import DivFourPc5 from "./DivFourPc5";




const RowFourPc_1 = () => {

    return (
        <Row className="  m-0   " >
            <Col className="col-12">

                <div className="relative_fourPc ">

                    <DivFourPc1/>

                    <DivFourPc2/>

                    <DivFourPc3/>

                    <DivFourPc4/>

                    <DivFourPc5/>

                </div>


            </Col>
        </Row>
    );
}

export default RowFourPc_1;