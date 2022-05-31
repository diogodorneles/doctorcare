window.addEventListener('scroll', onScroll) // "add ('scroll') executing ('onscrol')" that happens when scrolling

onScroll() // 
function onScroll(){    
    showNavOnScroll() 
    showBackToTopButtonOnScroll() // shows button at the end when scrolling

    activateMenuAtCurrentSection(home) // calling function and changing function argument \/ 
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
} 

function activateMenuAtCurrentSection(section){ 
    const targetLine = scrollY + innerHeight/2 // to calculate the desired line in the screen middle   

    // check if section has passed the line
    // what data i need?
    const sectionTop = section.offsetTop // section top value
    const sectionHeight = section.offsetHeight // section height
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop // calculate if the top of the section has reached or passed the target line

    // getting data and logic information
    // console.log(
    //     'O topo da seção chegou ou passou da linha desejada' +
    //     sectionTopReachOrPassedTargetLine  // verify values if it is true or false
    // )

    // calculate end of section
    const sectionEndAt = sectionTop + sectionHeight //add up the beginning of the section + height to know the end of the section   
    const sectionEndPassedTargetLine = sectionEndAt <= targetLine // check if the end of section has passed the target line
    
    
    // console.log(
    //     'Section bottom has reached or crossed the target line' +
    //     sectionEndPassedTargetLine
    // )

    // section boundaries
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine // if both are true
    // '!' to make false become true ( will be false onely when all the content is over the target line)
    const sectionId = section.getAttribute('id') // get id from section      
        
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]` // getting id from sectionId      
    ) 

    menuElement.classList.remove('active') // always remove before
    if (sectionBoundaries){ 
        menuElement.classList.add('active') // add if section is in the middle
    }
}

function showNavOnScroll(){ 
    if(scrollY > 0){
        navigation.classList.add('scroll') //add 'scroll' in navigation classes
    } else{
        navigation.classList.remove('scroll')
    }   
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 550){
        backToTopButton.classList.add('show') 
    } else{
        backToTopButton.classList.remove('show')
    }   
}

function openMenu(){ 
    document.body.classList.add('menu-expanded') 
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top', // move from the origin (top here)
    distance: '30px',
    duration: 700, // milliseconds
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .cards,
    #about,
    #about header,
    #about .content`); // scrollreveal only accepts objects
    