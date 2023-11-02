
import styled from "styled-components";
import{motion} from "framer-motion";

export const CardCategoria = styled(motion.div) `

display: flex;
justify-content: center;
align-items: center;
gap:0.5rem;
width: 105px;
padding: 0.5 0.5rem;
background-color: #A3976D;
border:2px solid #3E371B ;
border-radius:10px;
cursor:pointer;
h2{  
    font-size: 1rem;
}
:first-child{
    img{ 
        padding-top: 1px;
        padding-bottom: 1px;
    }

}
@media (max-width:768px) {
    padding-top: 30px;
    text-align: center;
    
}




`