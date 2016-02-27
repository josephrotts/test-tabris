var page = tabris.create('Page', {
  title: 'My App',
  topLevel: true
});
 
var tabFolder = tabris.create('TabFolder', {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0},
  paging: true
}).appendTo(page);
 
// 2 options to include our tabs
var tab1 = require('./tab1')();
tab1.appendTo(tabFolder);
// The short form
require('./tab2')().appendTo(tabFolder);
 
// Set the initial title
page.set('title', tab1.get('title'));
 
// Open the created page
page.open();
 
// Update the title on tab change
tabFolder.on('change:selection', function(widget, tab) {
  page.set('title', tab.get('title'));
});