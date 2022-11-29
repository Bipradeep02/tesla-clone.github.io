import React from 'react'
import styled from "styled-components"
import Section from './Section'

const Container = styled.div`
    height: 100vh;

`

function Home() {
  return (
    <div>
        <Container> 
            <Section 
                title= "Model S"
                description= "Order Online for Touchless Delivery"
                backgroundImg= "model-s.jpg"
                leftBtnText= "Custom Order"
                rightBtnText= "Existing Inventory"
            />
            <Section 
                title= "Model Y"
                description= "Order Online for Touchless Delivery"
                backgroundImg= "model-y.jpg"
                leftBtnText= "Custom Order"
                rightBtnText= "Existing Inventory"
            />
            <Section 
                title= "Model 3"
                description= "Order Online for Touchless Delivery"
                backgroundImg= "model-3.jpg"
                leftBtnText= "Custom Order"
                rightBtnText= "Existing Inventory"
            />
            <Section 
                title= "Model X"
                description= "Order Online for Touchless Delivery"
                backgroundImg= "model-x.jpg"
                leftBtnText= "Custom Order"
                rightBtnText= "Existing Inventory"
            />
            <Section 
                title= "Lowest Cost Solar Panels"
                description= ""
                backgroundImg= "solar-panel.jpg"
                leftBtnText= "Order Now"
                rightBtnText= "Learn More"
            />
            <Section 
                title= "Solar for New Roofs"
                description= "Solar Roof Costs Less than a New Roof Plus Solar Panels"
                backgroundImg= "solar-roof.jpg"
                leftBtnText= "Order Now"
                rightBtnText= "Learn More"
            />
            <Section 
                title= "Accessories"
                description= ""
                backgroundImg= "accessories.jpg"
                leftBtnText= "Order Now"
                // rightBtnText= "Learn More"
            />

        </Container>
    </div>
  )
}

export default Home


