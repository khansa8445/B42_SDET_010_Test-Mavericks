import FooterPage from "../../support/pageObject/FooterPage.cy";

describe('Footer Tests', () => {
  const footerPage = new FooterPage();

  it('should verify footer links', () => {
    footerPage.validateFooterLinks();
  });
});
