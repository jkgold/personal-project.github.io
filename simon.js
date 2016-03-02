
define(['jquery'], function($))
  'use strict';
// var Hal is the variable that has the enterty of the code init
//set up initial variables an array to contain hals choice HalSequence,
//player sequence playerMatch, initation of the rounds at 0.set the variable
//active to true and mode normal
  var Hal = {
    halSequence: [],
    playerMatch: [],
    round: 0,
    active: true,
    mode: 'normal',

//This function will initialize the game by clicking the Press to play
//button it is called by the attribute in brackets clicking
// start will call the startGame function by setting a local variable
// that to this will allow for less confusion when initializing the
// game with this
  init: function(){
    var that = this;
     $('[data-action.start]').on('click', function() {
       console.log("hello World");
       that.startGame();
     });
     $('input[name=mode]').on('change', function(e) {
 				that.changeMode(e);
 			});
 		},
// the starGame function sets the  initial parameters for
//game resets the empty arrays and round starts at 0 makes
//sure active is true

  startGame: function(){
       this.halSequence = [];
       this.playerSequence = [];
       this.round = 0;
       this.active = true;
       $('p[data-action="lose"]').hide();
     			this.newRound();
     		},
//This function new round does a jquery search for the
//data-round attribute the initial number is always 0 and the
//++this.roundwill add one to the roundwill

//the this.halSequence is called and we want to have Hal
//make a choice this is accomplished by using math random
//function to make a choice between the div's and pushes
//and stores it into the array.
// the playerMatch is then set equal to the halSequence with the index [0
//] in the array sliced out  then the this.halSequence is called by the animate function

  newRound: function() {
       $('[data-round]').text(++this.round);
        this.halSequence.push(this.randomNumber());
        this.playerSequence = this.halSequence.slice(0);
        this.animate(this.halSequence);
      },

      registerClick: function(e) {
        var desiredResponse = this.playerSequence.shift();
        var actualResponse =$(e.target).data('pad');
        this.active = (desiredResponse === actualResponse);
        this.checkLose();
      },
      checkLose: function(){
        if (this.copy.length === 0 && this.active) {
          this.deactivatGameHal();
          this.newRound();
        } else if (!this.active) {
          this.deactivatGameHal();
          this.endGame();
        }
      },

      endGame: function() {
        $('p[data-action=lose]').show();
        $($('[data-round]').get(0)).text('0');
      },

// }

//add a new color sequence and animate's it to the user

// helperfunctions

var randomNumber = function() {
  //return random between 1 and four
  return Math.floor((Math.random()*4)+1);
  }
};

changeMode: function(e) {
  this.mode = e.target.value;
},





// ------------ HelperFunctions----------------
//animate function is passed the halSequence array
// created a variable i set it equal to 0 and that var
//equal to this avoid confussion
//set new variable interval = to setinterval(function())
// that.playsound will call the playsound function on the
// specified index of haSequence

activateGameHal : function() {
  var that = this;
  $('.hal')
  .on('click', '[data-pad]', function(e) {
    that.activateGameHal(e);
  })

  .on('mousedown', '[data-pad]', function(){
    $(this).addClass('active');
    that.playSound((this).data('pad'));
  })
  .on('mouseup', '[data-pad]' function(){
    $(this).removeClass('active');
  });

},

deactivatGameHal: function(){
  if (this.mode !=='free-board'){
    $('.hal')
    .off('click', '[data-pad]');
    .off('mousedown', '[data-pad]');
    .off('mouseup', '[data-pad]');

  }
},
animate: function(halSequence) {
  var i = 0;
  var that = this;
  var interval = setInterval(function() {
    that.playSound(halSequence[i]);
    that.lightUp(sequence[i]);

    i++;
    //if the index[] is greater then or equal to halSequence.lenght
    //then you know that the last part in the sequence has already run and you want
    //to clear out th array? 600 is for speed of frame
    if (i >= sequence.length) {
      clearInterval(interval);
      that.activateHalBoard();
    }
  }, 600);
},
//light up function uses the class pad
lightUp: function(pad) {
   if (this.mode !== 'sound-only')
  var $pad = $('[data-pad=' + pad + ']').addClass('lit');
  window.setTimeOut('lit');
      $tile.removeClass('lit');
    }, 300);
  }
},

playSound: function(pad) {
  if (this.mode !== 'light-only') {
    var audio = $('<audio autoplay><audio>')
    audio.append('<source src="sounds/' + tile + '.ogg" type="audio/ogg" />');
    audio.append('<source src="sounds/' + tile + '.mp3" type="audio/mp3" />');
    $('[data-action=sound]').html(audio);
  }
};
return Hal;

});









// this hides the lossing message
  // $('p[data-action="lose"]').hide();
  //calls the new round function
  // this.newRound();

// }

// halWins: function() {
//   if (this.playSequence.length === 0 && this.active) {
//     this.deactivateHalBoard();
//     this.newRound();
//
//   } else if (!this.active){
//     this.deactivateHalBoard();
//     this.endGame();
//   }
// },
//   endGame: function() {
//     //tells the player they lost and resets "round" text to 0
//       $('p[data-action="lose"]').show();
//       $($('[data-round]').get(0)).text('0');
//   },
//
//   /*----------------- helper functions -------------*/
// //prevents user from playing
// deactivateHalBoard(): function() {
// if(this.mode !== 'freeboard') {
//   $('hal')
//     .off('click','[data-title]')
//     .off('mousedown','[data-title]')
//     .off('mouseup','[data-title]');
//
//   	$('[data-tile]').removeClass('hoverable');
 // };
// });
