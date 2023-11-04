import React from 'react'
import {  FaRegHeart,FaMapMarkerAlt,FaEnvelope ,FaWhatsapp,FaShippingFast } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import { FooterContainerStyled } from './styles';
import { LinksContainerStyled } from './styles';
import { SocialMediaStyled, ContacUsStyled } from './styles';
import  london from "../../assets/image/london.png"
import  argentina from "../../assets/image/argentina.png"

export const Footer = () => {
  return (
    <FooterContainerStyled>

      <LinksContainerStyled >
      <a href="/#"> Term & Conditions</a>
     
      <a href="/#">Newsletter </a>

      

      </LinksContainerStyled >
      <h3>Contact Us</h3>
      <ContacUsStyled >
       
        <p> <FaMapMarkerAlt/>Rosales 256. Ramos Mejía</p>
        <p><FaWhatsapp/>1123857844</p>
        <p><FaShippingFast/> Free Shipping</p>
    
      </ContacUsStyled >
      <h3>Stay in touch</h3>
      <SocialMediaStyled>
       
  
            <FaFacebook/>
            <FaTwitter/>
            <FaPinterest/>
            <FaInstagram/>
            <FaEnvelope/>
          
      </SocialMediaStyled>
      


  
      <div>
    
<p> Designed in < FaRegHeart/> by Nancy Lucero </p>
<p> Copyright © 2023- All right reserved</p>
      </div>
      <div>
      <img src={london} />
      <img src={argentina} />
   
    

      </div>
      
      </FooterContainerStyled>
  );
};
