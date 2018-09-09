var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height - 10;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;
var paddleY = canvas.height - paddleHeight;
var leftPressed = false;
var rightPressed = false;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

setInterval(draw, 10); //(funtion, miliseconds)

function draw_ball() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath(); 
}

function draw_paddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = 'black';
    ctx.fill()
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw_ball();
    draw_paddle();

    if (y + dy < 0 + ballRadius ) {  
        dy = -dy;   
    } 
    
    else if(y + dy > canvas.height - ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            dy = -dy;
            alert('GAME OVER');
            document.location.reload();
            }
    }

    if (x + dx < 0 + ballRadius || x + dx > canvas.width - ballRadius) {
        dx = -dx;   
    }
    
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }

    if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}

