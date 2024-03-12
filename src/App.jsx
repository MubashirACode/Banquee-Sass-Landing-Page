
import './App.css'
import { Account } from './componentes/Account'
import { Appstore } from './componentes/Appstore'
import { Banko } from './componentes/Banko'
import { Blog } from './componentes/Blog'
import { Footer } from './componentes/Footer'
import { Header } from './componentes/Header'
import { Help } from './componentes/Help'
import { Hero } from './componentes/Hero'
import { Notified } from './componentes/Notified'
import { Section } from './componentes/Section'
import { Seemeless } from './componentes/Seemless'
import { Side } from './componentes/Side'

function App() {
 

  return (
    <>
     <Header/> 
     <Hero/>
     < Section/>
     <Side/>
     <Notified />
     <Seemeless/>
     <Account/>
     <Banko/>
     <Appstore />
     <Help />
     <Blog/>
     <Footer/>
    </>
  )
}

export default App
