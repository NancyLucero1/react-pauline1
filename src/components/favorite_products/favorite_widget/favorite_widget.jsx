import React from 'react'
import {favorite} from '../../../data/favorite'
import { FavoriteCard } from '../favorite_card/favorite_card'
import { FavoriteContainer, FavoriteWrapper } from './styles';
import { Button } from '../../button/button';


export const FavoriteWidget = () => {
  return (
    <FavoriteWrapper>
    
     <h3>What are your favorite  cakes? </h3>
     <h3>Here are some of the most popular cake flavors:</h3>
    
     <FavoriteContainer>

        {
      favorite.map((product) => <FavoriteCard key={product.id} {...product}/>)


        }
     </FavoriteContainer>
    
    <Button>Go To Store</Button>
  

   
   
    </FavoriteWrapper>
  )
}

