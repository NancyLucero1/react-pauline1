import logo from '../../assets/image/logo.png'
import trolley from '../../assets/image/trolley.png'
import { motion } from 'framer-motion';
import React from 'react';
import { FaHome, FaUserTie, FaUsers,FaUserPlus ,FaUserEdit, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import {
    HomeContainer,
    LinkContainer,
    LinksContainer,
    NavbarContainer,
    SpanStyled,
    UserContainer,
    UserNav,
} from './styles';



export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <a href='/#'>
          <img
            src={logo}
          />
        </a>
      </div>
      <LinksContainer>
        <HomeContainer>
          <motion.div whileTap={{scale: 0.97}}>
            <a href='/#'>
              <LinkContainer home={true}>
                <FaHome />
              </LinkContainer>
                Home
            </a>
          </motion.div>
          <UserNav>

          <UserContainer>
            <SpanStyled>Sign In</SpanStyled>
            <FaUserTie/>
            <SpanStyled> Sign Up</SpanStyled>
            <FaUserPlus/>
            <SpanStyled>About Us</SpanStyled>
            <FaUsers/>
            <SpanStyled>Contact Us</SpanStyled>
            <FaUserEdit/>
           
            
          </UserContainer>
         
          </UserNav>
         
       
        </HomeContainer>
        <motion.div whileTap={{scale: 1.20}}>
       
        <LinkContainer>
        <img src= {trolley} />
        </LinkContainer>
        </motion.div>
      </LinksContainer>
    </NavbarContainer>
  );
};
