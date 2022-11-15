import React from 'react'
import { Row, Col, Typography } from 'antd'
import wallpaper from '../../assets/images/banners/PKNERGY-Lithium-Battery-Manufacturer.jpg'

const { Title } = Typography

const Stats = () => {

    return(<Row style={styles.container} justify='space-around' align='middle'>
        <Col xs={24} xl={4} lg={4} style={styles.col}>
            <Title style={styles.title1}>1998+</Title>
            <Title style={styles.title2} level={3}>Since</Title>            
        </Col>
        <Col xs={24} xl={4} lg={4} style={styles.col}>
            <Title style={styles.title1}>20+</Title>
            <Title style={styles.title2} level={3}>Años</Title>            
        </Col>
        <Col xs={24} xl={4} lg={4} style={styles.col}>
            <Title style={styles.title1}>6000+</Title>
            <Title style={styles.title2} level={3}>Clientes Gloabales</Title>            
        </Col>
        <Col xs={24} xl={4} lg={4} style={styles.col}>
            <Title style={styles.title1}>15+</Title>
            <Title style={styles.title2} level={3}>Equipo I+D</Title>            
        </Col>
        <Col xs={24} xl={4} lg={4} style={styles.col}>
            <Title style={styles.title1}>12+</Title>
            <Title style={styles.title2} level={3}>Línea de producción</Title>            
        </Col>
        <Col xs={24} xl={4} lg={4} style={styles.col}>
            <Title style={styles.title1}>328+</Title>
            <Title style={styles.title2} level={3}>Empleados</Title>            
        </Col>        
    </Row>)

}

const styles = {
    container: {
        backgroundImage: `url(${wallpaper})`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: window.innerWidth > 800 ? '300px':'80'
    },
    title1: {
        color: 'white',
        textAlign: 'center'        
    },
    title2: {
        color: 'white',
        textAlign: 'center',
        marginTop: window.innerWidth > 800 ? '-15px':'-25px'
    },
    col: {
        paddingTop: window.innerWidth > 800 ? '0px':'30px',
        paddingBottom: window.innerWidth > 800 ? '0px':'10px'         
    }
}

export default Stats