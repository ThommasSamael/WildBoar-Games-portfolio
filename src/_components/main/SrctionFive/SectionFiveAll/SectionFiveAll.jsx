import React from "react";
import Container from "react-bootstrap/esm/Container";

import RowSectionFive1 from "./RowsSectionFiveAll/RowSectionFive1";
import RowSectionFive2 from "./RowsSectionFiveAll/RowSectionFive2";
import RowSectionFive3 from "./RowsSectionFiveAll/RowSectionFive3";
import RowSectionFive4 from "./RowsSectionFiveAll/RowSectionFive4";
import RowSectionFive5 from "./RowsSectionFiveAll/RowSectionFive5";



const SectionFiveAll = () => {

    const [scroll, setScroll] = React.useState(0);

    const ref_1 = React.useRef();
    const ref_2 = React.useRef();
    const ref_3 = React.useRef();
    const ref_4 = React.useRef();
    const ref_5 = React.useRef();

    React.useEffect(() => {
        setPosition_1(ref_1.current.offsetTop);
        setPosition_2(ref_2.current.offsetTop);
        setPosition_3(ref_3.current.offsetTop);
        setPosition_4(ref_4.current.offsetTop);
        setPosition_5(ref_5.current.offsetTop);
    });

    const [position_1, setPosition_1] = React.useState(0);
    const [position_2, setPosition_2] = React.useState(0);
    const [position_3, setPosition_3] = React.useState(0);
    const [position_4, setPosition_4] = React.useState(0);
    const [position_5, setPosition_5] = React.useState(0);

    const [text_1, setText_1] = React.useState(false);
    const [text_2, setText_2] = React.useState(false);
    const [text_3, setText_3] = React.useState(false);
    const [text_4, setText_4] = React.useState(false);
    const [text_5, setText_5] = React.useState(false);

    React.useEffect(() => {
        if (scroll > position_1) {
            setText_1(true);
        }
        if (scroll > position_2) {
            setText_2(true);
        }
        if (scroll > position_3) {
            setText_3(true);
        }
        if (scroll > position_4) {
            setText_4(true);
        }
        if (scroll > position_5) {
            setText_5(true);
        }
    });

    const handleScroll = () => {
        setScroll(window.scrollY + 500);
    };
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);


        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    

    return (
        <Container fluid>

            <RowSectionFive1 text_1={text_1} ref_1={ref_1}/>

            <RowSectionFive2 text_2={text_2} ref_2={ref_2}/>

            <RowSectionFive3 text_3={text_3} ref_3={ref_3}/>

            <RowSectionFive4 text_4={text_4} ref_4={ref_4}/>

            <RowSectionFive5 text_5={text_5} ref_5={ref_5}/>

        </Container >
    );
}

export default SectionFiveAll;