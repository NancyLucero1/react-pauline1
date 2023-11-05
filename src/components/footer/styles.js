
import styled from 'styled-components';



export const FooterContainerStyled = styled.div`
 border-bottom: 2px solid #E8E8D8 ;
 background: #2B2B1A ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0.5rem 0;
  p span {
    font-weight: 400;
  }
`

export const LinksContainerStyled = styled.div`

  a{
font-size:1rem;


padding-left: 1rem;

  }
`

export const SocialMediaStyled = styled.div`
  align-items: center;

h3{
  align-items:column;
  
}

padding:30px;
gap:20px;
  justify-content: center;
  align-items: center;

   font-size:20px;
   color:white;

  top: 0;
  display: flex;
justify-content:space-around;
align-items: center;

 left:0;
 @media (max-width:768px) {
    padding-top: 30px;
    text-align: center;
   
}


`
export const ContacUsStyled = styled.div`
flex-direction: column;
  justify-content: center;

 width: 55%;
 font-size:20px;
   color:white;
  top: 0;
  display: flex;
justify-content:space-around;
align-items: center;

 left:0;
 @media (max-width:768px) {
    padding-top: 30px;
    text-align: center;
    width:30%
    
}
`
export const  TitleH3 = styled.div`

border-bottom: 1px solid #0EC7D4 ;
width:80%;

`

export const  Sign = styled.div`
background:black;
width:100%;
padding-top:10px;
justify-content:center;
text-align:center;
font-size:12px;
   color:white;
 


`

export const FooterMenu = styled.div`
  align-items: center;
font-size:1rem;
h3{
  align-items:column;
  
}

padding:30px;
gap:20px;
  justify-content: center;
  align-items: center;
width:80%;
   font-size:20px;
   color:white;

  top: 0;
  display: flex;
justify-content:space-around;
align-items: center;

 left:0;
 @media (max-width:768px) {
    padding-top: 30px;
    text-align: center;
    font-size:0.7rem;
}


`