
module.exports = {
'Cambogia Ultra - Fails at Index - No Info Entered': function (test) {
  test
    .open('http://open:nutra@katm.us/adshore/feature/thepurecambogiaultra.com')
    .click('button .btn-rush')
    .waitForElement('span.error')
    .assert.visible('.error')
    .done();
}
};
