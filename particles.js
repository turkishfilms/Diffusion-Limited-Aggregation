class Particle {
    constructor(x, y, v, g, r, w, h) {
        this.x = x ?? random(w)
        this.y = y ?? random(h)
        this.v = v ?? 8
        this.g = g
        this.r = r
        this.o = random(TWO_PI)
        this.thresholdDist = this.r
        this.w = w
        this.h = h
        this.color = 20
        this.shouldShow = false
    }

    show() {
        fill(this.color)
        // fill(255)
        ellipse(this.x, this.y, this.r, this.r)
    }

    go() {


        if (!this.shouldShow) {
            this.color = particleColor
            this.x = (this.x + this.v * cos(this.o) + this.w) % this.w
            this.y = (this.y + this.v * sin(this.o) + this.h) % this.h

            for (let i = 0; i < particles.length; i++) {

                if (this == particles[i] || this.g == particles[i].g) continue
                if (dist(this.x, this.y, particles[i].x, particles[i].y) < this.thresholdDist) {
                    this.g = particles[i].g
                    this.v = 0
                    this.shouldShow = true
                    particleColor += 0.3
                    this.show()
                    break
                }
            }
        }
    }

    gov2() {
        if (this.shouldShow) return

        this.color = particleColor
        this.x = (this.x + this.v * cos(this.o) + this.w) % this.w
        this.y = (this.y + this.v * sin(this.o) + this.h) % this.h
        let particles = qt.ask(this, [])

        for (let i = 0; i < particles.length; i++) {
            // if(particles[0] == this && i != 0) console.log("p",particles[i].g)
            if (particles[i].g != 1) continue
            if (dist(this.x, this.y, particles[i].x, particles[i].y) < this.r) {
                this.g = particles[i].g
                this.v = 0
                this.shouldShow = true
                particleColor += 0.3
                this.show()
                break
            }

        }
    }

    go2() {
        this.show()
        // if (this == particles[particles.length-1]) console.log(this.g)
        // if (this == particles[0]) console.log(this.g)
        if (this.shouldShow) return

        this.color = particleColor
        this.x = (this.x + this.v * cos(this.o) + this.w) % this.w
        this.y = (this.y + this.v * sin(this.o) + this.h) % this.h
        let n = qt.ask(this, [])
        // if (n.length == 1) return
        for (let i = 0; i < n.length; i++) {
            // console.log(this)/
            // if (this == particles[particles.length-1]) console.log(n.length,n[i].g, this.g)
            // if (this == particles[0]) console.log(n.length,n[i].g, this.g)

            if (n[i].g == 1) {
                console.log("y")
                this.g = n[i].g
                this.v = 0
                this.shouldShow = true
                particleColor += 0.3
                this.show()
                break
            }
        }
    }
}