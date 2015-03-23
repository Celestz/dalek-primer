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
      .waitForElement('.checkout-form')
      .wait(1000) //Medyo Dirty
      // Should be on /checkout now
      .assert.url().to.contain('checkout')
      //Select Single Bottle Package
      .click('.boxes.box3')
      //Fill Out Payment Form
      //SELECT VISA
      .setValue('select[name="payment_method"]','visa')
      //INPUT TEST CARD
      .type('input[name="cc_number"]','4444333322221111')
      .setValue('select[name="cc_exp_mm"]','May')
      .setValue('select[name="cc_exp_yyyy"]','2017')
      .type('input[name="cc_csc"]','128')
      .submit('form[name="f"]')
      .wait(2000) //Medyo Dirty Talaga!
      // Should be on /checkout now
      .assert.url().to.contain('upsell')
      //Click add to upsell
      .click('.yes-send')
      .wait(2000) //I keep Repeating myself
      //Should be in upsell1 now
      .assert.url().to.contain('upsell1')
      //Add GCE
      .click('#order .btn-select')
      .wait(2000) //Umu.
      //Should be in upsell2 now
      .assert.url().to.contain('upsell2')
      .click('.box.set3 .btn-select')
      .wait(2000) //Umu.
      .assert.url().to.contain('upsell3')
      .click('.add-btn')
      .wait(2000)
      .assert.url().to.contain('confirm')
      .assert.numberOfElements('.order-summary table tbody tr', 5, 'Main Product + 4 Upsells Bought')
      .done();
  }
};
