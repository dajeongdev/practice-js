const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth /2,
    y: innerHeight /2,
}

const colors = [
    '#2185C5', 
    '#7ECEFD', 
    '#FF7F66'
];

// Event Listeners
canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

canvas.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

// Utility functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle), 
    };

    return rotatedVelocities;
}

/* Swaps out two colliding particles' x and y velocities after running through 
an elastic collision reaction equation 
*/
function resolveCollision(particle, otheorParticle) {
    const xVelocityDiff = particle.velocity.x - otheorParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otheorParticle.velocity.y;

    const xDist = otheorParticle.x - particle.x;
    const yDist = otheorParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist > 0) {

        // Grab anmgle between the two colliding particles
        const angle = -Math.atan2(otheorParticle.y - particle.y, otheorParticle.x - particle.x);

        // Store mass invar for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otheorParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otheorParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 / m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis before to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities 
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otheorParticle.velocity.x = vFinal2.x;
        otheorParticle.velocity.y = vFinal2.y;
    }
}

// Objects
class Particle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5,
        },
        this.radius = radius;
        this.color = randomColor(colors);
        this.mass = 1;
        this.opacity = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();
    }

    update = particles => {
        this.draw();

        for (let i = 0; i < particles.length; i++) {
            if (this === particles[i]) continue;
            if (distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
                resolveCollision(this, particles[i]);
            }
        }

        if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
            this.velocity.x = -this.velocity.x;
        }

        if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
            this.velocity.y = -this.velocity.y;
        }

        // mouse collision detection
        if (distance(mouse.x, mouse.y, this.x, this.y) < 120 && this.opacity < 0.2) {
            this.opacity += 0.02;
        } else if (this.opacity > 0) {
            this.opacity -= 0.02;
            this.opacity = Math.max(0, this.opacity);
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

// Implementation
let particles;
function init() {
    particles = [];

    for (let i = 0; i < 300; i++) {
        const radius = 15;
        let x = randomIntFromRange(radius, canvas.width - radius);
        let y = randomIntFromRange(radius, canvas.height - radius);
        const color = 'blue';

        if (i !== 0) {
            for (let j = 0; j < particles.length; j++) {
                if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                    x = randomIntFromRange(radius, canvas.width - radius);
                    y = randomIntFromRange(radius, canvas.height - radius);
                    j = -1;
                }
            }
        }

        particles.push(new Particle(x, y, radius, color));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle) => {
        particle.update(particles);
    });
}

init();
animate();