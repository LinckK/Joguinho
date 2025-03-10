/*const canvas = document.getElementById('joguinho');
//inicializar o canva

const ctx = canvas.getContext('2d');
let X = 100
let Y = 100
let lastTime = 0;   
const delay = 100;
let currentDirection = 1        
let X2 = X
let Y2 = Y
let aumento = true
let countdown = 10
let pedaço = []
let morre = false
let macaX = 200
let macaY = 200
let macaComer =  false
let temporizador = 5
let speed = 10000
function cobrinha(){

    
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
    if (!aumento){
        pedaço.shift()
    }
    else{
        aumento = false
    } 
    for (L = 0; L <pedaço.length; L++){
        if (pedaço[L].x == X && pedaço[L].y == Y ){
            morre = true
        }
    }
    if (macaX == X && macaY == Y){
        macaComer = true
    }
    pedaço.push({x: X, y: Y})
    for (i = 0; i < pedaço.length; i++ ){
    ctx.fillRect(pedaço[i].y, pedaço[i].x, 10, 10);
    }


   
}   

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maca (){
    if (macaComer == true){
    macaX = getRandomNumber(0, canvas.width / 10) * 10;
    macaY = getRandomNumber(0, canvas.height / 10) * 10;
    aumento = true
    macaComer = false
    }
    ctx.fillRect(macaX, macaY, 10, 10);

}

//criar a função loop
function loop(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //apagar a tela anterior

    //desenhar novamente
    //atualizar posições
    //chamar o loop denovo
    requestAnimationFrame(loop)
    
    if (X < 0 || X > canvas.height || Y < 0 || Y > canvas.width || morre == true) {
        return;
        currentDirection = 0    
    }
    else {
        maca()
    cobrinha()
    }   
   
   
}
loop()
setInterval(loop, speed)
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