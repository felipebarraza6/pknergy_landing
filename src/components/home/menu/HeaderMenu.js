import React from 'react'
import { Layout, Menu, Button, 
        Row } from 'antd'
import { WhatsAppOutlined, MailFilled } from '@ant-design/icons'
import logo_src from '../../../assets/images/menu/logo.png'
import { Link } from 'react-router-dom'

const { Header } = Layout


const HeaderMenu = () => {

    return(<>
        <Header style={styles.header2}>
            <Row justify={ window.innerWidth > 800 ? 'end':'center'} style={styles.topHeader}>                
                <Button onClick={()=>window.open('https://web.whatsapp.com/send?phone=56965073589')} style={styles.linkbtn} icon={<WhatsAppOutlined style={styles.icon} />} type='link'> 
                    +56 9 6507 3589
                </Button>
                <Button onClick={()=>window.open('mailto:rpizarro@pknergy.cl')} style={styles.linkbtn} icon={<MailFilled style={styles.icon} />} type='link'> 
                    rpizarro@pknergy.cl
                </Button>                                                                                           
            </Row>
        </Header>
        <Header style={styles.header}>
            <div style={styles.containerLogo}>
                <img src={logo_src} style={styles.logo} alt='logo' />
            </div>
            <Menu mode='horizontal' style={styles.menu}>
                <Menu.Item style={window.innerWidth > 800 ? styles.menu.firstChild:styles.menu.child}>
                    <Link to='/'>Inicio</Link>                    
                </Menu.Item>                
                <Menu.SubMenu title="Sobre Nosotros" style={styles.menu.child}>
                    <Menu.Item style={styles.menu.child}>
                        <Link to='/about/profile'>Perfil de compñia</Link>
                    </Menu.Item>
                    <Menu.Item style={styles.menu.child}>
                        <Link to='/about/rd-manufacturing'>I+D y Fabricación</Link>
                    </Menu.Item>
                    <Menu.Item style={styles.menu.child}>
                        <Link to='/about/quality-control'>Control de calidad</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu title={
                        <Link to='/products' style={{color:'black'}}>Productos</Link>
                    } style={styles.menu.child}>
                    <Menu.Item style={styles.menu.child}>
                        <Link  to='/products?1'>BATERÍA POWERWALL DE 48 V</Link>
                    </Menu.Item>
                    <Menu.Item style={styles.menu.child}>
                        <Link to='/products?2'>BATERÍA MONTADA EN BASTIDOR DE 48 V</Link>
                    </Menu.Item>
                    <Menu.Item style={styles.menu.child}>
                        <Link to='/products?3'>BATERÍA DE PLOMO ÁCIDO DE REEMPLAZO DE LITIO DE 12 V</Link>
                    </Menu.Item>
                    <Menu.Item style={styles.menu.child}>
                        <Link to='/products?4'>BATERÍA PERSONALIZADA / PAQUETE DE BATERÍA DE IONES DE LITIO</Link>
                    </Menu.Item>                                     
                </Menu.SubMenu>                
                <Menu.Item style={styles.menu.child}>                    
                    <Link to='/service-personalized'>Servicio personalizado</Link>
                </Menu.Item>
                <Menu.Item style={styles.menu.child}>                    
                    <Link to='/projects'>Proyectos</Link>
                </Menu.Item>
                <Menu.Item style={styles.menu.child}>                    
                    <Link to='/contact'>Contacto</Link>
                </Menu.Item>
            </Menu>
        </Header>
    </>)

}

const styles = {
    linkbtn: {
        color:'white'
    },
    containerLogo: {
        flex: "0 0 250px", 
        height: 20,         
    },
    logo: {
        width:'60%'               
    },
    header: {
        backgroundColor: 'white',
        display: 'flex',
        float: 'right'
    },
    header2: {
        float:'right', 
        height: window.innerWidth < 800 && '70px'       
    },
    menu: {        
        flex: 'auto',
        minWidth: 0,
        firstChild: {
            marginLeft: '30%',
            order: 2
        },
        child : {
            marginLeft: 'auto',
            order: 2
        },
        childColor: {
            color: 'black'
        }        
    },
    icon: {
        color: 'white',
        fontSize: '16px',        
        marginLeft: '15px'
    },
    labelIcon: {
        color: 'white',        
    },
    topHeader: {
        marginTop: window.innerWidth > 800 && '20px'
    }
}

export default HeaderMenu