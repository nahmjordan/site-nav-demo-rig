var page = require('webpage').create();
var url = 'qlear.build';
var fs = require('fs');

page.open(url, function(status) {
    // list all the a.href links in the hello kitty etsy page
    var links = page.evaluate(function() {
        return [].map.call(document.querySelectorAll('a'), function(link) {
            return link.getAttribute('href');
        });
    });
    fs.writeFile('links.txt', links.join('\n'), (err) => {
      if(err){
        console.log(`file writing error: ${err}`);
      }
    });
    phantom.exit();
});