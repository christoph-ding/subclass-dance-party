// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  // this.$node = $('<span class="dancer"><img src="images/ddhalsim.gif" height="110" width="110"></span>');
  // this.$node = $('<span class="dancer"><img src="images/dhalsim-alphawin.gif" height="110" width="110"></span>');
  // this.$node = $('<span class="dancer"><img src="images/blanka-electric.gif" height="110" width="110"></span>');
  // this.$node = $('<span class="dancer"><img src="images/dr-launch.gif" height="110" width="110"></span>');
   this.$node = $('<span class="dancer"><img src="images/wolvie-activate.gif" height="110" width="110"></span>');
  // this.$node = $('<span class="dancer"><img src="images/chunny-ts-birdkick.gif" height="110" width="110"></span>');
  // this.$node = $('<span class="dancer"><img src="images/ryu.gif" height="110" width="110"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // debugger;
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
