import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DivFourSp1 from "./DivFourSp1";
import DivFourSp2 from "./DivFourSp2";
import DivFourSp3 from "./DivFourSp3";
import DivFourSp4 from "./DivFourSp4";
import DivFourSp5 from "./DivFourSp5";





const RowFourSp1 = () => {

    return (
        <Row className="  m-0   " >
            <Col className="col-12">

                <div className="relative_fourSp ">

                    <DivFourSp1 />
                    <DivFourSp2 />
                    <DivFourSp3 />
                    <DivFourSp4 />
                    <DivFourSp5 />



                </div>


            </Col>
        </Row>
    );
}

export default RowFourSp1;