var canvas,drawing=[],db_drawing,button,database;


function setup(){
    //this command creates the canvas for the code
    canvas = createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    button = createButton("Eraser");
    button.position(displayWidth-50,displayHeight-50);
    
}
function draw(){
    
    //background(255);
    button.mousePressed(()=>{
        background(255);
        console.log("Erase");
        db_drawing = [];
        database.ref('drawing/').set({
            "point": []
        })
    });
    stroke(0);
    strokeWeight(4);
    fill(0)
    

}
function readData(){
    database.ref('drawing/point').on('value',(data)=>{
        db_drawing = data.val();
    })
    //console.log(db_drawing)
}

function mouseDragged(){
    var p = {
        x: mouseX,
        y: mouseY
    }
    drawing.push(p);
    
    readData();
    
    for(var i = 0;i < drawing.length; i++ ){
        console.log(drawing[i].x,drawing[i].y)
        point(drawing[i].x,drawing[i].y);
    }
}