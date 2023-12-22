import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video_2 from '../../../../video/_video2.mp4';

const RowSp2 = () => {
    return ( 

        <Row className='  '>
                <Col className='col-12 p-0'>

                    <video src={video_2} autoPlay muted loop
                        className="video-madia-pc active "
                    ></video>

                </Col>

                <Col data-wow-offset="250"  className='col-12 align-self-center   wow animate__animated animate__slow animate__fadeIn border-text '>

                    <p className='text-sectionThree-Sp '>У "WildBoar Games" геймінг - це не просто тема для наших матеріалів, це наше
                        страстне хобі та стиль життя. Кожен із нас відчуває велику прив'язаність до світу відеоігор, і це відбивається
                        в кожній рецензії, кожній статті та кожній висловленій думці.
                        Ми не тільки граємо у ігри; ми переживаємо їх. Моменти азарту,
                        захоплення, та навіть роздуми над сюжетом – усе це стає не
                        просто темою для обговорення, але і внутрішньою частиною нашого геймерського досвіду.</p>

                </Col>

            </Row>

     );
}
 
export default RowSp2;