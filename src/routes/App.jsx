import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from '../containers/Home';
import {Checkout} from '../containers/Checkout';
import {Information} from '../containers/Information';
import {Payment} from '../containers/Payment';
import {Success} from '../containers/Success';
import {NotFound} from '../containers/NotFound';
import { Layout } from "../components/Layout";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const clientPayPalId = 'AafI40cFBfzYSiLWfhFjcMCPuvLcJ4Tj493A2dqllaPQMKWtwDAANb66QuUMUtgZh_YvFYcNCin8AILi';

const App = () => {

  const initalState = useInitialState();

  return (
    <PayPalScriptProvider options={{"client-id" :clientPayPalId }}>
      <AppContext.Provider value={initalState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/checkout/information" element={<Information />} />
              <Route exact path="/checkout/payment" element={<Payment />} />
              <Route exact path="/checkout/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </PayPalScriptProvider>
  )
}

export  {App}
