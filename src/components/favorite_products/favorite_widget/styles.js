

import styled from "styled-components";
import{motion} from "framer-motion";

export const FavoriteWrapper = styled.div`
display: flex;
padding-top:20px;
justify-content:center;
width:100%;
align-items:center;
flex-direction:column;
max-width:1300px;
margin:  15px auto;

@media (max-width: 768px) {

    text-align: center;
    
}


`

export const FavoriteContainer = styled.div`

display: grid;
place-items:center;
flex-wrap: wrap;
justify-content:center;
grid-template-columns: repeat(auto-fit, 200px);
row-gap:2.5rem;
width:100%;
max-width:1300px;
padding: 0.6rem 0;

 


`