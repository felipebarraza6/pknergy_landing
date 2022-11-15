import React from 'react'
import { Row, Col, Typography } from 'antd'
import wallpaper from '../../assets/images/banners/Why-Choose-PKNERGY-Battery.jpg'
import { BuildFilled, CheckCircleOutlined, GroupOutlined,
        PartitionOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const WhyChose = () => {

    return(<Row style={styles.container} justify='space-around' align='middle'>
        <Col span={24} style={styles.col}>
            <Title style={styles.title1}>¿POR QUÉ ELEGIR PKNERGY?</Title>            
        </Col>
        <Col xs={24} xl={4} lg={4} style={styles.col}>
            <Title style={styles.title1}>
                <BuildFilled />
            </Title>
            <Title style={styles.title2} level={3}>FÁBRICA</Title> 
            <Paragraph style={styles.paragraph}>20 años de experiencia en la producción de baterías, más de 300 empleados, 12 líneas de producción.</Paragraph>           
        </Col>
        <Col xs={24} xl={4} lg={4} style={styles.col}>
            <Title style={styles.title1}>
                <CheckCircleOutlined />
            </Title>
            <Title style={styles.title2} level={3}>CALIDAD</Title> 
            <Paragraph style={styles.paragraph}>Más de 6000 buenas críticas de clientes en más de 100 países 16 procedimientos de inspección estrictos.</Paragraph>            
        </Col>
        <Col xs={24} xl={4} lg={4} style={styles.col}>
            <Title style={styles.title1}>
                <GroupOutlined />
            </Title>
            <Title style={styles.title2} level={3}>I+D INTERNACIONAL</Title> 
            <Paragraph style={styles.paragraph}>Más de 15 personas Ingeniero(s) de I+D Pasaron las certificaciones ISO9001 e ISO14001, más de 30 certificaciones de productos.</Paragraph>            
        </Col>
        <Col xs={24} xl={4} lg={4} style={styles.col}>
            <Title style={styles.title1}>
                <PartitionOutlined />
            </Title>
            <Title style={styles.title2} level={3}>SERVICIO</Title> 
            <Paragraph style={styles.paragraph}>Servicio en línea las 24 horas, los 7 días de la semana, más de 10 empleados brindan servicios en línea, soporte técnico profesional.</Paragraph>            
        </Col>            
    </Row>)

}

const styles = {
    paragraph: {
        color:'white',
        textAlign:'center',
        margin: '20px'
    },
    container: {
        backgroundImage: `url(${wallpaper})`,
        width: '100%',
        backgroundSize: 'cover',
        paddingTop:'60px',
        backgroundRepeat: 'no-repeat',
        height: window.innerWidth > 800 ? '500px':'80'
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
        paddingTop: window.innerWidth > 800 ? '0px':'0px',
        paddingBottom: window.innerWidth > 800 ? '0px':'10px'         
    }
}

export default WhyChose