import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './component/home/page';
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Aboutus from "./component/about/page"
import Construction from "./component/construction/page"
import Renot from "./component/renovation/page"
import Interior from "./component/interior/page"
import Painting from './component/painting/page';
import Contact from './component/contact/page';
import Form from './component/form/page';
import Formpain from './component/formPainting/page';
import Constructionpayment from './component/payment/Constructionpayment';
import Join from './component/join/Join';
import Refer from './component/refer/Refer';
import Termspage from './component/termspage/Termspage';
import Privacy from './component/privacy/Privacy';
import Faqpage from './component/faq/Faqpage';
import Cancellation from './component/cancellation/page';


function App() {


  return (

    <Router>
      <div>
        <Navbar />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/Aboutus" component={Aboutus} />
          <Route path="/Construction" component={Construction} />
          <Route path="/Renot" component={Renot} />
          <Route path="/Interior" component={Interior} />
          <Route path="/Painting" component={Painting} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Form" component={Form} />
          <Route path="/Formpain" component={Formpain} />
          <Route path="/Constructionpayment" component={Constructionpayment} />
          <Route path="/Join" component={Join} />
          <Route path="/Refer" component={Refer} />
          <Route path="/Termspage" component={Termspage} />
          <Route path="/Privacy" component={Privacy} />
          <Route path="/Faqpage" component={Faqpage} />
          <Route path="/Cancellation" component={Cancellation} />


        </Switch >
        <Footer />
      </div>
    </Router>

  )
}

export default App

