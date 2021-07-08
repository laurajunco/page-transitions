const runScripts = () => {
  //intersection observer
  const headers = document.querySelectorAll('h2, h3')
  const imageHolders = document.querySelectorAll('div.image')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.intersectionRatio >= 0.1) {
        entry.target.classList.add('in-view')
      } else {
        entry.target.classList.remove('in-view')
      }
    })
  }, { threshold: [0, 0.1, 1] })

  headers.forEach(header => 
    observer.observe(header)
  )

  imageHolders.forEach(holder => 
    observer.observe(holder)
  )
}

runScripts()

barba.init({
  transitions: [
    {
      name: 'switch',
      leave({ current, next, trigger }) {

        return new Promise(resolve => {
          const timeline = gsap.timeline({
            onComplete() {
              resolve()
            }
          })
          timeline.to("header", { y: "-100%" }, 0)
        })
      },
      enter({ current, next, trigger }) {
        return new Promise(resolve => {
          const timeline = gsap.timeline({
            onComplete() {
              runScripts() //corre despues del timeline
              resolve()
            }
          })
          timeline.to("header", { y: "0" }, 0)
        })
      }      
    }
  ],
  views: [],
  debug: true 
})