// ###########################################################
// animate.style code
// ########################################################### //

const animateCSS = (element, animation, prefix = 'animate__') =>

  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});


// ###########################################################
// Projects 3rd Row Toggle Display & Animation Effect
// ########################################################### //

const toggleButton = document.getElementById("projectBtn");
const content = document.getElementById("toggle-row");
const boxes = document.querySelectorAll(".project-box");
const viewIcon = document.getElementById("viewIcon");

toggleButton.addEventListener("click", function() {
  if (content.style.display === "none") {
    content.style.display = "block";
    toggleButton.innerHTML = "View Less";
    viewIcon.setAttribute("src", "view-less.svg");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.add("fade-in");
      boxes[i].classList.remove("fade-out");
    }
  } else if(content.style.display === "block") {
    toggleButton.innerHTML = "View More";
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.add("fade-out");
      setTimeout(function() {
        content.style.display = "none";   
      }, 1500);
    }
  } else {
    content.style.display = "none";
  }
});

// function toggleIcon() {
//     let iconFlag = true;
//     var icon = document.getElementById("viewIcon");

//     if (iconFlag) {
//         icon.src = "assets/img/view-less.svg";
//         iconFlag = false;
//     } else {
//         icon.src = "assets/img/view-more.svg";
//         iconFlag = true;
//     }
// }



// ###########################################################
// typing effect on <h2>
// ########################################################### //

var twArr = ["Just your friendly neighborhood tech girl."];
var twPosition = 0;
var twSpeed = 180;

typewrite = () => {
    document.querySelector("#twText").innerHTML = twArr[0].substring(0, twPosition) + `<span id="twSpan">\u25ae</span>`;

    if(twPosition++ != twArr[0].length){
        setTimeout(typewrite, twSpeed);
    } else {
        twPosition = 0;
        setTimeout(typewrite, twSpeed);
    }
}


// ###########################################################
// Project Boxes Mouseover Animation Effect
// ########################################################### //

function mouseoverProject (project){
    let title = project.getElementsByClassName("project-title");
    title[0].classList.add("project-title-hover");
    project.classList.add("animate__animated", "animate__pulse");
}

function mouseoutProject(project){
    let title = project.getElementsByClassName("project-title");
    title[0].classList.remove("project-title-hover");
    project.classList.remove("animate__animated", "animate__pulse");
}


// ###########################################################
// Skill Btn Mouseover Animation
// ########################################################### //

function mouseoverHTML(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#htmlCheck").classList.add("animate__animated", "animate__bounce");
    document.querySelector("#htmlSvg").setAttribute("src", "/assets/img/html-light.svg");
}

function mouseoutHTML(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#htmlSvg").setAttribute("src", "/assets/img/html-dark.svg");
    document.querySelector("#htmlCheck").classList.remove("animate__animated", "animate__bounce");  
}

function mouseoverCSS(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#cssSVG").setAttribute("src", "/assets/img/css-light.svg");
    document.querySelector("#cssCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutCSS(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#cssSVG").setAttribute("src", "/assets/img/css-dark.svg");
    document.querySelector("#cssCheck").classList.remove("animate__animated", "animate__bounce");
}

function mouseoverJS(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#jsSVG").setAttribute("src", "/assets/img/javascript-light.svg");
    document.querySelector("#jsCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutJS(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#jsSVG").setAttribute("src", "/assets/img/javascript-dark.svg");
    document.querySelector("#jsCheck").classList.remove("animate__animated", "animate__bounce");
}

function mouseoverMailchimp(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#mailchimpSVG").setAttribute("src", "/assets/img/mailchimp-2.svg");
    document.querySelector("#mailchimpCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutMailchimp(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#mailchimpSVG").setAttribute("src", "/assets/img/mailchimp-1.svg");
    document.querySelector("#mailchimpCheck").classList.remove("animate__animated", "animate__bounce");
}

/* ==== Canva Mouseover/Mouseout ==== */
function mouseoverCanva(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#canvaSVG").setAttribute("src", "/assets/img/canva-2.svg");
    document.querySelector("#canvaCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutCanva(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#canvaSVG").setAttribute("src", "/assets/img/canva-1.svg");
    document.querySelector("#canvaCheck").classList.remove("animate__animated", "animate__bounce");
}

function mouseoverGit(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#gitSVG").setAttribute("src", "/assets/img/git-light.svg");
    document.querySelector("#gitCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutGit(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#gitSVG").setAttribute("src", "/assets/img/git-dark.svg");
    document.querySelector("#gitCheck").classList.remove("animate__animated", "animate__bounce");
}


/* ==== Bootstrap Mouseover/Mouseout ==== */
function mouseoverBS(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#bsSVG").setAttribute("src", "/assets/img/bootstrap-light.svg");
    document.querySelector("#bsCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutBS(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#bsSVG").setAttribute("src", "/assets/img/bootstrap-dark.svg");
    document.querySelector("#bsCheck").classList.remove("animate__animated", "animate__bounce");
}



/* ==== Google Mouseover/Mouseout ==== */
function mouseoverGoogle(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#googleSVG").setAttribute("src", "/assets/img/google-2.svg");
    document.querySelector("#googleCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutGoogle(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#googleSVG").setAttribute("src", "/assets/img/google-1.svg");
    document.querySelector("#googleCheck").classList.remove("animate__animated", "animate__bounce");
}



/* ==== SASS Mouseover/Mouseout ==== */
function mouseoverSass(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#sassSVG").setAttribute("src", "/assets/img/sass-light.svg");
    document.querySelector("#sassCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutSass(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#sassSVG").setAttribute("src", "/assets/img/sass-dark.svg");
    document.querySelector("#sassCheck").classList.remove("animate__animated", "animate__bounce");
}



/* ==== CRM Mouseover/Mouseout ==== */
function mouseoverCRM(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#crmSVG").setAttribute("src", "/assets/img/crm-2.svg");
    document.querySelector("#crmCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutCRM(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#crmSVG").setAttribute("src", "/assets/img/crm-1.svg");
    document.querySelector("#crmCheck").classList.remove("animate__animated", "animate__bounce");
}



/* ==== Salesloft Mouseover/Mouseout ==== */
function mouseoverSalesloft(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#salesloftSVG").setAttribute("src", "/assets/img/salesloft-2.svg");
    document.querySelector("#salesloftCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutSalesloft(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#salesloftSVG").setAttribute("src", "/assets/img/salesloft-1.svg");
    document.querySelector("#salesloftCheck").classList.remove("animate__animated", "animate__bounce");
}



// *** EVENT LISTENERS ***
window.addEventListener("load", typewrite);
window.addEventListener("load", updateCopyright);








