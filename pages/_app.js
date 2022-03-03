import { useState } from 'react'
import  WalletProvider  from "../state/Wallet";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
import '@styles/globals.css'
import Layout from '@components/Layout'
import AppContext from '../state/AppContext'

function Application({ Component, pageProps }) {

  // FAQ Accordion
  const [openAccordion, setOpenAccordion] = useState(0);
  const [popupStatus, setPopupStatus] = useState(false);
  const [mobileMenu, showMobileMenu] = useState(false);


  const handleToggleAccordion = (accordionId) => {
    setOpenAccordion(prevOpen => {
      if(prevOpen === accordionId){
        return null
      }else{
        return accordionId
      }
    })
  }

  const appState = {
    state: {
      openAccordion: openAccordion,
      popupStatus: popupStatus,
      mobileMenu: mobileMenu
    },
    handleToggleAccordion: handleToggleAccordion,
    setPopupStatus: setPopupStatus,
    showMobileMenu: showMobileMenu,
  }

  return (
    <AppContext.Provider value={appState}>
      <Layout>
      <AlertProvider template={AlertTemplate} timeout={3000}>
      <WalletProvider>
        <Component {...pageProps} />
        </WalletProvider>
        </AlertProvider>
      </Layout>
    </AppContext.Provider>

  )
}

export default Application
