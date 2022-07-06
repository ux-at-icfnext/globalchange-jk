// define variables
const topLevelNavItems = document.querySelectorAll(".nav-item");
const mobileMenuText = document.querySelector(".mobile-menu-text");
const mobileMenuIcon = document.querySelector(".menu-icon");
const exitMobileMenuText = document.querySelector(".exit-menu-text");
const exitMobileMenuIcon = document.querySelector(".exit-button");
const navContainer = document.querySelector(".nav-items");
const footer = document.querySelector(".footer-container");
const contentContainer = document.querySelector(".content");


// functionality only available in the mobile menu: expand/collapse selected sub nav items 
    // collapse currently open sub nav item when a new sub nav item is selected
const toggleSubNav=()=>{
    topLevelNavItems.forEach(navItem=>{
        if(navItem.children[1].children[0].children.length > 0){ //sub nav ul > 0
            navItem.addEventListener("click", ()=>{
                resetSubNav();
                navItem.children[0].children[1].classList.toggle("hidden"); // toggle expand nav icon
                navItem.children[0].children[2].classList.toggle("display-collapse-nav"); // toggle collapse nav icon
                navItem.children[1].classList.toggle("display"); // toggle sub nav ul items
               })
           } else{ //sub nav ul = 0
               navItem.children[0].children[1].classList.add("hidden"); // hide expand nav icon
           }
       }
   )
}

//collapse sub nav when mobile menu is closed, reset to default nav settings
const resetSubNav =()=>{
    topLevelNavItems.forEach(navItem=>{
         //default sub nav settings:
            // when sub nav ul > 0
                // display expand nav icon ">"
                // hide collapse nav icon "v"
                // collapse sub nav items
        if(navItem.children[1].children[0].children.length > 0){ //sub nav ul > 0
            navItem.children[0].children[1].classList.remove("hidden"); // display expand nav icon
            navItem.children[0].children[2].classList.remove("display-collapse-nav"); //hide collapse nav icon
            navItem.children[1].classList.remove("display"); // collapse sub nav ul items
           } 
           //default sub nav settings:
                //when sub nav ul = 0
                    // do not display expand nav icon ">"
        else{ //sub nav ul = 0
            navItem.children[0].children[1].classList.add("hidden"); // hide expand nav icon
            }
       }
   )
}

//open mobile menu functionality
const mobileMenu = ()=>{
    toggleSubNav();
    mobileMenuText.classList.add("hidden");
    exitMobileMenuText.classList.add("display-menu-text");
    mobileMenuIcon.classList.toggle("hidden");
    exitMobileMenuIcon.classList.toggle("display");
    navContainer.classList.toggle("mobile");
    document.querySelector(".mobile").classList.toggle("slide-left");
    contentContainer.classList.toggle("inactive");
    footer.classList.toggle("inactive");
    document.querySelector("body").classList.toggle("scroll");
    // if(contentContainer){
    //     contentContainer.addEventListener("click", e=>{
    //         e.preventDefault();
    //     })
    // }
    // if(footer){
    //     footer.addEventListener("click", e=>{
    //         e.preventDefault();
    //     })
    // }
}
//exit mobile menu
const removeMobileMenu =()=>{
    resetSubNav();
    toggleSubNav();
    mobileMenuText.classList.remove("hidden");
    exitMobileMenuText.classList.remove("display-menu-text");
    mobileMenuIcon.classList.toggle("hidden");
    exitMobileMenuIcon.classList.toggle("display");
    document.querySelector(".mobile").classList.toggle("slide-left");
    contentContainer.classList.toggle("inactive");
    footer.classList.toggle("inactive");
    navContainer.classList.toggle("mobile");
    document.querySelector("body").classList.toggle("scroll");
 }
//expand mobile menu when mobile menu icon or "Menu" text is selected
mobileMenuIcon.addEventListener("click", mobileMenu);
mobileMenuText.addEventListener("click", mobileMenu);

//collapse mobile menu when exit icon or "Exit" text is selected
exitMobileMenuIcon.addEventListener("click", removeMobileMenu);
exitMobileMenuText.addEventListener("click", removeMobileMenu);



