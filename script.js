let img = ['./images/pic1.jpeg', './images/pic2.jpeg', './images/pic3.png', './images/pic4.png'];
let curr = 0;
let target = document.querySelector('.sub-container2');
target.style.backgroundImage = `url('${img[curr]}')`;

//For Left button
function prevSlide() {
    if (curr > 0) {
        curr--;
        target.style.backgroundImage = `url('${img[curr]}')`;
        target.style.transition="700ms ease-in 0s"
        document.querySelectorAll('.dot').forEach(dot => {
            dot.style.backgroundColor = ""; 
        });
        let dot=document.querySelector(`.dot${curr}`);
        dot.style.backgroundColor="#f79f38"
    }
}

//For Right button
function nextSlide() {
    if (curr <img.length - 1) {
        curr++; 
        target.style.backgroundImage = `url('${img[curr]}')`; 
        target.style.transition="700ms ease-in 0s"
        document.querySelectorAll('.dot').forEach(dot => {
            dot.style.backgroundColor = ""; 
        });
        let dot=document.querySelector(`.dot${curr}`);
        dot.style.backgroundColor="#f79f38"
    }
}


function dotClick(dot) {
    const dotIndex = Array.from(dot.parentElement.children).indexOf(dot);

    document.querySelectorAll('.dot').forEach(dot => {
        dot.style.backgroundColor = ""; 
    });

    dot.style.backgroundColor = "#f79f38";

    curr = dotIndex;
    target.style.backgroundImage = `url('${img[curr]}')`;
}



const h1Texts = [
    "Text 1 for h1",
    "Text 2 for h1",
    "Text 3 for h1",
    
];



const strongTexts = [
    "Kompetent. Vertrauensvoll. Wertschätzend.",
    "Text 2 for strong",
    "Text 3 for strong",
];

let currentVisibleIndexH1 = 0;
let currentVisibleIndexP = 0;
let currentVisibleIndexStrong = 0;

function updateText(scrollTop) {
    const sectionHeading = document.querySelector('.section-heading');
    const h1Element = sectionHeading.querySelector('h1');
    const strongElement = sectionHeading.querySelector('strong');

    let visibleIndexH1 = Math.floor(scrollTop / window.innerHeight);
    let visibleIndexStrong = Math.floor(scrollTop / window.innerHeight);

    // Clamp the indices to prevent out-of-bounds access
    visibleIndexH1 = Math.max(0, Math.min(visibleIndexH1, h1Texts.length - 1));
    visibleIndexStrong = Math.max(0, Math.min(visibleIndexStrong, strongTexts.length - 1));

    if (visibleIndexH1 !== currentVisibleIndexH1) {
        h1Element.style.transition = 'opacity 0.6s ease-in-out';
        h1Element.style.opacity = 0;

        setTimeout(function() {
            h1Element.textContent = h1Texts[visibleIndexH1];
            
            h1Element.style.opacity = 1;

            currentVisibleIndexH1 = visibleIndexH1;
        }, 600); 
        
    }


    if (visibleIndexStrong !== currentVisibleIndexStrong) {
        strongElement.style.transition = 'opacity 0.6s ease-in-out';
        strongElement.style.opacity = 0;

        setTimeout(function() {
            strongElement.textContent = strongTexts[visibleIndexStrong];
            
            strongElement.style.opacity = 1;

            currentVisibleIndexStrong = visibleIndexStrong;
        }, 600); 
    }
}

// Event listener for scroll
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    updateText(scrollTop);
});

updateText(window.scrollY);
