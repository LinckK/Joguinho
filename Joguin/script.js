//oegar o elemento canvas pelo id
const canvas = document.getElementById('joguinho');
//inicializar o canva
const ctx = canvas.getContext('2d');

let x =  100
let y = canvas.height - 50
let width = 50
let height = 50
let pulando = false
let yspeed = 0

let gravidade = 1


document.addEventListener('keydown', (event) => {
    if (event.key === " " && !pulando) {
        yspeed = 15;
        pulando = true;
    }
})

function desenho() {
    ctx.fillStyle = 'Black';
    ctx.fillRect(x, y, width, height);
}

function pulinho() {
    if (!pulando) return;

    if (y > canvas.height - height) {
        pulando = false;
        y = canvas.height - height;
        return;
    }

    yspeed -= gravidade;
    y -= yspeed; 
}

function update() {
    pulinho();
    y = Math.max(0, y);
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenho();
    update();
    requestAnimationFrame(loop);
}

loop();