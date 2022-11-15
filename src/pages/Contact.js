import React from 'react'
import { Row, Col, Typography, 
        Breadcrumb, Input, Button, 
        Form, notification } from 'antd'
import { HomeFilled, MailFilled, PhoneFilled, ClockCircleFilled } from '@ant-design/icons'
import emailjs from '@emailjs/browser'

const { Title } = Typography


const Contact = () => {

    const [form] = Form.useForm()

    const sendEmail = (values) => {        
        
         
        var templateParams = {
            'name': values.name,
            'phone':values.phone,
            'email':values.email
        };
         
        emailjs.send('service_w9tdeu5', 'template_la9b5kq', templateParams, 'GoLo7R8_6C4DHG1QS')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
               notification.success({message:'CORREO ENVIADO EXITOSAMENTE!'})
               form.resetFields()
            }, function(error) {
               console.log('FAILED...', error)
               notification.error({message:error})
            })
        
      }

    return(<Row justify='center' align='center' style={styles.container}>

        <Col span={24}>
            <Title style={styles.title}>Contacto</Title>
            <Breadcrumb>
                <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                <Breadcrumb.Item>Sobre nosotros</Breadcrumb.Item>
                <Breadcrumb.Item>Contacto</Breadcrumb.Item>                
            </Breadcrumb>
        </Col>                
        <Col xs={24} xl={6} style={styles.col}>
            <center><HomeFilled  style={styles.icon} /></center>
            <Title level={5} style={styles.title}>Manuel antonio matta 2858<br />IQUIQUE</Title>
        </Col>
        <Col xs={24} xl={6} style={styles.col}>
            <center><MailFilled style={styles.icon} /></center>
            <Title level={5} style={styles.title}>rpizarro@pknergy.cl</Title>
        </Col>
        <Col xs={24} xl={6} style={styles.col}>
            <center><PhoneFilled style={styles.icon} /></center>
            <Title level={5} style={styles.title}>+56 9 6507 3589</Title>
        </Col>
        <Col xs={24} xl={6} style={styles.col}>
            <center><ClockCircleFilled style={styles.icon} /></center>
            <Title level={5} style={styles.title}>24/7</Title>
        </Col>
        <Col  xs={24} xl={12} style={{paddingLeft:window.innerWidth>800&&'00px',paddingRight:window.innerWidth>800&&'00px'}}>
            <Title style={styles.title2} level={4}>¡Cualquier pregunta o requisito, no dude en contactarnos!</Title>
            <Form form={form} onFinish={sendEmail}>
                <Form.Item name='name' rules={[{ required: true, message:'Nombre es obligatorio' }]}>
                    <Input placeholder='Nombre' />
                </Form.Item>                
                <Form.Item name='phone' rules={[{ required: true, message:'Teléfono es obligatorio' }]}>
                    <Input placeholder='Teléfono' />
                </Form.Item>
                <Form.Item name='email' rules={[{ required: true, message:'Email es obligatorio' }]}>
                    <Input placeholder='Email' />
                </Form.Item>
                <Form.Item name='message'>
                    <Input.TextArea rows={4} placeholder='Ingresa tu mensaje...' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>ENVIAR</Button>
                </Form.Item>
            </Form>
        </Col>
        
    </Row>)

}


const styles = {    
    icon: {
        fontSize:'35px',
        textAlign:'end',
        backgroundColor:'rgb(0, 153, 68)',
        color:'white',
        padding:'20px',
        borderRadius:'100px'
    },
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
        textAlign:'center',
        paddingTop:'20px'
    },
    title2: {
        textAlign:'center',
        marginTop: '00px',
        marginBottom:'40px'
    }
}


export default Contact