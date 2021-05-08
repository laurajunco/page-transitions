// usar barba css
barba.use(barbaCss)

//iniciar barba
barba.init({
  transitions: [
    {
      name: "fade",
      beforeEnter({ current, next, trigger })  {
        scrolltop()
        selectNav(next)
      }
    }
  ]
})

const scrolltop = () => {
  window.scrollTo({top: 0,behavior: "smooth"})
}

const selectNav = (next) => {
  const headerLinks = document.querySelectorAll("nav a")
  const href = next.url.path

  headerLinks.forEach(link => {
    
    if(link.getAttribute("href") === href) {
      link.classList.add("selected")
    } else {
      link.classList.remove("selected")
    }
  })
}