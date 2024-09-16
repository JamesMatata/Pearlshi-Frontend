import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';


//Components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';


//Pages
import HomePage from './Pages/Home';
import ContactPage from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import GalleryMain from './Pages/Gallery';

//Service Pages
import Decorations from './Pages/ServicePages/Decorations';
import FloralRequisition from './Pages/ServicePages/FloralRequisition';
import TentHiring from './Pages/ServicePages/TentHiring';
import EventPlanning from './Pages/ServicePages/EventPlanning';
import OfficeDelivery from './Pages/ServicePages/OfficeDelivery';
import TableSetUp from './Pages/ServicePages/TableSetUp';
import BackdropHiring from './Pages/ServicePages/BackdropHire';
import AllReviews from './Pages/AllReviews';
import TopReviews from './Components/Review/TopReviews';

import Booking from './Pages/Booking';
import SignUp from './Components/SignUp/SignUp';


function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/connect" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryMain />} />
            {/* Route to handle review submission */}
            <Route path="/review" element={<TopReviews />} />
            <Route path="/reviews" element={<AllReviews />} />

            <Route path="/decorations" element={<Decorations />} />
            <Route path="/floralRequisition" element={<FloralRequisition />} />
            <Route path="/tentHiring" element={<TentHiring />} />
            <Route path="/eventPlanning" element={<EventPlanning />} />
            <Route path="/officeDelivery" element={<OfficeDelivery />} />
            <Route path="/tableSetUp" element={<TableSetUp />} />
            <Route path="/backdrop&Garland" element={<BackdropHiring />} />

            <Route path="/booking" element={<Booking />} />
          </Routes>
          <ScrollToTop />
          <SignUp />
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
