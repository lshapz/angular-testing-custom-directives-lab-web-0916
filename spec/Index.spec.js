var path = require('path');

describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should display the info correctly', function() {
    var directive = element.all(by.css('user-profile'));

    expect(directive.get(0).getText()).toContain('Bill Gates');
    expect(directive.get(0).getText()).toContain('chairman');
    expect(directive.get(0).getText()).toContain('magnate');
    expect(directive.get(0).getText()).toContain('Description');


  })
});