import GlobalStyle from '../GlobalStyle'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { Home } from './Pages/Home/Home'
import { Product } from './Pages/Product/Product'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <GlobalStyle />
      <Router>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product" element={<Product/>} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
