// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })
  // one(): Find one matching element using any CSS selector
  describe('md.one()', function() {
    it('should return an object', function() {
      expect(typeof md.one('div')).to.equal('object')
    })
  })
  // all(): Find all matching elements using any CSS selector
  describe('md.all()', function() {
    it('should return all objects', function() {
      expect(md.all('div').length).to.be.equal(14)
    })
  })
  // remove(): Remove an element
  describe('md.remove()', function() {
    it('should remove an element', function() {
      md.remove('h4')
      expect(md.all('h4').length).to.be.equal(3)
    })
  })
  // addClass(): Add a CSS class to an element
  describe('md.addClass()', function() {
    it('should add a CSS class', function() {
      md.addClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.true
    })
  })
  // removeClass(): Remove a CSS class from an element
  describe('md.removeClass()', function() {
    it('should remove a CSS class', function() {
      md.removeClass('body', 'selector')
      expect(document.body.classList.contains('selector')).to.be.false
    })
  })
  // hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
  describe('md.hasClass()', function() {
    it('should return true if an element contains a CSS class', function() {
      expect(md.hasClass('nav','navbar')).to.be.true
    })
  })
  // getAttr(): Get an HTML attribute from an element
  describe('md.getAttr()', function() {
    it('should return width of img tag as 200', function() {
      expect(md.getAttr('img', 'width')).to.equal('200')
    })
  })
  // setAttr(): Set an HTML attribute on an element
  describe('md.setAttr()', function() {
    it('should set img width to 500', function() {
      md.setAttr('img', 'width', '500')
      expect(document.querySelector('img').getAttribute('width')).to.equal('500')
      // expect(md.getAttr('img', 'width')).to.equal('500')
    })
  })
  // setHTML(): Set the innerHTML of an element
  describe('md.setHtml()', function() {
    it('should set the innerHTML of an element', function() {
      md.setHtml('li', 'text')
      expect(md.one('li').innerHTML).to.be.equal('text')
    })
  })
  // getHTML(): Get the innerHTML of an element
  describe('md.getHtml()', function() {
    it('should get the innerHTML of an element', function() {
      expect(md.getHtml('li')).to.be.equal('text')
    })
  })
  //flipPage
  // describe('md.flipPage()', function() {
  //   it('should flip the page upside down', function() {
  //       // add your setup code here
  //       md.flipPage()
  //       expect(document.body.style.transform).to.equal('rotate(180deg)')
  //   })
  // })
    // describe('md.colorPage()', function() {
    //   it('should color the page green', function() {
    //       // add your setup code here
    //       md.colorPage('blue')
    //       expect(document.body.style.backgroundColor).to.equal('blue')
    //   })
    // })

    //ajax
    describe('md.ajax()', function() {
      it('should pull in data from Swapi', function(responseData) {
        md.ajax('http://swapi.co/api/planets/', function() {
          responseData()
        })
      })
    })
})
