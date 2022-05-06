import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector(selectCars)
  console.log(cars)
  return (

    <Container>
      <a>
        <img src='/images/logo.svg' />

      </a>

      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href='#'>{car}</a>
        ))}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <i class="fa fa-bars"></i>
        </CustomMenu>
      </RightMenu>


      <BurgerNav show={burgerStatus}>

        <CloseWrapper onClick={() => setBurgerStatus(false)}>
          <i class="fa fa-times"></i>
        </CloseWrapper>
        {cars && cars.map((car, index) => (
          <li key={index}><a href='#'>{car}</a></li>
        ))}


        <li><a href='#'>Solar Roof</a></li>
        <li><a href='#'>Solar Panels</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Commerical Energy</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Find Us</a></li>
        <li><a href='#'>Support</a></li>
        <li><a href='#'>Investor Relations</a></li>
      </BurgerNav>



    </Container>
  )
}


export default Header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;

justify-content:center;

a {
  font-weight:600;
  text-transform:uppercase;
  margin: 0 20px;
  flex-wrap: nowrap;
  
}

@media(max-width: 768px) {
    display:none;
}

a:hover{
  background: rgba(0, 0, 0, 0.06)  ;
  border-radius:60px;

  
  

}

`

const RightMenu = styled.div`
  display:flex;
  align-items:center;
a {
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  flex-wrap: nowrap;
}

a:hover{
  background: rgba(0, 0, 0, 0.1)  ;
  border-radius:60px;
 

}
  `

const CustomMenu = styled.div`
  cursor:pointer;
  // font-size:1.4rem
  
  `


const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background-color:#fff;
  width:300px;
  z-index:16;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform: ${props => props.show ? ' translateX(0)' : 'translateX(100%)'};
  transition:transform 0.4s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    list-style:none;
    a {
      font-weight:500;
      
    }
  }
  `

const CloseWrapper = styled.div`
  cursor:pointer;
  display:flex;
  justify-content:flex-end;
  font-size:1.5rem;
  `

