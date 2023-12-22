import React from "react";
import Container from "react-bootstrap/esm/Container";

import RowSectionSix1 from "./RowsSectionSixAll/RowSectionSix1";
import RowSectionSix2 from "./RowsSectionSixAll/RowSectionSix2";
import RowSectionSix3 from "./RowsSectionSixAll/RowSectionSix3";


const SectionSixAll = () => {
    return (

        <Container fluid >

            <RowSectionSix1/>

            <RowSectionSix2/>

            <RowSectionSix3/>

        </Container>
    );
}

export default SectionSixAll;