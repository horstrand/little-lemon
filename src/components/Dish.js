import React from 'react';
import styles from './Dish.module.css';

function Dish(props) {
  return (
    <div className={styles.dish}>
      <img src={props.image} alt={props.name} width="200" height="200"/>
      <div className={styles.details}>
        <div className={styles.titlePrice}>
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  )
}

export default Dish;