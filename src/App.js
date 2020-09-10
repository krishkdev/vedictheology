import React from "react";
import { Layout } from "antd";
import "./App.css";
import NavBar from "./components/NavbarContent";
import FooContent from "./components/FooContent";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import HomePage from "./components/Home/HomePage";
import GalleryPage from "./components/Gallery/GalleryPage";
import AboutPage from "./components/About/AboutPage";
import DonatePage from "./components/Donate/DonatePage";
import ContactPage from "./components/contact/ContactPage";


const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <NavBar />
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/doante" component={DonatePage} />
        <Route path="/contact" component={ContactPage} />
        </Switch>
        <FooContent />
      </Layout>
      
    </Router>
  );
};

export default App;
