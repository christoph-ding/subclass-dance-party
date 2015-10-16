var StalkerDancer = function(top, left, timeBetweenSteps, imagePath, stalkerTarget) {
  //debugger;
  this.stalkerTarget = stalkerTarget;
  Dancer.call(this, top, left, timeBetweenSteps, imagePath);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.stalkerTarget = stalkerTarget;
  //debugger;
};

StalkerDancer.prototype = Object.create(Dancer.prototype);
StalkerDancer.prototype.constructor = StalkerDancer;

StalkerDancer.prototype.step = function() {
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = Dancer.prototype.step;
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var realThis = this;
  //debugger;
  if (realThis.stalkerTarget.$node) {
    this.$node.animate({left: realThis.stalkerTarget.$node.position().left, 
                        top: realThis.stalkerTarget.$node.position().top
    }, 300);
  }
};
