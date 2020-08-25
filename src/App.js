import React from "react";
import { Layout } from "antd";
import "./App.css";
import NavBar from "./components/NavbarContent";
import CarouselContent from "./components/CarouselContent";
import FlexContent from "./components/FlexContent";

const App = () => {
  return (
    <>
      <Layout className="layout">
      <NavBar />

      <CarouselContent />
      <FlexContent />
    </Layout>
  </>
  );
};

export default App;
