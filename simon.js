$(document).ready(function() {
  'use strict'
  var game  ={
    halSequence: [],
    playerSequence: [],
    round: 1,
    active: true;

    // colorChoice: {1:'red', 2: 'blue', 3: 'green', 4: 'yellow'}
    // active: false,
  }
  //function init is to initiate the game by calling halStart that resets all the
  //base parameters
  init: function() {
    var that = this;
     $('.start').on('click', function() {
       that.halStart();
     });
  },

  halStart: function(){
    this.halSequence = [];
    this.playerSequence = [];
    this.round = 1;
    this.active = true;
// this hides the lossing message
  $('p[data-action="lose"]').hide();
  //calls the new round function
  this.newRound();

},
//add a new color sequence and animate's it to the user
newRound: function(e) {
  //shift() will remove the [0] element from the playerSequence
  var desiredReply = this.playerSequence.shift();
  var actualReply = $(e.target).data('tile');
  this.active = (disiredResponse === actualResponse);
  this.halWins();
},

halWins: function() {
  if (this.playSequence.length === 0 && this.active) {
    this.deactivateHalBoard();
    this.newRound();

  } else if (!this.active){
    this.deactivateHalBoard();
    this.endGame();
  }
},
  endGame: function() {
    //tells the player they lost and resets "round" text to 0
      $('p[data-action="lose"]').show();
      $($('[data-round]').get(0)).text('0');
  },

  /*----------------- helper functions -------------*/
//prevents user from playing
deactivateHalBoard(): function() {
if(this.mode !== 'freeboard') {
  $('hal')
    .off('click','[data-title]')
    .off('mousedown','[data-title]')
    .off('mouseup','[data-title]');

  	$('[data-tile]').removeClass('hoverable');
}
}

  // var $active = false;
  //   event.preventDefault();
  //   console.log("start game");
  //   $active = true;
  //   checkStatus();
  // });
  //
  // function checkStatus(){
  //   if($active){
  //     console.log("You can start to play")
  //
  //   }
  //
  // }
  //
  //
  // // var mathRandom = Math.random()
  // // if (mathRandom  {
  //
  // function halPick(){
  //
  //   for(i=0; i < round; i++) {
  //   this.arrHal.push(Math.floor(Math.random()*4)+1);


    // }

    //   halPick()
    // };
    // console.log(halPick());
  })
  // });

  //step one Check to see what state the game is in
  // function stateOfPlay() {

  // };

  // first thing is to make a game object
  //     var game ={
  //       level:1,
  //       turn:0,
  //       difficulty:0,
  //       score:0,
  //       active:false,
  //       handler:false,
  //       shape:'.shape'
  //       //need two arrays one for computer one for user
  //       computerSequence: [];
  //       playerSequence: [],
  //
  //     }
  //   }
  //
  //   })
  //
  //
  // }



  //have to have a way the user knows the computer has done something
  //have to have a way to know what state the game is pushed button or not

  //make a function to make the computer randomly select a pad


  // after selection is made put computer choice in the computerSequence array;


  //selection will be displayed for the player.

  //now the user makes a choice click and the that is pushed into the playerSequence array;

  //now use a switch statment to determine if the computerSequence and playerSequence are
  //equivalent.
  //if the two are equivalent then return to the randomizePad function to add to the index array
  // to computer
