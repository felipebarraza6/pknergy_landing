import React from 'react'
import { Row, Col, Typography,
        Card, Carousel } from 'antd'
import app1 from '../../assets/images/aplications/LITHIUM-REPLACING-LEAD-ACID-BATTERY1.jpg'
import app2 from '../../assets/images/aplications/MEDICAL-PRODUCT-APPLICATION.jpg'
import app3 from '../../assets/images/aplications/GOLF-CART-Application.jpg'
import app4 from '../../assets/images/aplications/Home-Enegy-Storage-Application.jpg'
import app5 from '../../assets/images/aplications/DIGITAL-ELECTRONIC-PRODUCTS.jpg'
import logo from '../../assets/images/menu/logo.png'

import c1 from '../../assets/images/categories/48V-100ah-200ah-Powerwall-Lifepo4-battery1.jpg'
import c2 from '../../assets/images/categories/CUSTOMIZED-BATTERY-PACK.jpg'
import c3 from '../../assets/images/categories/Lithium-Replacing-Lead-Acid-Battery2.jpg'
import c4 from '../../assets/images/categories/Rack-Mounted-Lifepo4-Battery-2.jpg'

const { Title, Paragraph } = Typography


const Application = () => {

    return(<Row align='middle' justify='center' style={styles.container}>
        <Col span={24}>
            <Title level={1} style={styles.title}>APLICACIÓN</Title>
        </Col>
        <Col>
        <Carousel style={styles.carouselApply} autoplay dotPosition={window.innerWidth > 800 ? 'right':'bottom'} >
            <div>
                <Row align='center'>
                    <Col>
                        <Card style={styles.card} 
                            cover={<img style={styles.imgApply} alt="example" src={app1} />}>
                                <Title level={5}>LITHIUM REPLACING LEAD ACID BATTERY</Title>
                            </Card>
                    </Col>
                    <Col>
                        <Card style={styles.card} 
                            cover={<img style={styles.imgApply} alt="example" src={app2} />}>
                                <Title level={5}>MEDICAL PRODUCT APPLICATION</Title>
                            </Card>
                    </Col>
                    <Col>
                        <Card style={styles.card}
                            cover={<img style={styles.imgApply} alt="example" src={app3} />}>
                            <Title level={5}>GOLF CART APPLICATION</Title>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div>
                <Row align='center'>
                    <Col>
                        <Card style={styles.card}
                            cover={<img style={styles.imgApply} alt="example" src={app4} />}>
                            <Title level={5}>HOME ENERGY STORAGE</Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={styles.card}
                            cover={<img style={styles.imgApply} alt="example" src={app5} />}>
                            <Title level={5}>DIGITAL ELECTRONIC PRODUCTS</Title>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Carousel>
        </Col>
        <Col xl={12} lg={12} xs={24} style={styles.colAbout}>
            <iframe 
                width={window.innerWidth > 800 ? '100%':'300px'} 
                height={window.innerWidth > 800 ? '400px':'300px'}                 
                src="https://www.youtube.com/embed/d1qNCKz41b8" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
        </Col>
        <Col xl={12} lg={12} xs={24} style={styles.colAbout}>
            <Title style={styles.title}>SOBRE NOSOTROS</Title>
            <Paragraph align='justify' style={styles.paragraph}>
                SHENZHEN PKNERGY ENERGY CO., LTD es una nueva compañía de energía establecida en 1998, 
                dedicada principalmente a baterías de litio, baterías de fosfato de hierro y litio y baterías de 
                plomo-ácido de litio. PKnergy siempre se especializa en I + D, producción, ventas de soluciones de 
                almacenamiento de energía, soluciones de energía renovable. Concéntrese en convertirse en una empresa 
                de alta tecnología de energía verde y en un proveedor de soluciones de baterías para aplicaciones personalizadas.
                <hr style={styles.hr} />
            </Paragraph>
            <img src={logo} width='30%' alt='logo' />
        </Col>
        <Col span={24} style={styles.colCategory}>
            <Title level={1} style={styles.title}>CATEGORÍAS</Title>
        </Col>        
        <Col xl={6} lg={6} xs={24}>
            <img style={styles.imgCategory} src={c1} alt='c1' width='70%' onClick={()=>window.open('/products?1')} />
            <Title style={styles.categoryName} onClick={()=>window.open('/products?1')} level={5}>BATERÍA POWERWALL DE 48 V</Title>
        </Col>
        <Col xl={6} lg={6} xs={24}>
            <img style={styles.imgCategory} src={'https://www.pknergy.com/uploads/48V-50AH-Rack-Mounted-Lifepo4-Battery-China-Manufacturer-1-300x300.jpg'} alt='c1' width='70%' onClick={()=>window.open('/products?2')} /> 
            <Title style={styles.categoryName} level={5} onClick={()=>window.open('/products?2')}>BATERÍA MONTADA EN BASTIDOR DE 48 V</Title>
        </Col>
        <Col xl={6} lg={6} xs={24}>
            <img style={styles.imgCategory} src={c3} alt='c1' width='70%' onClick={()=>window.open('/products?3')} />  
            <Title style={styles.categoryName} level={5} onClick={()=>window.open('/products?3')}>BATERÍA DE PLOMO ÁCIDO DE REEMPLAZO DE LITIO DE 12 V</Title>
        </Col>
        <Col xl={6} lg={6} xs={24}>
            <img style={styles.imgCategory} src={'https://www.pknergy.com/uploads/18650-Battery2.jpg'} alt='c1' width='70%' onClick={()=>window.open('/products?4')} /> 
            <Title style={styles.categoryName} level={5} onClick={()=>window.open('/products?4')}>BATERÍA PERSONALIZADA </Title>
        </Col>
        
    </Row>)

}


const styles = {
    categoryName: {
        backgroundColor: '#009944',
        color: 'white',
        borderRadius: '5px',
        padding:'4px',
        margin: '0px 50px 0px 50px',
        cursor: 'pointer'
    },
    imgApply: {
        borderRadius: '20px 20px 0px 0px'
    },
    imgCategory: {
        margin: '30px',
        cursor:'pointer'
    },
    colCategory: {
        marginTop: window.innerWidth>800?'0px':'50px'        
    },
    colAbout: {
        marginTop: window.innerWidth>800?'100px':'50px',
        marginBottom: window.innerWidth>800?'100px':'0px'
    },
    container:{        
        paddingTop: window.innerWidth>800?'100px':'40px',
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingBottom: '40px',
        backgroundColor: 'black',
        textAlign: 'center'
    },
    title:{
        color: 'white'
    },
    paragraph: {
        color:'white',
        textAlign: 'center',
        margin: window.innerWidth > 800 && '50px'
    },
    card: {
        margin: '20px',
        width: window.innerWidth > 800 ? '400px':'250px',
        borderRadius: '20px',
        padding: '-50px'
    },
    hr: {
        width: '60%'
    },
    carouselApply: {
        marginTop: window.innerWidth > 800 && '50px' 
    }
}


export default Application