// Your test code examples go here. Make sure you console.log() results.

//Class Testing
md.one('div')
md.addClass('.placeholder')
// console.log('before starWars')
md.ajax('http://swapi.co/api/', function(starWars) {
    console.log(starWars)
})
// console.log('after starWars')
md.getProp('.placeholder', 'className')
md.setProp('placeholder', 'hidden', true)

//Homework Testing
//Test #1
//console.log(md.one('span'))
//Test #2
// console.log(md.all('span'))
//Test #3
// console.log(md.remove('.navbar'))
//Test #4
// console.log(md.addClass('.page-header', 'text-center'))
//Test #5
// console.log(md.removeClass('.nav', 'nav-sidebar'))
//console.log(md.hasClass('.nav', 'nav-siderbar'))
//Test #6
// console.log(md.hasClass('ul', 'nav'))
//Test #7
// console.log(md.getAttr('div', 'class'))
//Test #8
// console.log(md.setAttr('.main > h2', 'class', 'text-success'))
//console.log(md.getAttr('.main > h1', 'class'))//Test by using this consol.log
//Test #9
// console.log(md.setHtml('.main > h1', 'Test'))
//Test #10
// console.log(md.getHtml('.main > h1'))
