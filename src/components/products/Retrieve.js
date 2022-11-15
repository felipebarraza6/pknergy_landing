import React, { useState, useEffect } from 'react'
import { products } from './list_products'
import { Row, Col, Card, Button, Typography } from 'antd'

import {    
    useParams
  } from "react-router-dom"


const Retrieve = () => {

    let { id } = useParams()

    const [state, setState] = useState(null)

    function getProducts(){
        products.filter( x => x.id == id).map(x=>setState(x))
    }

    useEffect(()=> {
        getProducts()
    }, [])


    return(<Row align={'middle'} style={{margin:'50px'}}>
        {state && <>
            <Col xl={12} xs={24} style={styles.col}>
                <Card title={state.name} style={styles.card} >
                   <center> <img src={state.image} width='70%' /></center>
                </Card>
            </Col>
            <Col xl={12} xs={24} style={styles.col}>
                <Card style={styles.card}>
                    <Typography.Paragraph>
                        {state.description}
                    </Typography.Paragraph>
                    <Row>
                    <Button type='primary' onClick={()=>window.location.assign('/contact')} style={{margin:'10px', backgroundColor:'rgb(0, 153, 68)', borderColor:'rgb(0, 153, 68)'}}>Solicitar cotización</Button>
                    <Button type='primary' style={{margin:'10px'}} onClick={()=>window.location.assign('/products')}>Ir al listado de productos</Button>
                    </Row>
                </Card>
            </Col>
            </>}
    </Row>)

}

const styles ={
    col: {
        padding:'20px'
    },
    card:{
        borderRadius:'20px'
    }
}


export default Retrieve