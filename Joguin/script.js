//pegar o elemento canvas pelo id
const canvas = document.getElementById('joguinho')
//inicializar o canvas
const ctx = canvas.getContext('2d')
const gravidade = 1

document.addEventListener('keypress', (e) => {
    if(e.code == 'Space' && personagem.pulando==false) {
        personagem.velocidadey = 21
        personagem.pulando = true
    }
})

const personagem = {
    x: 100,
    y: canvas.height - 50,
    altura: 50,
    largura: 50,
    velocidadey: 0,
    pulando: false,
    imagem_src: 'image.jpg',
    imagem: new Image(50, 50),

}
personagem.imagem.src=personagem.imagem.src
const obstaculo = {
    largura: 50,
    altura: 100,
    velocidade: 10,
    x: 50,
}

function desenharPersonagem () {
    ctx.drawImage(
        personagem.imagem,
        personagem.x, personagem.y,
        personagem.largura,
        personagem.altura,
    )
}

function atualizarPersonagem () {
    if (personagem.pulando == true){
        personagem.velocidadey -= gravidade //diminui a velocidade cada ciclo
        personagem.y -= personagem.velocidadey // muda a posicao y
        if (personagem.y >= canvas.height-50){//implementando conceito chao
            personagem.velocidadey = 0
            personagem.pulando = false
            personagem.y = canvas.height-50//ajuste fino na posicao
        }

    }
}
function atualizarObstaculo(){
    obstaculo.x += obstaculo.velocidade
    if (obstaculo.x >= canvas.width){
      obstaculo.x = 50
      obstaculo.velocidade += 0.5
      let nova_altura = (Math.random()) * 100
      obstaculo.altura = nova_altura
    }
}
function verificarColisao() {
    if (
        personagem.x + personagem.largura >  canvas.width - obstaculo.x && 
        personagem.x < canvas.width - obstaculo.x + obstaculo.largura &&
        personagem.y + personagem.altura >canvas.height - obstaculo.altura){
        return true; // Colisão detectada
    }
    return false; // Sem colisão
}
function desenharObstaculo(){   
    ctx.fillStyle = 'red' //cor
    ctx.fillRect(canvas.width - obstaculo.x, canvas.height - obstaculo.altura, obstaculo.largura, obstaculo.altura)
}
// criar a função loop
function loop () {
    ctx.clearRect(0,0,canvas.width,canvas.height)
   
    if (verificarColisao()) {
        // Se houver colisão, não desenha o personagem nem o obstáculo
       }
    else{
        desenharPersonagem()
        // atualizar posições
        atualizarPersonagem()
    
        desenharObstaculo()
    
        atualizarObstaculo()}

     
    
    requestAnimationFrame(loop)

}

loop()
