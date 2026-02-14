import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import OrgCom from './Pages/OrgCom/OrgCom'
import Venue from './Pages/Venue/Venue'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SupCom from './Pages/OrgCom/SupCom'
import Authors from './Pages/Authors/Authors'
import TPC from './Pages/OrgCom/TPC'
import AboutThapar from './Pages/AboutThapar'
import AboutPatiala from './Pages/AboutPatiala'
import ScrollToTop from './Components/Common/ScrollToTop'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path="venue" element={<Venue />} />
            <Route path="authors" element={<Authors />} />
            <Route path="OrgCommittee" element={<OrgCom />} />
            <Route path="SupCommittee" element={<SupCom />} />
            <Route path="tpc" element={<TPC />} />
            <Route path="about-thapar" element={<AboutThapar />} />
            <Route path="about-patiala" element={<AboutPatiala />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App