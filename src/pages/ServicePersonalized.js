import React from 'react'
import { Row, Col, Typography, Breadcrumb } from 'antd'

import img1 from '../assets/images/personalized/1.jpeg'
import img2 from '../assets/images/personalized/2.jpeg'
import img4 from '../assets/images/personalized/4.png'
import img5 from '../assets/images/personalized/5.jpeg'
import img7 from '../assets/images/personalized/7.jpeg'
import img6 from '../assets/images/personalized/6.jpeg'


const { Title, Paragraph } = Typography


const ServicePersonalizaed = () => {

    return(<Row justify='center' style={styles.container}>

        <Col span={24}>
            <Title style={styles.title}>Servicio Personalizado</Title>
            <Breadcrumb >
                <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                <Breadcrumb.Item>Servicio personalizado</Breadcrumb.Item>                
            </Breadcrumb>
        </Col>
        <Col xl={24} xs={24} style={styles.col}>
            <img src={img1} width='100%' alt='about' style={styles.img} />
        </Col>
        <Col xl={12} xs={24} style={styles.col}>            
            <img src={img2} width='100%' alt='about' style={styles.img} />
        </Col>
        <Col xl={12} xs={24} style={styles.col}>            
            <Title level={3} style={styles.title}>LIFEPO4 BATTERY PACK Customized</Title>
            <Paragraph align='justify' style={styles.paragraph}>
                Las baterías LiFePo4 tienen una gran demanda. Personalizamos el paquete de baterías con 
                estas celdas cilíndricas, para mayor voltaje, capacidad o corriente de descarga, excepto 
                BMS, cable, conector, logotipo, podemos agregar gabinetes, marcos, cargadores para una 
                solución de batería de un solo paso. El LiFePo4 está diseñado para diversas aplicaciones, 
                incluido el almacenamiento de energía en el hogar, la solución de almacenamiento de energía solar, 
                el sistema solar conectado a la red y fuera de la red, el UPS, la central eléctrica, el equipo de emergencia, 
                el sistema de energía solar y eólica y el sistema de telecomunicaciones, etc.
            </Paragraph>
            
        </Col>
        <Col xl={16} xs={24} style={styles.col}>
            <Title level={3} style={styles.title}>Lithium Replacing Lead Acid Battery</Title>
            <Paragraph align='justify' style={styles.paragraph}>
                Baterías de litio fabricadas por PKNERGY para adaptar aplicaciones de plomo-ácido más antiguas. Debido a su mayor 
                densidad de energía y menor peso, las baterías de litio ahora se consideran una fuente de energía alternativa para 
                las aplicaciones de plomo-ácido existentes. Muchas industrias y productos se sienten atraídos por las ventajas de 
                la tecnología de litio, que incluyen dimensiones compactas, menor peso, mayor eficiencia, mejor mensurabilidad y 
                mantenimiento, mejor gestión, escalabilidad y mayor vida útil y costos. Velocidad EV, carrito de golf, coche limpio, 
                RV marino y barco, etc.
            </Paragraph>
        </Col>
        <Col xl={8} xs={24} style={styles.col2}>                        
            <img src={img4} width='80%' alt='about' style={styles.img} />
            
        </Col>
        <Col xl={24} xs={24} style={styles.col}>
            <img src={img5} width='100%' alt='about' style={styles.img} />
        </Col>
        <Col xl={8} xs={24} style={styles.col}>                        
            <img src={img7} width='80%' alt='about' style={styles.img} />            
        </Col>
        <Col xl={16} xs={24} style={styles.col}>
            <Title level={3} style={styles.title}>Lithium-Ion/Lithium-Polymer Battery Pack Customized</Title>
            <Paragraph align='justify' style={styles.paragraph}>
                PKNERGY cuenta con un fuerte equipo de I+D para diseñar paquetes de baterías de iones de litio a 
                medida para cumplir con sus especificaciones. También podemos diseñar soluciones probadas y confiables 
                basadas en sus requisitos en diferentes industrias, como electrónica de consumo, dispositivos médicos, 
                herramientas eléctricas, seguridad, sistema POS y GPS, sistemas IOT, rayos y robots, etc.
            </Paragraph>
        </Col>
        <Col xl={24} xs={24} style={styles.col}>
            <img src={img6} width='100%' alt='about' style={styles.img} />
            <Paragraph align='center' style={styles.paragraph2}>
                Creemos en el poder de la colaboración. <br />
                Discuta con nuestros ingenieros experimentados sus necesidades específicas. <br />
                ¡Complete el siguiente formulario para que su diseño de batería funcione en 1 día hábil! <br />
                ¡Después de confirmar el diseño de la batería, puede obtener la muestra dentro de los 7 días hábiles! <br />
            </Paragraph>
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
    paragraph2:{
        marginBottom:'0px',
        marginTop: '30px',
        fontSize:'20px'
    },
    container:{
        margin:'50px'
    },
    col:{
        padding:'40px'
    },
    col2:{
        paddingTop:'0px',
        paddingBottom:'0px',
        paddingLeft:'0px',
        paddingRigth:'0px'        
    },
    title: {
        marginTop:'20px',
        marginBottom: '35px'
    },
    title2: {
        textAlign:'center',
        marginTop: '40px',
        marginBottom:'20px'
    }
}


export default ServicePersonalizaed