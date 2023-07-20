import React from 'react';
import styles from './Home.module.css';
import Assets from '../assets';
import Button from '../components/Button';
import Dish from '../components/Dish';

const menuItems= [
  {
    name: "Greek salad",
    image: Assets.images.greekSalad,
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, granished with crunchy garlic and rosemary croutons"
  },
  {
    name: "Bruchetta",
    image: Assets.images.bruchetta,
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive"
  },
  {
    name: "Bruchetta",
    image: Assets.images.bruchetta,
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive"
  },
]

function Home() {
  return (
    <main>
      <div className={styles.presentation}>
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button title="Reserve a Table"/>
        </div>
        <img src={Assets.images.restaurantFood} alt="Restaurant food" width="250" height="250"/>
      </div>
      <div className={styles.news}>
        <h1>This week specials!</h1>
        <Button title="Online Menu" padding="16px 16px"/>
      </div>
      <div className={styles.menuPreview}>
        {menuItems.map(dish => <Dish key={dish.name} name={dish.name} image={dish.image} price={dish.price} description={dish.description}/>)}
      </div>
    </main>
  )
}

export default Home