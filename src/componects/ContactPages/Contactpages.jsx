import React from 'react'
import HelpSection from './components/HelpSection'
import BreadcrumbNav from './components/BreadcrumbNav'
import LocationsSection from './components/location'
import ContactForm from './components/contactform'
import WorldMap from './components/WorldMap'
function Contactpages() {
  return (
    <div>
      <BreadcrumbNav/>
      <HelpSection/>
      <WorldMap/>
      <LocationsSection/>
      <ContactForm />
    </div>
  )
}

export default Contactpages
