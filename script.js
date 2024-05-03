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