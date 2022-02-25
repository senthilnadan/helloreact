import React from 'react';
import { BrowserRouter as Router, Routes, NavLink } from 'react-router-dom';

const Layout = () => {
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/elements" element={<Element />} />
      <Route path="/atoms" element={<Atom />} />
    </Routes>
  </Router>;
};

const Home = () => <h2>Home</h2>;

const Element = () => <h2>about</h2>;

const Atom = () => <h2>atom</h2>;

export default Layout;
