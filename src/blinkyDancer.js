var BlinkyDancer = function(top, left, timeBetweenSteps) {
  //debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = Dancer.prototype.step;
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // Moon walking left Dhalsim
  //this.$node.css({left: this.$node.position().left - 22 + "px"});

  // Sliding Dancing Dhalsim
  // this.$node.css({left: this.$node.position().left - 17 + "px"});  

  // Blankca Appears and Fades Out
  // this.$node.fadeToggle("slow");

  // Dr Doom Appears and Fades Out
  //this.$node.fadeToggle("slow");

  // Charging Right Wolverine
  // this.$node.css({left: this.$node.position().left + 22 + "px"});

  // Chun Li Moving Right
  // this.$node.css({left: this.$node.position().left + 22 + "px"});

  // Ryu Moving Right
  // this.$node.css({left: this.$node.position().left + 22 + "px"});
};
