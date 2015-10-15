var LeftDancer = function(top, left, timeBetweenSteps, imagePath) {
  //debugger;
  Dancer.call(this, top, left, timeBetweenSteps, imagePath);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

LeftDancer.prototype = Object.create(Dancer.prototype);
LeftDancer.prototype.constructor = LeftDancer;

LeftDancer.prototype.step = function() {
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = Dancer.prototype.step;
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({left: "-=50px"}, 20);
};
