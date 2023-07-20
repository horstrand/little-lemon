import React from 'react';
import styles from './Dish.module.css';
import Assets from '../assets';

function Dish(props) {
  return (
    <div className={styles.dish}>
      <img src={props.image} alt={props.name} width="250" height="250" />
      <div className={styles.details}>
        <div className={styles.titlePrice}>
          <h3>{props.name}</h3>
          <h3>{props.price}</h3>
        </div>
        <p>{props.description}</p>
        <div className={styles.delivery}>
          <h4>Order a delivery</h4>
          <img src={Assets.logos.bike} alt={props.name} width="40" height="30" />
        </div>
      </div>
    </div>
  )
}

export default Dish;