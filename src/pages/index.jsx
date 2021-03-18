import React from 'react'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'
import '@fontsource/montserrat'
import MobileSite from '../components/MobileSite'
import DesktopSite from '../components/DesktopSite'

const Home = () => (
  <>
    <MobileView>
      <MobileSite />
    </MobileView>
    <BrowserView>
      <DesktopSite />
    </BrowserView>
  </>
)

export default Home
