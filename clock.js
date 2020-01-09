const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

update();
//draw();

function draw() {
    // canvas
    ctx.fillStyle='#000';
    ctx.fillRect(0,0,canvas.width, canvas.height);

    // time
    let date = new Date();
    let hr = date.getHours() % 12;
    let min = date.getMinutes();
    let sec = date.getSeconds();
    //console.log(hr+":"+min+":"+sec);
    //ctx.fillStyle = '#274060';
    ctx.fillStyle = '#5B9EE5';
    ctx.font = '48px Varela Round';
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.fillText(hr+":"+formatTime(min)+":"+formatTime(sec), (canvas.width/2) - 100, canvas.height/2);

    // seconds arc
    ctx.strokeStyle = '#1A2E47';
    ctx.lineWidth = 10;
    ctx.beginPath();
    let secondsRange = map(sec, 0, 59, 0, degToRadians(360));
    ctx.arc(canvas.width/2, canvas.height/2, 275, 0, secondsRange);
    ctx.stroke();

    // minutes arc
    //ctx.strokeStyle = '#335C81';
    ctx.strokeStyle = '#274A68';
    ctx.beginPath();
    let minutesRange = map(min, 0, 59, 0, degToRadians(360));
    ctx.arc(canvas.width/2, canvas.height/2, 260, 0, minutesRange);
    ctx.stroke();

    // hours arc
    ctx.strokeStyle = '#65AFFF';
    ctx.beginPath();
    let hoursRange = map(hr%12, 0, 12, 0, degToRadians(360));
    ctx.arc(canvas.width/2, canvas.height/2, 245, 0, hoursRange);
    ctx.stroke();

    
}

function update() {
    draw();
    requestAnimationFrame(update);
}

function map(value, start1, stop1, start2, stop2) {
    const x = (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    return x;
}

function formatTime(time) {
    return ('0' + time).slice(-2);
}

function degToRadians(deg) {
    return (Math.PI/180)*deg;
}