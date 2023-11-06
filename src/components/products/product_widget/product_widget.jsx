import React from 'react'
import {products} from '../../../data/products'
import { ProductCard } from '../product_card/product_card'
import { ProductosContainer, ProductosWrapper } from './styles';
import { Button } from "../../button/button"
import { NextBackStyled } from './styles';
import{FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa';


export const ProductWidget = () => {
  return (
    <ProductosWrapper>
     <h3> Products Gallery</h3>
     <ProductosContainer>

        {
      products.map((product) => <ProductCard key={product.id} {...product}/>)


        }
     </ProductosContainer>

   <NextBackStyled>
    <Button><FaAngleDoubleLeft/> Back</Button>
    <Button> Next  < FaAngleDoubleRight/></Button>
   </NextBackStyled>
   
    </ProductosWrapper>
  )
}
