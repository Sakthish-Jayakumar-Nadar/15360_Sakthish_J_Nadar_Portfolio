const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            const progressValue = entry.target.getAttribute("actual-value");
            entry.target.style.setProperty("--progress", progressValue+"%");
        }
        else{
            entry.target.style.setProperty("--progress", "0%")
        }
    })
})
const progressBars = document.querySelectorAll(".progress-bar")
progressBars.forEach((element) => observer.observe(element));

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("bounce");
        }
        else{
            entry.target.classList.remove("bounce");
        }
    })
})
const texts = document.querySelectorAll(".span")
texts.forEach((element) => observer1.observe(element));

const labels = document.getElementsByClassName("education-radio-label");
const r1 = document.getElementById("be-radio");
const r2 = document.getElementById("twelfth-radio");
if(r1.checked){
    labels[0].style.color = "orange";
}
else if(r2.checked){
    labels[1].style.color = "orange";
}
else{
    labels[2].style.color = "orange";
}
function colorLabel(){
    if(r1.checked){
        labels[0].style.color = "orange";
        labels[1].style.color = "ghostwhite";
        labels[2].style.color = "ghostwhite";
    }
    else if(document.getElementById("twelfth-radio").checked){
        labels[1].style.color = "orange";
        labels[0].style.color = "ghostwhite";
        labels[2].style.color = "ghostwhite";
    }
    else{
        labels[2].style.color = "orange";
        labels[1].style.color = "ghostwhite";
        labels[0].style.color = "ghostwhite";
    }
}

function projectCardMoveLeft(){
    const projects = document.getElementsByClassName("project");
    const link = document.getElementById("project-link");
    const p0 = getComputedStyle(projects[0]);
    const p1 = getComputedStyle(projects[1]);
    const p2 = getComputedStyle(projects[2]);
    
    let lpw = p0.getPropertyValue("--lpw");
    let lpt = p0.getPropertyValue("--lpt");
    let lpl = p0.getPropertyValue("--lpl");
    let lpx = p0.getPropertyValue("--lpx");
    let lpy = p0.getPropertyValue("--lpy");
    let lpz = 0

    let cpw = p1.getPropertyValue("--cpw");
    let cpt = p1.getPropertyValue("--cpt");
    let cpl = p1.getPropertyValue("--cpl");
    let cpx = p1.getPropertyValue("--cpx");
    let cpy = p1.getPropertyValue("--cpy");
    let cpz = 0
    
    let rpw = p2.getPropertyValue("--rpw");
    let rpt = p2.getPropertyValue("--rpt");
    let rpl = p2.getPropertyValue("--rpl");
    let rpx = p2.getPropertyValue("--rpx");
    let rpy = p2.getPropertyValue("--rpy");
    let rpz = 0

    if(lpl === "0%"){
        lpz = 0;
        cpz = 10;
        rpz = 5;
        link.innerHTML = `<a href="#">Link3</a>`;
    }
    else if(rpl === "0%"){
        rpz = 0;
        cpz = 5;
        lpz = 10;
        link.innerHTML = `<a href="#">Link1</a>`;
    }
    else{
        cpz = 0;
        lpz = 5;
        rpz = 10;
        link.innerHTML = `<a href="#">Link2</a>`;
    }

    projects[0].style.setProperty("--lpw",rpw);
    projects[0].style.setProperty("--lpt",rpt);
    projects[0].style.setProperty("--lpl",rpl);
    projects[0].style.setProperty("--lpx",rpx);
    projects[0].style.setProperty("--lpy",rpy);
    projects[0].style.setProperty("--lpz",rpz);

    projects[1].style.setProperty("--cpw",lpw);
    projects[1].style.setProperty("--cpt",lpt);
    projects[1].style.setProperty("--cpl",lpl);
    projects[1].style.setProperty("--cpx",lpx);
    projects[1].style.setProperty("--cpy",lpy);
    projects[1].style.setProperty("--cpz",lpz);
    
    projects[2].style.setProperty("--rpw",cpw);
    projects[2].style.setProperty("--rpt",cpt);
    projects[2].style.setProperty("--rpl",cpl);
    projects[2].style.setProperty("--rpx",cpx);
    projects[2].style.setProperty("--rpy",cpy);
    projects[2].style.setProperty("--rpz",cpz);
}

function projectCardMoveRight(){
    const projects = document.getElementsByClassName("project");
    const link = document.getElementById("project-link");
    const p0 = getComputedStyle(projects[0]);
    const p1 = getComputedStyle(projects[1]);
    const p2 = getComputedStyle(projects[2]);
    
    let lpw = p0.getPropertyValue("--lpw");
    let lpt = p0.getPropertyValue("--lpt");
    let lpl = p0.getPropertyValue("--lpl");
    let lpx = p0.getPropertyValue("--lpx");
    let lpy = p0.getPropertyValue("--lpy");
    let lpz = 0

    let cpw = p1.getPropertyValue("--cpw");
    let cpt = p1.getPropertyValue("--cpt");
    let cpl = p1.getPropertyValue("--cpl");
    let cpx = p1.getPropertyValue("--cpx");
    let cpy = p1.getPropertyValue("--cpy");
    let cpz = 0
    
    let rpw = p2.getPropertyValue("--rpw");
    let rpt = p2.getPropertyValue("--rpt");
    let rpl = p2.getPropertyValue("--rpl");
    let rpx = p2.getPropertyValue("--rpx");
    let rpy = p2.getPropertyValue("--rpy");
    let rpz = 0

    if(lpl === "0%"){
        lpz = 0;
        cpz = 10;
        rpz = 5;
        link.innerHTML = `<a href="#">Link2</a>`;
    }
    else if(rpl === "0%"){
        rpz = 0;
        cpz = 5;
        lpz = 10;
        link.innerHTML = `<a href="#">Link3</a>`;
    }
    else{
        cpz = 0;
        lpz = 5;
        rpz = 10;
        link.innerHTML = `<a href="#">Link1</a>`;
    }

    projects[0].style.setProperty("--lpw",cpw);
    projects[0].style.setProperty("--lpt",cpt);
    projects[0].style.setProperty("--lpl",cpl);
    projects[0].style.setProperty("--lpx",cpx);
    projects[0].style.setProperty("--lpy",cpy);
    projects[0].style.setProperty("--lpz",cpz);

    projects[1].style.setProperty("--cpw",rpw);
    projects[1].style.setProperty("--cpt",rpt);
    projects[1].style.setProperty("--cpl",rpl);
    projects[1].style.setProperty("--cpx",rpx);
    projects[1].style.setProperty("--cpy",rpy);
    projects[1].style.setProperty("--cpz",rpz);
    
    projects[2].style.setProperty("--rpw",lpw);
    projects[2].style.setProperty("--rpt",lpt);
    projects[2].style.setProperty("--rpl",lpl);
    projects[2].style.setProperty("--rpx",lpx);
    projects[2].style.setProperty("--rpy",lpy);
    projects[2].style.setProperty("--rpz",lpz);
}