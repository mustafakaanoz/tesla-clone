import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="EXISTING INVENTORY"
      />
      
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="EXISTING INVENTORY"
      />
       <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
       <Section
        title="Solar Roof"
        description="Produce Clean Energy
        From Your Roof"
        backgroundImage="solar-roof.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnText="shop now"
        
      />

    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`