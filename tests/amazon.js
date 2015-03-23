module.exports = {
'Amazon does its thing': function (test) {
  test
    .open('http://www.amazon.com/')
    .type('#twotabsearchtextbox', 'Blues Brothers VHS')
    .click('.nav-input')
    .waitForElement('#result_0')
    .assert.text('#result_0 h2.a-size-medium').is('The Blues Brothers')
    .done();
}
};
