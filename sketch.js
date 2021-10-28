const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var getBackgroundimg;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundimg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(houe>=84){

    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundimg (){
    var response=await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);
    console.log(hour);
    
    
    
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
