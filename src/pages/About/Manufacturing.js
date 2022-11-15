import React from 'react'
import { Row, Col, Typography, Breadcrumb } from 'antd'

import img3 from '../../assets/images/about/6.png'

const { Title, Paragraph } = Typography


const Manufacturing = () => {

    return(<Row justify='center' style={styles.container}>

        <Col span={24}>
            <Title style={styles.title}>I+D y Fabricación</Title>
            <Breadcrumb >
                <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                <Breadcrumb.Item>Sobre nosotros</Breadcrumb.Item>
                <Breadcrumb.Item>I+D y Fabricación</Breadcrumb.Item>                
            </Breadcrumb>
        </Col>        
        <Col xl={24} xs={24} style={styles.col}>
            <Paragraph align='justify' style={styles.paragraph}>
                Más de 20 expertos en baterías de litio especiales, más de 30 equipos de operación de proyectos de baterías de litio. más de 15
                Personas Ingeniero(s) de I+D en la empresa. Como participante en el mercado global, los productos de PKNERGY
                han introducido los sistemas ISO9001 e ISO14001 y también han pasado CB, UL, CE / IEC, MSDS, UN38.3 y
                otras certificaciones internacionales.
            </Paragraph>
        </Col>
        
        <Col span={24} style={styles.col}>
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


export default Manufacturing