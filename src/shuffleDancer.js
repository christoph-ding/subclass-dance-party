var ShuffleDancer = function(top, left, timeBetweenSteps, imagePath) {
  //debugger;
  Dancer.call(this, top, left, timeBetweenSteps, imagePath);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

ShuffleDancer.prototype = Object.create(Dancer.prototype);
ShuffleDancer.prototype.constructor = ShuffleDancer;

ShuffleDancer.prototype.step = function() {
  // debugger;
  // // call the old version of step at the beginning of any call to this new version of step
  // var oldStep = Dancer.prototype.step;
  // oldStep.call(this);
  var realthis = this;
  var goLeft = function() {
    if (!realthis.lineUpFlag) {
      realthis.$node.animate({left: "+=500"}, 1000, goRight);
    }
  }
  var goRight = function() {
    if (!realthis.lineUpFlag) {
      realthis.$node.animate({left: "-=500"}, 1000, goLeft);
    }
  }
  goLeft();
};
