import React from 'react'
import { Carousel } from 'antd'
import s1 from '../../assets/images/sliders/1.jpg'
import s2 from '../../assets/images/sliders/2.jpg'
import s3 from '../../assets/images/sliders/3.jpg'

const Sliders = () => {
    return(<Carousel autoplay dotPosition={window.innerWidth > 800 ? 'bottom':'right'}>
        <div>
            <img src={s1} style={styles.slider} alt='image1' />
        </div>
        <div>
            <img src={s2} style={styles.slider} alt='image1' />
        </div>
        <div>
            <img src={s3} style={styles.slider} alt='image1' />
        </div>
    </Carousel>)


}


const styles = {
    slider: {
        width:'100%'
    }
}


export default Sliders