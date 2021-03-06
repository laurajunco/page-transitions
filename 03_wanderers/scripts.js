barba.init({
  debug: true,
  transitions: [
    {
      name: "next",
      leave({ current, next, trigger }) {

        return new Promise(resolve => {
          const timeline = gsap.timeline({
            onComplete() {
              current.container.remove()
              resolve()
            }
          })

          const navigation = current.container.querySelectorAll('header, a.next, a.previous')
          const photos = current.container.querySelectorAll('div.photos')

          timeline
            .to(navigation, { opacity: 0 }, 0)
            .to(photos, { opacity: 0, x: 500 }, 0)
        })
      },
      enter({ current, next, trigger }) {

        return new Promise (resolve => {
          const timeline = gsap.timeline({
            onComplete() {
              resolve()
            }
          })

          const navigation = next.container.querySelectorAll('header, a.next, a.previous')
          const photos = next.container.querySelectorAll('div.photos')

          timeline
            .set(photos, { opacity: 0, x: -500 })
            .set(navigation, { opacity: 0 })
            .to(navigation, { opacity: 1 }, 0)
            .to(photos, { opacity: 1, x: 0 }, 0)
            
        })
      }
    }
  ],
  views: []
})