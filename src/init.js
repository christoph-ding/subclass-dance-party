$(document).ready(function() {
  window.dancers = [];

  $(".lineUpButton").on("click", function(event) {
    cleanDancers();
    var leftTop = 300;
    var rightTop = 300;
    var left = 400;
    var right = 1300;

    for (var i = 0; i<window.dancers.length; i++) {
      if (i % 2 === 0) {
        window.dancers[i].lineUp(leftTop, left);
        left -= 20;
        leftTop += 35;
      } else {
        window.dancers[i].lineUp(rightTop, right);
        right += 20;
        rightTop += 35;
      }
    }
  })

  var cleanDancers = function() {
    var toDelete = [];
    //debugger;
    for (var i = 0; i < window.dancers.length; i++) {
      if (!window.dancers[i].$node) {
        toDelete.push(window.dancers[i]);
        //debugger;
      }
    }
    for (var k = 0; k < toDelete.length; k++) {
      //debugger;
      window.dancers.splice(window.dancers.indexOf(toDelete[k]), 1);
    }    
  };

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

     cleanDancers();

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var imageBank = {
      LeftDancer : ["images/ryu-hurricane-ts.gif", "images/bison-flyback.gif","images/guile-cfe-roll.gif", "images/spidey-walk1.gif","images/dhalsim.gif", "images/dhalsim-alphawin.gif"],
      RightDancer : ["images/wolvie-tornado.gif","images/cyclops-running1.gif", "images/blanka-walkback.gif", "images/wolvie-activate.gif", "images/ryu.gif", "images/chunny-ts-birdkick.gif"],
      FadeDancer : [ "images/wolvie-tnt.gif","images/magneto-crouch-fp.gif", "images/captainamerica-thumbsup.gif","images/iron-diz.gif","images/blanka-electric.gif", "images/dr-launch.gif", "images/dr-super.gif"],
      ShuffleDancer : ["images/bison-teleport.gif","images/hulk-spins.gif", "images/magneto-hands-stance.gif", "images/iron-wins.gif", "images/blanka-electric.gif", "images/dr-launch.gif", "images/dr-super.gif", "images/blanka-rolling.gif"],
      StalkerDancer : ["images/col-walk.gif", "images/dualblitz.gif", "images/spidey-standingattax.gif","images/ehonda-100handslap.gif", "images/iron-fly.gif"]
    };
    var randIndex = Math.floor(Math.random() * imageBank[dancerMakerFunctionName].length);
    var imageName = imageBank[dancerMakerFunctionName][randIndex];
    var stalkerTarget = window.dancers[Math.floor(Math.random() * window.dancers.length)];
    console.log($("body").height());
    var dancer = new dancerMakerFunction(
      252 * Math.random() + 348,
      $("body").width() * Math.random(),
      Math.random() * 200 + 100,
      imageName,
      stalkerTarget
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

