const frames = [
    "imagenes/llama1.png",
    "imagenes/llama2.png",
    "imagenes/llama3.png",
    "imagenes/llama4.png",
    "imagenes/llama5.png"
];

const velaFrames = [
    "imagenes/vela1.png",
    "imagenes/vela2.png",
    "imagenes/vela3.png",
    "imagenes/vela4.png",
    "imagenes/vela5.png"
    
];

const apagadoFrames = [
    "imagenes/apagado1.png",
    "imagenes/apagado2.png",
    "imagenes/apagado3.png",
    "imagenes/apagado4.png",
    "imagenes/apagado5.png",
    "imagenes/apagado6.png",
    "imagenes/apagado7.png",
    "imagenes/apagado8.png",
    "imagenes/apagado9.png",
    "imagenes/apagado10.png",
    "imagenes/apagado11.png"
];

const memoryData = {
    "conocer": {
        title: "el dia que te conoci",
        text: "aun recuerdo con mucha emocion la primera vez que te hable, fue muy bonito la primera impresion como eras muy divertida y hablabas de las cosas que te gustan, siempre esperaba que me siguieras hablando y que pudieramos estar mas seguido, ahora no puedo estar sin ti 1 dia",
        
    },
    "llamada1": {
        title: "la primera vez que me llamaste",
        text: "fue muy bonito hablar contigo la priemra vez, aun recuerdo como estaba nervioso aun y me ponia mas nervioso que no me escucharas bien, cada vez que me hablas solo me dan ganas de seguir escuchandote tu hermosa voz, me gusta mucho hablar tonterias solamente para hacerte contestar y seguir escuchando tu hermosa voz y estaria todo el dia escuchandote de hablar de cualquier cosa",
        
    },
    "novios": {
        title: "el primer aniversario",
        text: "nuestro primer aniversario juntitos con la niña que mas amo y con la que mas deseo estar, quiero estar mas años contigo y deseo mucho estar contigo aun que sea 1 dia sera el dia mas feliz de mi vida con la niña que mas me hace feliz",
        
    },

    "primerJuego": {
        title: "la primera vez que jugamos juntos",
        text: "fue muy divertido ver como aprendias a jugar roblox y te divertias conmigo me hace sentir muy bien, me encanta pasar tiempo contigo, es una de las cosas favoritas que me gusta hacer contigo, cualquier cosa contigo es divertido siempre me haces reir mucho y es muy tierno ver como mejoras al jugar y aprendes muy rapido, no me gusta jugar con mis amigos, jugar contigo lo hace mucho mas divertido"
    },
    "navidad": {
        title: "nuestra primera navidad 🎄",
        text: "fue muy lindo pasar navidad contigo todos los dias, me encanta mucho estar contigo todo el dia, navidad es una de tus fechas favoritas y quiero pasar mas navidades contigo me hace muy feliz, ademas ya quiero pasar una navidad contigo para poder darte todo el amor que te mereces"
    },
    "cumpleanios": {
        title: " nuestro priemr cumpleaños juntos",
        text: "nuestro primer cumpleaños juntos fue muy lindo, ademas que cumplimos casi los mismo dias, nunca celebre mi cumpleaños con nadie ni mi familia ni amigos ni nada, contigo fue muy especial para mi era un dia mas, contigo me senti acompañado y muy querido por ti, ademas que pasamos casi todas las vacaciones juntos fue muy bonito, seria mas bonito cuando me junte contigo a celebrar nuestros cumpleaños"
    },
};

const allMemoryIds = Object.keys(memoryData);
const visitedMemories = new Set(); 
const closeBtn = document.getElementById('close-modal');

function checkCompletion() {
    
    if (visitedMemories.size === allMemoryIds.length) {
        
        const modal = document.getElementById('memory-modal');
        if (modal) {
             modal.classList.add('hidden-modal');
        }
        
        endSequence();
    }
}

function endSequence() {
    
    const galaxyContent = document.getElementById('new-content'); 
    const finalImageContainer = document.getElementById('final-image-container');

    if (galaxyContent) {
        
        galaxyContent.classList.add('fly-away'); 
    }

    setTimeout(() => {
        if (finalImageContainer) {
            finalImageContainer.classList.remove('hidden-final-phase');
            finalImageContainer.classList.add('show-final-phase');
        }
    }, 100); 

}

function startApagarVelaAnimation() {
    
    if (velaAnimationInterval) {
        clearInterval(velaAnimationInterval);
    }
    
    if (typed2) {
        typed2.destroy();
        document.getElementById('typed-output').innerHTML = ''; 
    }

    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        optionsContainer.classList.remove('visible'); 
        setTimeout(() => {
             optionsContainer.classList.add('hidden'); 
        }, 1500); 
    }
    
    const velaElement = document.getElementById('vela');
    if (!velaElement) return;

    let currentApagadoFrame = 0;
    
    const apagadoInterval = setInterval(() => {
        if (currentApagadoFrame < apagadoFrames.length) {
            velaElement.src = apagadoFrames[currentApagadoFrame];
            currentApagadoFrame++;
        } 
        
        else {
            clearInterval(apagadoInterval);
            
            new Typed('#typed-output', {
                strings: ["FELIZ ANIVERSARIOOOO"],
                typeSpeed: 50,
                showCursor: false,
                fadeOut: true,
                fadeOutDelay: 1500, 
                
                onComplete: function() {
                    const velaElement = document.getElementById('vela');
                    const cartelWrapper = document.getElementById('cartel-wrapper'); 

                    setTimeout(() => {
                        
                        velaElement.classList.add('disappear-final'); 
                        
                        cartelWrapper.classList.add('disappear-cartel'); 
                        
                        setTimeout(() => {
                            velaElement.style.display = 'none';
                            cartelWrapper.style.display = 'none'; 

                            startFireworks();

                        }, 2000); 
                        
                    }, 500); 
                }
            });
        }
    }, 450); 
}

const strings_no_apagar = [
    "¿Seguro que no quieres un deseo?",
    "La vela brilla por ti, APAGALA",
    "No pasa nada, yo espero...",
    "ESTE ES UN JUEGO DE DOS",
    "ESFUERZATE POR APAGAR LA VELA",
    "Está bien, sigamos bailando",
    "El fuego es eterno, como nuestro amor",
    "APAGA LA VELAAAA",
    "gabicita mala",
    "porque sigues dandole?",
    "apaga la velita, malvada"
];
let currentNoApagarIndex = 0; 
let typed2; 

let velaAnimationInterval;

let currentFrame = 0;
const llama = document.getElementById("llama");

function startTyped2Loop() {
    typed2 = new Typed('#typed-output', {
        strings: strings2, 
        typeSpeed: 50,
        backSpeed: 25,
        loop: true, 
        showCursor: true,
    });
}

const llamaAnimationInterval = setInterval(() => { 
    currentFrame = (currentFrame + 1) % frames.length;
    llama.src = frames[currentFrame];
}, 150);

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    if (!heartsContainer) return; 
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    const leftPosition = Math.random() * 150; 
    heart.style.left = `${leftPosition}px`;
    
    const duration = 4 + Math.random() * 2; 
    heart.style.animationDuration = `${duration}s`;
    
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 400);

const heartInterval = setInterval(createHeart, 300); 

function showFinalImage() {
    
    const galaxyContent = document.getElementById('new-content');
    galaxyContent.classList.add('fly-away');

    const finalImageContainer = document.getElementById('final-image-container');
    
    setTimeout(() => {
        
        finalImageContainer.classList.add('show-final-phase');
    }, 500); 

}

function checkCompletion() {
    if (visitedMemories.size === allMemoryIds.length) {
        
        showFinalImage();
    }
}

function startVelaAnimation() {
    const velaElement = document.getElementById('vela');
    if (!velaElement) return;

    velaElement.classList.remove('hidden'); 
    
    void velaElement.offsetWidth; 
    velaElement.classList.add('visible'); 

    let currentVelaFrame = 0;
    
    velaAnimationInterval = setInterval(() => {
        currentVelaFrame = (currentVelaFrame + 1) % velaFrames.length;
        velaElement.src = velaFrames[currentVelaFrame];
    }, 150); 
}

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 300, 
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" 
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.8,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 1.5, 
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": false 
        },
        "move": {
            "enable": true,
            "speed": 0.3, 
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false, 
            },
            "onclick": {
                "enable": false, 
            },
            "resize": true
        }
    },
    "retina_detect": true
});

const strings2 = [
    "apaga la velita y pide un deseo", 
    "vamos por otro año juntitos jiji",  
    "apaga mi velita tambien",
    "yo soy la vela",
    "y tu el pastel"  
    
];

function writeNoApagarPhrase() {
    if (currentNoApagarIndex < strings_no_apagar.length) {
        
        if (typed2) {
            typed2.destroy(); 
            
            document.getElementById('typed-output').innerHTML = ''; 
        }
        
        typed2 = new Typed('#typed-output', {
            strings: [strings_no_apagar[currentNoApagarIndex]], 
            typeSpeed: 30,
            showCursor: true,
            
            onComplete: function(self) {
                
                setTimeout(() => {
                    if (typed2) typed2.destroy(); 
                    startTyped2Loop(); 
                }, 2000); 
            }
        });
        
        currentNoApagarIndex++;
    }
    
    else {
        
        if (typed2) typed2.destroy();
        new Typed('#typed-output', {
            strings: ["YA NO TENGO MAS FRASES GANASTE"],
            typeSpeed: 50,
            showCursor: false
        });
        
        document.getElementById('btn-no-apagar').disabled = true;
    }
}

if (typeof Typed !== 'undefined') {
    var typed = new Typed('#typed-output', {
        strings: [
            "hola mi princesa bonita", 
            "cada dia contigo es especial",     
            "hoy tambien es especial",
            "pero es mas especial porque",
            "es nuestro primer añito",
            "espero que",
            "te guste este detalle",
            "siempre que te hago algo",
            "lo quiero hacer bonito",
            "bonito como tu",
            "lo unico que quiero",
            "es hacerte feliz",
            "todos los dias",
            "me importa mucho",
            "que seas feliz",
            "quiero sacarte una linda",
            "sonrisa",
            "la sonrisa mas hermosa",
            "de tu carita bonita",
            "que tanto deseo poder",
            "acariciar y llenar",
            "de besitos, mal pensada",
            "quiero cuidarte",
            "hasta cuando me lo permitas",
            "te amo mucho mi princesa" 
              
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: false,
        showCursor: true,

        onComplete: function(self) {
            
            clearInterval(llamaAnimationInterval);
            clearInterval(heartInterval); 
            
            const llamaElement = document.getElementById('llama');
            const heartsElement = document.getElementById('hearts-container');
            
            if (llamaElement) {
                llamaElement.classList.add('hide-element');
            }
            if (heartsElement) {
                heartsElement.classList.add('hide-element');
            }
            
            setTimeout(() => {
                
                if (llamaElement) {
                    llamaElement.style.display = 'none'; 
                }
                if (heartsElement) {
                    heartsElement.style.display = 'none'; 
                }

                startVelaAnimation(); 

                const optionsContainer = document.getElementById('options-container');

                if (optionsContainer) {
                    optionsContainer.classList.remove('hidden');
                    
                    void optionsContainer.offsetWidth; 
                    optionsContainer.classList.add('visible');
                }

                startTyped2Loop();

                document.getElementById('btn-no-apagar').addEventListener('click', writeNoApagarPhrase);

                document.getElementById('btn-apagar').addEventListener('click', startApagarVelaAnimation);

            }, 1500); 

        } 
    });
}

function startFireworks() {
    
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        colors: ['#FFC0CB', '#FFFFFF', '#FFD700', '#A0C0A0'] 
    };

    function shoot() {
        
        confetti(Object.assign({}, defaults, {
            particleCount: 80,
            scalar: 1.2,
            shapes: ['circle', 'square']
        }));
        
        confetti(Object.assign({}, defaults, {
            particleCount: 40,
            scalar: 0.7,
            shapes: ['circle', 'star']
        }));
    }

    shoot();
    
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    
    const intervalId = setInterval(shoot, 1500);
    
    setTimeout(() => {
        clearInterval(intervalId);

        openCurtains();

    }, 7000); 
}

function openCurtains() {
    const curtainContainer = document.getElementById('curtain-container');
    const leftCurtain = document.getElementById('left-curtain');
    const rightCurtain = document.getElementById('right-curtain');
    const newContent = document.getElementById('new-content'); 
    const oldContainer = document.querySelector('.container'); 

    if (!curtainContainer || !leftCurtain || !rightCurtain || !newContent || !oldContainer) return;

    oldContainer.classList.add('hidden-final');

    curtainContainer.style.visibility = 'visible'; 
    curtainContainer.style.pointerEvents = 'auto'; 

    setTimeout(() => {
        leftCurtain.classList.add('open');
        rightCurtain.classList.add('open');
    }, 50); 
    
    setTimeout(() => {

        const particlesElement = document.getElementById('particles-js'); 

        if (particlesElement) {
            particlesElement.classList.add('new-galaxy');
        }

        newContent.classList.add('visible-page'); 

        curtainContainer.classList.add('fade-out');
    }, 2000); 

    setTimeout(() => {
        curtainContainer.style.display = 'none';
        curtainContainer.style.pointerEvents = 'none';

        setupMemoryMap();
        
        console.log("¡Transición a la Segunda Parte completada!");

    }, 3500); 
}

function setupMemoryMap() {
    const memoryPoints = document.querySelectorAll('.memory-point');
    const modal = document.getElementById('memory-modal');
    const closeBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');

    memoryPoints.forEach(point => {
        point.addEventListener('click', function() {
            const memoryId = this.getAttribute('data-memory-id');
            const data = memoryData[memoryId];

            if (data) {
                
                modalTitle.textContent = data.title;
                modalText.textContent = data.text;
                
                if (data.image) {
                    modalImage.src = data.image;
                    modalImage.classList.remove('hidden');
                } else {
                    modalImage.classList.add('hidden'); 
                }

                this.classList.add('visited'); 
                visitedMemories.add(memoryId); 
                
                modal.classList.remove('hidden-modal');
            }
        });
    });

closeBtn.addEventListener('click', function() {
    
    modal.classList.add('hidden-modal'); 
    checkCompletion(); 
});
    
modal.addEventListener('click', function(e) {
    if (e.target.id === 'memory-modal') {
        modal.classList.add('hidden-modal');
        checkCompletion(); 
    }
});
}
