/*
let X = 100
let Y = 100
let lastTime = 0;   
const delay = 100;
let currentDirection = 0    
let X2 = X
let Y2 = Y
let aumento = false
let countdown = 50
let pedaço = []

function desenhar(){

    
    if (currentDirection === 1) {
        Y += 10
        
        
    }
    if (currentDirection === 2) {
        Y -= 10
        
    }
    if (currentDirection === 3) {
        X -= 10
    }
    if (currentDirection === 4) {
        X += 10
        
    }
    if (countdown != 0 ){
        countdown--
    }
    else{
        aumento = true
        countdown = 50
    }
    if (!aumento){
        pedaço.shift()
    }
    else{
        aumento = false
    } 
    pedaço.push({x: X, y: Y})
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < pedaço.length; i++ ){
    ctx.fillRect(pedaço[i].y, pedaço[i].x, 10, 10);
    }



}   

//criar a função loop
function loop(){
    
    
    
    //apagar a tela anterior
    
    //desenhar novamente
    //atualizar posições
    //chamar o loop denovo
    requestAnimationFrame(loop)
    if (X < 0 || X > canvas.length || Y < 0 || Y > canvas.width ){
        return;
        ctx.fillRect(0, 0, 1000, 1000)
    }
    else {
        setTimeout( desenhar(), 10000);
    }
}
loop()

addEventListener ('keydown', (event) => {
    if(event.key === 'ArrowRight'){
       currentDirection = 1
    }
    if(event.key === 'ArrowLeft'){
      
        currentDirection = 2
    }
    if(event.key === 'ArrowUp'){
       
        currentDirection = 3
    }
    if(event.key === 'ArrowDown'){
        
        currentDirection = 4
    }
})*/ 