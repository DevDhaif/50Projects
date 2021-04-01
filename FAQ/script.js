const toggles = document.querySelectorAll('.faq-toggle')

const ps=document.querySelectorAll('.faq-text')
const lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis impedit eum iure, sint, minima consequuntur deserunt eaque, est quas officia similique vero asperiores distinctio quia ad! Praesentium, blanditiis dicta?"
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

ps.forEach(p=>{
    p.innerHTML=lorem
})



