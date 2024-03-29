import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Global/Navbar"
import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
