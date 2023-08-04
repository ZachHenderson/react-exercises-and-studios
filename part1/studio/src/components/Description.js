import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    const authorLink = "https://www.gimmesomeoven.com/easy-beef-stroganoff-recipe/"
    const authorPhoto = "https://www.gimmesomeoven.com/images/about-new-round.jpg"
    const authorName = "Ali"
    
    return(
        <div className = {StyleSheet.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Ali, the recipe's author" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Favorite Recipe</a>
            </div>
        </div>        
    );
}

class RecipeDescription extends React.Component {
   render() {
    return(
    <div> 
    <div>
       <h1>Beef Stroganoff</h1>
       <p>Easy beef stroganoff recipe with mushroom sauce</p>
    </div>
    <RecipeAuthor />
 </div> 
    )
   }
}

export default RecipeDescription;