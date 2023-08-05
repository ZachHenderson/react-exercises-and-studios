export default function BookList() {
   let pageTitle = "New Releases";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681921623i/62919356.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1667593334i/61755286.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668357819i/62039193.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Cover of Immortal Longings by Chloe Gong" />
         <img src={book2} alt="Cover of Light Bringer by Pierce Brown" />
         <img src={book3} alt="Cover of the Wonder State by Sara Flannery Murphy" />
      </div>      
   );
}