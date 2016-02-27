module.exports = function() {
  var tab = tabris.create('Tab', {
    title: 'My Second Tab',
    image: {src: 'https://raw.githubusercontent.com/eclipsesource/tabris-js/master/snippets/tabfolder/images/card.png', scale: 2}
  })
 
  tabris.create('Composite', {
    layoutData: {left: 10, top: 10, right: 10, bottom: '70%'},
    background: '#95edbe'
  }).appendTo(tab);
 
  tabris.create('Composite', {
    layoutData: {left: 10, top: ['30%', 10], right: 10, bottom: 10},
    background: '#94ceeb'
  }).appendTo(tab);
 
  var markup = '<b>Hello my Friends</b>, <i>You</i> <small>can</small><del>\'t</del> <big>do many things!</big>';
 
  tabris.create('TextView', {
    layoutData: {left: 20, top: 20, right: 20},
    text: markup,
    markupEnabled: true
  }).appendTo(tab);
 
  var progressBar = tabris.create('ProgressBar', {
    layoutData: {left: 20, right: 20, centerY: 50},
    maximum: 100,
    selection: 0
  }).appendTo(tab);
 
  tabris.create('Button', {
    layoutData: {left: 50, right: 50, centerY: 0},
    text: 'Add'
  }).on('select', function() {
    var selection = progressBar.get('selection') + 10;
    progressBar.set('selection', selection > 100 ? 0 : selection);
  }).appendTo(tab);
 
  return tab;
};