import React from 'react'
import { Row, Col, Typography, Breadcrumb } from 'antd'

import img1 from '../../assets/images/about/1.jpg'
import img2 from '../../assets/images/about/2.jpeg'
import img3 from '../../assets/images/about/3.png'
import img4 from '../../assets/images/about/4.jpeg'
import img5 from '../../assets/images/banners/partners.jpg'
import img6 from '../../assets/images/about/5.jpeg'

const { Title, Paragraph } = Typography


const Profile = () => {

    return(<Row justify='center' style={styles.container}>

        <Col span={24}>
            <Title style={styles.title}>Sobre Nosotros</Title>
            <Breadcrumb >
                <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                <Breadcrumb.Item>Sobre nosotros</Breadcrumb.Item>
                <Breadcrumb.Item>Perfil de compañia</Breadcrumb.Item>                
            </Breadcrumb>
        </Col>
        <Col xl={12} xs={24} style={styles.col}>
            <img src={img1} width='100%' alt='about' style={styles.img} />
        </Col>
        <Col xl={12} xs={24} style={styles.col}>
            <Paragraph align='justify' style={styles.paragraph}>
                Shenzhen Pknergy Energy Co., Ltd es una nueva compañía de energía establecida en 1998. Se dedica principalmente a baterías de 
                litio, baterías de fosfato de hierro y litio y baterías de plomo-ácido de litio. PKnergy siempre se especializa en I + D, 
                producción, ventas de soluciones de almacenamiento de energía, soluciones de energía renovable. Concéntrese en convertirse en 
                una empresa de alta tecnología de energía verde y en un proveedor de soluciones de baterías para aplicaciones personalizadas.
            </Paragraph>
            <Paragraph align='justify'>
                Desde su establecimiento, Pknergy se ha comprometido a brindar servicios de comunicaciones, TI, aplicaciones para el hogar, 
                finanzas, seguridad, transporte, electrónica de consumo de alta gama, equipos médicos, herramientas eléctricas y otras industrias 
                relacionadas con baterías y energía. Después de años de desarrollo, Pknergy se ha convertido en uno de los principales proveedores 
                de soluciones de baterías de litio en el mercado global.
            </Paragraph>
        </Col>
        <Col xl={12} xs={24} style={styles.col}>            
            <Paragraph align='justify' style={styles.paragraph}>
                Al mismo tiempo, tenemos el servicio, el procesamiento y la producción ODM más avanzados y el sistema de cadena de suministro completo 
                más poderoso. Como participante en el mercado global, los productos de PKNERGY han superado las certificaciones CB, UL, CE/IEC, 
                alcance, RoHS y otras certificaciones internacionales. Además, PKNERGY también ha introducido los sistemas ISO9001 e ISO14001. 
                Debido a su rápido crecimiento, PKNERGY ha introducido los mejores equipos, la tecnología y el sistema de gestión más avanzados. 
                La actitud innovadora siempre brinda a los clientes la mejor experiencia de producto y servicio.
            </Paragraph>
            <Paragraph align='justify'>
                PKNERGY ha alcanzado una asociación estratégica a largo plazo con miles de clientes en el extranjero en la industria de la nueva energía 
                y ha establecido muchas bases de almacenamiento logístico para servir de manera eficiente a los clientes en América del Norte, Canadá, 
                EE. UU... etc.
            </Paragraph>
        </Col>
        <Col xl={12} xs={24} style={styles.col}>
            <img src={img2} width='100%' alt='about' style={styles.img} />
        </Col>
        <Col xl={24} xs={24} style={styles.col}>            
            <Paragraph align='justify' >
                PKNERGY se adhiere al valor de "integridad y ganar-ganar". Con la revolución y la innovación, esperamos que PKNERGY se convierta en 
                el mejor modelo en la industria de las baterías de litio.
            </Paragraph>            
        </Col>
        <Col span={24}>
            <Title style={styles.title2}>Cultura de la empresa</Title>
        </Col>
        <Col span={24} style={styles.col}>
            <img src={img3} width={'100%'} />
        </Col>
        <Col span={24}>
            <Title style={styles.title2}>Certificados y Honor</Title>
            <Paragraph align='center' style={styles.paragraph}>
                Como fabricante de baterías responsable y experimentado durante más de 20 años, hemos sido reconocidos oficialmente 
                por CE, UN1642, UL2054, IEC62133, UN38.3, MSDS, CB, etc.
            </Paragraph>
            <img src={img4} width='100%' />
        </Col>
        <Col span={24}>
            <Title style={styles.title2}>Nuestros Partners</Title>            
            <img src={img5} width='100%' />
        </Col>
        <Col span={24}>
            <Title style={styles.title2}>Misión y Visión</Title>            
            <img src={img6} width='100%' />
        </Col>
    </Row>)

}


const styles = {    
    img: {
        borderRadius: '20px'
    },
    paragraph:{
        marginBottom:'50px'
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


export default Profile