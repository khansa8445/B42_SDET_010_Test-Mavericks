import WishlistPage from "../../support/pageObject/wishlistPage.cy";

describe('Wishlist Tests', () => {
  const wishlistPage = new WishlistPage();

  it('should add an item to the wishlist', () => {
    wishlistPage.visit();
    wishlistPage.addItemToWishlist('Laptop');
    wishlistPage.openWishlist();
    wishlistPage.validateItemInWishlist('Laptop');
  });
});
