import React, { useEffect, useState } from 'react'
import {products} from './list_products'
import { Card, Row, Col } from 'antd'
import {    
    useLocation
  } from "react-router-dom"

const List = () => {

    const [state, setState] = useState([])

    let  { search }  = useLocation()
    console.log(search.slice(1,10))

    function getProducts(){
        if(search){
            setState((products.filter( x => x.category == search.slice(1,10))))
            
        } else {
            setState(products)
        }
        
    }

    useEffect(()=> {
        getProducts()
    }, [search.slice(1,10)])

    console.log(state)

    return(<Row> {state && <>
        {state.map((x)=><Col xl={6} xs={12} style={styles.col}>
            <Card hoverable onClick={()=>window.location.assign(`/products/${x.id}`)} cover={<img src={x.image} width='100%' /> }>
                <Card.Meta description={x.name} />
            </Card>
        </Col>)}
        </>}
            
        </Row>)

}

const styles = {
    col: {
        padding: '30px'
    }
}

export default List