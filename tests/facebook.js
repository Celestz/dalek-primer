
module.exports = {
'Facebook Login - No Form Entry': function (test) {
  test
    .open('https://www.facebook.com/')
    .click('#u_0_n')
    .assert.visible('.login_error_box')
    .done();
}
};
