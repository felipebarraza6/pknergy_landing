import './assets/css/Home.css'
import { Layout, Typography } from 'antd'
import HeaderMenu from './components/home/menu/HeaderMenu'
import HomePage from './pages/HomePage'
import Profile from './pages/About/Profile'
import Manufacturing from './pages/About/Manufacturing'
import QualityControl from './pages/About/QualityControl'
import ServicePersonalizaed from './pages/ServicePersonalized'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Retrieve from './components/products/Retrieve'

import { BrowserRouter, Route, Routes } from "react-router-dom"


const {  Content, Footer } = Layout
const { Title } = Typography

function Home() {
  return (    
    <Layout>
      <BrowserRouter>
        <HeaderMenu />
        <Content>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
              
            <Route exact path='/about/profile' element={<Profile />} />
            <Route exact path='/about/rd-manufacturing' element={<Manufacturing />} />
            <Route exact path='/about/quality-control' element={<QualityControl />} />

            <Route exact path='/products' element={<Products />} />
            <Route exact path='/products/:id' element={<Retrieve />} />
            <Route exact path='/service-personalized' element={<ServicePersonalizaed />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </Content>
        <Footer style={{backgroundColor:'rgb(0, 153, 68)', color: 'white', textAlign:'center'}}>
            <Title level={4} style={{color:'white'}}>PKNERGY 2022</Title>
        </Footer>
      </BrowserRouter>
    </Layout>
  )
}

export default Home
