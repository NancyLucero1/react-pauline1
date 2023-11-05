import React from 'react'
import {favorite} from '../../../data/favorite'
import { FavoriteCard } from '../favorite_card/favorite_card'
import { FavoriteContainer, FavoriteWrapper } from './styles';



export const FavoriteWidget = () => {
  return (
    <FavoriteWrapper>
     <h2>What are your favorite  cakes?</h2>
     <h3>Here are some of the most popular cake flavors:</h3>
     <FavoriteContainer>

        {
      favorite.map((product) => <FavoriteCard key={product.id} {...product}/>)


        }
     </FavoriteContainer>

   
   
    </FavoriteWrapper>
  )
}

