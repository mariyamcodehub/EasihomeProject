import React from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './component/Home';
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Aboutus from "./component/Aboutus"
import Construction from "./component/Construction"
import Renot from "./component/Renot"
import Interior from "./component/Interior"
import Painting from './component/Painting';
import Contact from './component/Contact';
import Form from './component/Form';
import Formpain from './component/Formpain';
import Constructionpayment from './component/Constructionpayment';
import Join from './component/Join';
import Refer from './component/Refer';
import Termspage from './component/Termspage';
import Privacy from './component/Privacy';
import Faqpage from './component/Faqpage';
import Cancellation from './component/Cancellation';


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

