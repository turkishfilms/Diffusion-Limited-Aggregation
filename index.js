/*
Hpwdy

Diffusion LIMITED AGregation


TODO:
PAtciles
*/


const numberOfParticles = 2000,
    delay = 6000,
    resetTimer = 250

let w = 0,
    h = 0,
    particles = [],
    particleColor = 20,
    run = true,
    f = 0,
    qt

function setup() {
    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h)
    background(0)
    noStroke()
    particles.push(new Particle(0,h/2,6,0,20,w,h))
    for (let i = 0; i < numberOfParticles-2; i++) particles.push(new Particle(null, null, null, 0, 10, w, h))
    let p = new Particle(w / 2, h / 2, 0, 1, 10, w, h)
    p.shouldShow = true
    p.show()
    particles.push(p)
}

function draw() {
    // background(0)
    if (run) {
        qt = new Quadtree()
        particles.forEach(e => qt.insert(e))
    
        // qt.show()
        particles.forEach(e => e.go())
        f++
    }
    if (f == resetTimer) {
        run = false
        f = 0
        particles = []
        particleColor = 20
        for (let i = 0; i < numberOfParticles; i++) particles.push(new Particle(null, null, null, 0, 10, w, h))
        particles.push(new Particle(w / 2, h / 2, 0, 1, 10, w, h))
        setTimeout(() => {
            background(0)
            run = true
        }, delay)
    }
}