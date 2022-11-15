import React from 'react'
import { Row, Col, Typography, Breadcrumb } from 'antd'

import img3 from '../../assets/images/about/7.png'

const { Title, Paragraph } = Typography


const QualityControl = () => {

    return(<Row justify='center' style={styles.container}>

        <Col span={24}>
            <Title style={styles.title}>Control de calidad</Title>
            <Breadcrumb>
                <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                <Breadcrumb.Item>Sobre nosotros</Breadcrumb.Item>
                <Breadcrumb.Item>Control de calidad</Breadcrumb.Item>                
            </Breadcrumb>
        </Col>        
        <Col xl={24} xs={24} style={styles.col}>
            <Paragraph align='end' style={styles.paragraph}>
            • Grade-A batteries with high capacity and low internal resistance; built-in BMS multi-protection design. <br />
            • Our Product passed CB, UL, CE / IEC, MSDS, UN38.3 and other international certifications. <br />
            • Most user friendly 10 year warranty but we also bring you the best customer service in the industry. <br />
            • Support return agreement, if the goods have quality problems after we sell them, we support return agreement. <br />
            • We support inspection services. Support SGS and other professional inspection organizations to inspect the goods in our factory before shipment. <br />
            • We guarantee the use of high-quality raw materials, advanced equipment and 16 strict inspection procedures in the production process. <br />
            • With customer service, support and offices located in North America, South America, Europe, Asia, etc, we are a proud 100% veteran owned and operated business. <br />
            </Paragraph>
        </Col>
        
        <Col span={24} >
            <img src={img3} width={'100%'} />
        </Col>
    </Row>)

}


const styles = {    
    img: {
        borderRadius: '20px'
    },
    paragraph:{
        marginBottom:'0px'
    },
    container:{
        margin:'50px'
    },
    col:{
        padding:'40px'
    },
    title: {
        textAlign:'center'
    },
    title2: {
        textAlign:'center',
        marginTop: '40px',
        marginBottom:'20px'
    }
}


export default QualityControl