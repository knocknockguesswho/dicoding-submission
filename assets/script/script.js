//buat objek skills beserta point '%' dari masing2 skill
const skills = {
    javascript: '80',
    python: '65',
    java: '75'
}




//ubah tampilan skills di HTML sesuai dengan nilai yang sudah diassign

//ambil elemen yg akan di modifikasi
//gunakan forEach loop untuk mengambil setiap elemen
function changeSkillsPoint(){
    //beri sedikit animation untuk skill point dari 1 hingga nilai yg diberikan
    const javascript = skills.javascript;
    const python = skills.python;
    const java = skills.java;
    
    const skillsElement = document.querySelectorAll(".point");
    
    skillsElement[0].setAttribute("style", "max-width: "+javascript+"%");
    skillsElement[1].setAttribute("style", "max-width: "+python+"%");
    skillsElement[2].setAttribute("style", "max-width: "+java+"%");
    
    //buat animasi bekerja ketika observed
    observer = new IntersectionObserver((entries)=>{
        for(let entry of entries){
            if(entry.intersectionRatio > 0) {
                entry.target.classList.add("animation");
            } else {
                
            }
        }
    })
    for(let skill of skillsElement){
        observer.observe(skill);
    }
}


// ambil arrow_left dan arrow_right untuk desk
const carousel_desk = document.querySelector(".carousel_slide_desk");
const arrow_right_desk = carousel_desk.querySelector(".arrow_right");
const arrow_left_desk = carousel_desk.querySelector(".arrow_left");

// ambil arrow_left dan arrow_right untuk lamp
const carousel_lamp = document.querySelector(".carousel_slide_lamp");
const arrow_right_lamp = carousel_lamp.querySelector(".arrow_right");
const arrow_left_lamp = carousel_lamp.querySelector(".arrow_left");



//CAROUSEL BUTTON
//1. mengambil current slide yaitu elemen yg punya class active
//2. menghapus classlist active di current slide sekaligus add classlist carousel_image
//3. memberikan classlist active ke element berikutnya

//buat arrow_right_desk menjadi next button
const images_desk = carousel_desk.querySelectorAll(".display");
function currentSlideDesk(){
    for(let image of images_desk){
        if(image.classList.contains("active")){
            return image;
        }
    }
}
//NEXT DESK
arrow_right_desk.addEventListener('click', ()=>{
    const current_slide = currentSlideDesk();
    const next_slide = currentSlideDesk().nextElementSibling;
    if(current_slide!=images_desk[images_desk.length-1]){    
        current_slide.classList.remove("active");
        current_slide.classList.add("carousel_image");
        next_slide.classList.add("active");
        next_slide.classList.remove("carousel_image");
    }
})

//PREV DESK
arrow_left_desk.addEventListener('click', ()=>{
    const current_slide = currentSlideDesk();
    const prev_slide = currentSlideDesk().previousElementSibling;
    if(current_slide!=images_desk[0]){
        current_slide.classList.remove("active");
        current_slide.classList.add("carousel_image");
        prev_slide.classList.add("active");
        prev_slide.classList.remove("carousel_image");
    }

})


//buat arrow_right_lamp menjadi next button
const images_lamp = carousel_lamp.querySelectorAll(".display");
function currentSlideLamp(){
    for(let image of images_lamp){
        if(image.classList.contains("active")){
            return image;
        }
    }
}
//NEXT LAMP
arrow_right_lamp.addEventListener('click', ()=>{
    const current_slide = currentSlideLamp();
    const next_slide = currentSlideLamp().nextElementSibling;
    if(current_slide!=images_lamp[images_lamp.length-1]){    
        current_slide.classList.remove("active");
        current_slide.classList.add("carousel_image");
        next_slide.classList.add("active");
        next_slide.classList.remove("carousel_image");
    }
})

//PREV LAMP
arrow_left_lamp.addEventListener('click', ()=>{
    const current_slide = currentSlideLamp();
    const prev_slide = currentSlideLamp().previousElementSibling;
    if(current_slide!=images_lamp[0]){
        current_slide.classList.remove("active");
        current_slide.classList.add("carousel_image");
        prev_slide.classList.add("active");
        prev_slide.classList.remove("carousel_image");
    }

})




changeSkillsPoint();