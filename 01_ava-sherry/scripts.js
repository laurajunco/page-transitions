const bodyTag = document.querySelector("body")

// usar barba css
barba.use(barbaCss)

//iniciar barba
barba.init({
  transitions: [
    {
      name: "fade",
      once() {},
      beforeEnter({ current, next, trigger })  {
        scrolltop()
        selectNav(next)
      }
    }
  ],
  views: [
    {
      namespace: "feed",
      beforeEnter() {
        bodyTag.classList.add("feed");
      },
      beforeLeave() {
        bodyTag.classList.remove("feed");
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