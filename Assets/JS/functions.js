//Global variables
var wins=0;
var loses=0;
var score=0;
var yourscore=0;
var crystalsvalue=[];

//Hide the buttons
$('.block').hide();

//Buttons play and reset
$('#playbtn').click(function(){
    play();
});

$('#resetbtn').click(function(){
    reset();
    $('.block').hide();
});

//functions of the game
function play(){
    $('.block').show();
    keepplaying();
    score= Math.floor(Math.random()*(120-19)+19);
    $('#Score').text(score);
    for (i=0; i<4; i++){
        crystalsvalue[i]= Math.floor(Math.random()*(12-1)+1);
    }
    console.log(crystalsvalue);
}

function keepplaying(){
    score=0;
    yourscore=0;
    crystalsvalue=[];
    $('#Score').text('0');
    $('#yourScore').text('0');
}

function reset(){
    score=0;
    yourscore=0;
    crystalsvalue=[];
    $('#Score').text('0');
    $('#yourScore').text('0');
    $('#win').text('0');
    $('#lose').text('0');
}

function results(){
    if(yourscore === score){
        wins++;
        $('#win').text(wins);
        $('.block').hide();
    }else if(yourscore>score){
        loses++;
        $('#lose').text(loses);
        $('.block').hide();
    }
}

//Event of the crystals
$('.block').click(function(e){
    btnid=this.id;
    yourscore+= crystalsvalue[btnid];
    $('#yourScore').text(yourscore);
    results();
})