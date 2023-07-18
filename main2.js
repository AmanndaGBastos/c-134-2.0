//possibilidades de código  
img=""
status=""
var objetos =[]
function preload(){
    img = loadImage('R (2).jpg');
  }
  

  
  function setup() {
    canvas = createCanvas(600, 500);
    video=createCapture(VIDEO)
      canvas.center();
      video.size(600,500)
      video.hide()
     objectDetector=ml5.objectDetector("cocossd",modelLoaded);//importando a biblioteca
     document.getElementBoyId("status").innerHTML="Status: Detectando Personagens"
     
  }
  
  function modelLoaded(){
    console.log("modelo carregado")
    status=true

  }
  
  function draw() {
    image(video, 0, 0, 380, 380);
    if(status!=""){//!= significa diferente
      r=random(255)
      g=random(255)
      b=random(255)
      objectDetector.detect(video,gotResults);  //utilizando a função da biblioteca importada da linha 13
      for(i=0;i<objetos.length;i++){
        document.getElementById("status").innerHTML="Status: Personagem Detectado";
        document.getElementById("numberofObjecs").innerHTML="Quantidade de objetos detectados"++objects.length
        fill(r,g,b)
        var porcentagem = floor(objetos[i].confidence * 100)
        Text(objetos[i].label + " " + porcentagem + "%", objetos[i].x + 15, objetos[i].y + 15)
        noFill()
        stroke(r,g,b)
        rect(objetos[i].x, objetos[i].y,
             objetos[i].width,
             objetos[i].height)
      }  
    }
    
  }
  function gotResults(error, results){
    if (error) {
      console.log(error)
    }  
      console.log(results)
    objetos=results
  }
  function start(){}
  