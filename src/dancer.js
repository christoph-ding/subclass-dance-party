// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, imagePath) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img src="' + imagePath + '" height="170" width="170"></span>');
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.lineUpFlag = false;
  var realThis = this;
  //debugger;
  this.$node.mouseover( function() {realThis.$node.children().attr("src", "images/explosion.gif");
    setTimeout(realThis.$node.remove.bind(realThis.$node), 400);
    //debugger;
    delete realThis.$node;
    delete realThis.prototype.$node;
  });
  console.log(this.$node.attr("src"));

  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if (this.$node.position().left < 0) {
    //debugger;
    this.$node.css({left : 1750});
  } else if (this.$node.position().left > 1800) {
    this.$node.css({left : 0})
  }
  if (!this.lineUpFlag && this.$node) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  //debugger;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(top, left) {
  this.lineUpFlag = true;
  this.$node.animate({
   left: left, top: top}, 100);  
};
