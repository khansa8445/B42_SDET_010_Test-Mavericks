import SearchPage from "../../support/pageObject/SearchPage.cy";

describe('Search Functionality Tests', () => {
  const searchPage = new SearchPage();

  it('should search for an item successfully', () => {
    searchPage.visit();
    searchPage.searchForItem('Camera');
    searchPage.validateSearchResults('Camera');
  });
});
