import React from 'react'
import {  FaRegHeart,FaMapMarkerAlt,FaEnvelope ,FaWhatsapp,FaShippingFast } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import { FooterContainerStyled } from './styles';
import { LinksContainerStyled } from './styles';
import { SocialMediaStyled, ContacUsStyled } from './styles';
import  london from "../../assets/image/london.png"
import  argentina from "../../assets/image/argentina.png"
import { TitleH3 } from './styles';

export const Footer = () => {
  return (
    <FooterContainerStyled>

      <LinksContainerStyled >
      <a href="/#"> Term & Conditions</a>
     
      <a href="/#">Newsletter </a>

      

      </LinksContainerStyled >
      <TitleH3><h3>Stay in touch</h3></TitleH3>
      <ContacUsStyled >
       
        <p> <FaMapMarkerAlt/>Rosales 256. Ramos Mejía</p>
        <p><FaWhatsapp/>1123857844</p>
        <p><FaShippingFast/> FreeShipping</p>
    
      </ContacUsStyled >
     <TitleH3> <h3>Follow Us</h3></TitleH3>
      <SocialMediaStyled>
       
  
            <FaFacebook/>
            <FaTwitter/>
            <FaPinterest/>
            <FaInstagram/>
            <FaEnvelope/>
          
      </SocialMediaStyled>
      


  
      

      <p> Designed in < FaRegHeart/> by Nancy </p>
<p> Copyright © 2023- All  rights reserved</p>
      <div>
      <img src={london} />
      <img src={argentina} />
   
    

      </div>
      
      </FooterContainerStyled>
  );
};
