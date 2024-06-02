import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import Cart from './cart';



function AppRoutes () {
    return (
        <Router>
          <div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Cart />} />
            </Routes>
          </div>
        </Router>
      );
}

export default AppRoutes;