import React, { Children } from "react";

import "./App.css";
import Template from "./sandbox/components/Template";
import Test from "./sandbox/components/Test";
import Logic from "./sandbox/components/Logic";
import StringDemo from "./sandbox/components/StringDemo";
import Styles from "./sandbox/components/style/Styles";
import StyleModule from "./sandbox/components/style/StyleModule";
import StyleTest from "./sandbox/components/style/StyleTest";
import MuiTypography from "./sandbox/mui-sandbox/data-display/MuiTypography";
import CardBody from "./cards/components/card/CardBody";
import Card from "./cards/components/card/Card";
import CardHead from "./cards/components/card/CardHead";
import CardActionBar from "./cards/components/card/CardActionBar";
import Cards from "./cards/components/Cards";
import CardsPage from "./cards/pages/CardsPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import SetPost from "./sandbox/use-state/SetPost";
import Main from "./layout/main/Main";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
// import Layout from "./layout/main/Layout";

function App() {
  return (
    <div className="App">
      {/* <Template />
      <Test />
      <Logic />
      <StringDemo />
      <Styles />
      <StyleModule />
      <StyleTest /> */}
      {/* <MuiTypography /> */}
      {/* <CardBody
        adress={{
          city: "Tel Aviv",
          country: "Israel",
          street: "haslom",
          houseNumber: 652,
          zip: 111,
        }}
      /> */}
      {/* <Card /> */}
      {/* <CardHead
        image={{
          url: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg",
          alt: "sad",
        }}
      /> */}
      {/* <CardActionBar /> */}
      {/* <Cards /> */}
      {/* <CardsPage /> */}
      {/* <AboutPage /> */}
      {/* <ErrorPage /> */}
      {/* <SetPost /> */}
      {/* <Main children /> */}
      {/* <Layout>adi</Layout> */}
      {/* <CardsPage /> */}
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
        ,
      </BrowserRouter>
    </div>
  );
}

export default App;
