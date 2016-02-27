module.exports = function(info) {
  var page = tabris.create('Page', {
    title: info,
    topLevel: false
  });
 
  var webview = tabris.create('WebView', {
    layoutData: {left: 0, top: 0, right: 0, bottom: 0},
    url: 'http://www.devdactic.com'
  }).appendTo(page);
 
  return page;
};