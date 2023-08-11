const RecipeAuthor = () => {
   let authorLink = "https://joyfoodsunshine.com/homemade-mac-and-cheese/";
   let authorPhoto = "https://joyfoodsunshine.com/wp-content/uploads/2023/04/cropped-author-avatar-64x64.jpg";
   let authorName = "Laura";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["macaroni", "butter", "milk", "cheese", "corn starch"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Easy Homemade Mac and Cheese</h1>
            <p>This Easy Homemade Mac and Cheese Recipe is made with 8 ingredients in 15 minutes on the stovetop!</p>
            <img src="https://joyfoodsunshine.com/wp-content/uploads/2019/04/homemade-mac-and-cheese-recipe-1.jpg" alt="Bowl of mac and cheese"/>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}