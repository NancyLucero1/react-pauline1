import styled from "styled-components";
import{motion} from "framer-motion";

export const CategoriasWrapper = styled.div`

display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
max-width:1300px;
margin:  20px auto;


@media (max-width: 768px) {
    padding-top: 20px;
    text-align: center;
     gap:20px;
     justify-content:center;

}

`

export const CategoriasContainer = styled.div`
display: flex;

flex-wrap: wrap;
justify-content:space-around;
align-items:center;
gap:20px;
user-select: none;
@media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
    
}


`