import React from "react"
import './Container.css'

const Container = props => (
  <div className="main-container">
    {props.children}
  </div>
)

export default Container