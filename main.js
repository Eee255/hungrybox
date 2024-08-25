const menuEl = document.getElementById('menu');
const navMenuEl = document.getElementById('navMenu');
const navCloseEl = document.getElementById('navClose');
const navLinkEl = document.querySelectorAll('.nav-link');

menuEl.addEventListener('click', () => {
    navMenuEl.classList.remove('hidden');
})

navCloseEl.addEventListener('click', () => {
    navMenuEl.classList.add('hidden');
})

navLinkEl.forEach(link => {
    link.addEventListener('click', () => {
        navMenuEl.classList.add('hidden');
    })
})

/*--------------------------TABS-------------------------------------------*/
const tabsEl = document.querySelectorAll(".tabs-wrap ul li");
const allEl = document.querySelectorAll('.item-wrap');
const foodEl = document.querySelectorAll('.food');
const sanckEl = document.querySelectorAll('.snack');
const bevarageEl = document.querySelectorAll('.beverage');

tabsEl.forEach(tab => {
    tab.addEventListener('click', () => {
        tabsEl.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active")

        const tabVal = tab.getAttribute('data-tabs')

        allEl.forEach(item => {
            item.style.display = 'none'
        })

        if (tabVal == 'food'){
            foodEl.forEach(item => {
                item.style.display = "block"
            })
        } else if (tabVal == 'snack'){
            sanckEl.forEach(item => {
                item.style.display = "block"
            })
        } else if (tabVal == 'beverage'){
            bevarageEl.forEach(item => {
                item.style.display = "block"
            })
        } else {
            allEl.forEach(item => {
                item.style.display = "block"
            })
        }
    })
})

/*-------------------scroll up----------------------------------------------- */

const scrollup = () => {
    const scrollUpEl = document.getElementById("scrollUp");

    if (this.scrollY >= 250){
        scrollUpEl.classList.remove("-bottom-1/2");
        scrollUpEl.classList.add("bottom-4");
    } else {
        scrollUpEl.classList.add("-bottom-1/2");
        scrollUpEl.classList.remove("bottom-4");
    }
}
window.addEventListener('scroll', scrollup)
/*--------------------------border------------------------------------------*/
const scrollHeader = () => {
    const header = document.getElementById("header");

    if (this.scrollY >= 50){
        header.classList.add("border-b", "border-secondaryColor");
    } else {
        header.classList.remove("border-b", "border-secondaryColor");
    }
}
window.addEventListener('scroll', scrollHeader)
