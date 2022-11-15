import React from 'react'
import { Row, Col, Typography } from 'antd'
import wallpaper from '../../assets/images/banners/partners.jpg'
import { BuildFilled, CheckCircleOutlined, GroupOutlined,
        PartitionOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Partners = () => {

    return(<>
    <Row style={styles.titleRow}>
    <Col span={24} >
            <Title style={styles.title1}>Partners</Title>            
        </Col>
    </Row>
    <Row  justify='space-around' align='middle'>        
        <img src={wallpaper} width='100%' />        
    </Row></>)

}

const styles = {   
    title1: {
        color: 'white',
        textAlign: 'center',
        padding: '30px'        
    },    
    titleRow: {
        backgroundColor: 'black'
    }
}

export default Partners