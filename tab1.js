module.exports = function() {
  var tab = tabris.create('Tab', {
    title: 'My First Tab',
    image: {src: 'https://raw.githubusercontent.com/eclipsesource/tabris-js/master/snippets/tabfolder/images/cart.png', scale: 2}
  })
 
  var bacon = ['Bacon', 'ipsum', 'dolor', 'amet', 'drumstick', 'brisket', 'meatloaf', 'pork'];
 
  var collectionView = tabris.create('CollectionView', {
    layoutData: {left: 0, top: 0, right: 0, bottom: 0},
    items: bacon,
    itemHeight: 44,
    refreshEnabled: true,
    initializeCell: function(cell) {
      var nameTextView = tabris.create('TextView', {
        layoutData: {left: 30, top: 16, right: 30},
        alignment: 'center'
      }).appendTo(cell);
 
      var composite1 = tabris.create('Composite', {
        layoutData: {left: 0, bottom: 0, right: 0, height: 1},
        background: '#cfcfcf'
      }).appendTo(cell);
 
      cell.on('change:item', function(widget, item) {
        nameTextView.set('text', item);
      });
    }
  }).on('select', function(target, value) {
    // Push the next view onto our stack
    require('./details')(value).open();
  }).on('refresh', function() {
    // Load new data
    loadNewData();
  }).appendTo(tab);
 
  function loadNewData() {
    // Do your requests/loading...
    collectionView.set('refreshIndicator', false);
  }
 
  return tab;
};