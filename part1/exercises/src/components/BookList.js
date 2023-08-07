export default function BookList() {
   let pageTitle = "New Releases";
   let book1 = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1687463048l/90202302._SY75_.jpg";
   let book2 = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1667593334l/61755286._SY475_.jpg";
   let book3 = "https://i.gr-assets.com/imahttps://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1677175478l/116536542._SY75_.jpgges/S/compressed.photo.goodreads.com/books/1668357819l/62039193.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Cover of Immortal Longings by Chloe Gong" />
         <img src={book2} alt="Cover of Light Bringer by Pierce Brown" />
         <img src={book3} alt="Cover of the Wonder State by Sara Flannery Murphy" />
      </div>      
   );
}