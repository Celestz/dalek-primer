module.exports = {
  'Pure Cambogia Ultra - User Fills the Form and Gets Transferred to Checkout': function(test) {
    test
      .open('http://open:nutra@katm.us/adshore/feature/thepurecambogiaultra.com/sea')
      .assert.title('Pure Cambogia Ultra', 'Page Loaded as Expected')
      .type('input[name="first_name"]', 'Patrick')
      .type('input[name="last_name"]', 'Chua')
      .type('input[name="address"]', 'Address 1')
      .type('input[name="address2"]', 'Address 2')
      .type('input[name="city"]', 'Sample City')
      .type('input[name="zip"]', '11111')
      .type('input[name="phone"]', '123456789')
      .type('input[name="email"]', 'patrick@katmus.com')
      .submit('form[name="f"]')
      // .waitForElement('.checkout')
      .wait(4000)
      .assert.url().to.contain('checkout')
      .done();
  }
};
