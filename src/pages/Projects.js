import React from 'react'
import { Row, Col, Typography, Breadcrumb } from 'antd'

import img1 from '../assets/images/projects/1.png'
import img2 from '../assets/images/projects/2.png'

const { Title, Paragraph } = Typography


const Projects = () => {

    return(<Row justify='center' style={styles.container}>

        <Col span={24}>
            <Title style={styles.title}>Proyectos de nuestros clientes</Title>
            <Breadcrumb>
                <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                <Breadcrumb.Item>Sobre nosotros</Breadcrumb.Item>
                <Breadcrumb.Item>Proyectos</Breadcrumb.Item>                
            </Breadcrumb>
        </Col>                
        <Col span={24} style={styles.col}>
            <img src={img1} width={'100%'} />
            <img src={img2} width={'100%'} />
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


export default Projects