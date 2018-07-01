import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from "./Header"
import Home from "../../pages/Home"
import Login from "../../pages/Login"
import Agenda from "../../pages/Agenda"
import Service from "../../pages/Service"
import Services from "../../pages/Services"
import Company from "../../pages/Company"
import Companies from "../../pages/Companies"

const App = () => (
  <Router>
    <div>
      <CssBaseline />
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/agenda" component={Agenda} />
      <Route path="/c/:companyId" component={Company} />
      <Route path="/companies" component={Companies} />
      <Route path="/s/:serviceId" component={Service} />
      <Route path="/services" component={Services} />
    </div>
  </Router>
)

export default App