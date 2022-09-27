import React from 'react'
import BuildResume from './components/BuildResume'
import Footer from './components/footer/Footer'
import SideBar from './components/sideBar/SideBar'

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <BuildResume />
      <Footer />

    </>
  )
}
