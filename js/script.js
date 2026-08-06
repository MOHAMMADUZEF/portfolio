console.log("Portfolio Started");
window.history.scrollRestoration = "manual";
window.onload = function () {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(function () {

        document.getElementById("loader").style.display = "none";
    }, 3000);
    new Typed("#typing", {

    strings: [

        "Python Developer",

        "AI Developer",

        "Full Stack Developer",

        "Automation Engineer"
    ],

    typeSpeed: 70,

    backSpeed: 40,

    backDelay: 1500,

    loop: true
    

});
gsap.to(".python",{

    width:"95%",

    duration:2,

    scrollTrigger:"#skills"

});

gsap.to(".html",{

    width:"90%",

    duration:2,

    scrollTrigger:"#skills"

});

gsap.to(".css",{

    width:"88%",

    duration:2,

    scrollTrigger:"#skills"

});

gsap.to(".js",{

    width:"80%",

    duration:2,

    scrollTrigger:"#skills"

});

gsap.to(".flask",{

    width:"90%",

    duration:2,

    scrollTrigger:"#skills"

});

gsap.to(".git",{

    width:"85%",

    duration:2,

    scrollTrigger:"#skills"

});
gsap.from(".project-card", {

    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        toggleActions: "play none none none"
    },

    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"

});
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
    const fontSize = 18;

    const columns = Math.floor(canvas.width / fontSize);

    const drops = [];

    for (let i = 0; i < columns; i++) {

        drops[i] = 1;

    }

    function draw() {

        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff66";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {

            const text =
                letters[Math.floor(Math.random() * letters.length)];

            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (
                drops[i] * fontSize > canvas.height &&
                Math.random() > 0.98
            ) {

                drops[i] = 0;

            }

            drops[i]++;

        }

    }

    setInterval(draw, 35);
    gsap.to("#hero-content", {

        opacity: 1,
        duration: 1,
        delay: 3

    });

    gsap.from("#name",{

    x:-600,

    opacity:0,

    duration:1.2,

    delay:3.2,

    ease:"power4.out"

});

    gsap.from(".developer", {

        x: 500,
        opacity: 0,
        duration: 1.5,
        delay: 3,
        ease: "power4.out"

    });

    gsap.to("#rope", {

        scaleX: 1,
        duration: 0.5,
        delay: 3.5,
        ease: "power2.out"

    });

    gsap.to(".right-arm", {

        rotation: -35,
        duration: 0.4,
        delay: 3.5

    });

    gsap.to(".left h2", {

        opacity: 1,
        y: -10,
        duration: 1,
        delay: 4

    });

    gsap.to(".buttons", {

        opacity: 1,
        y: -20,
        duration: 0.8,
        delay: 4.3

    });

};