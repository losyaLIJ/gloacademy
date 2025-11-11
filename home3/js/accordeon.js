const elements = document.querySelectorAll(".program-line__content")

elements.forEach((elem) => {
    const title = elem.querySelector(".program-line__title")
    const descr = elem.querySelector(".program-line__descr")

    title.addEventListener("click", () => {
        const allDescr = document.querySelectorAll(".program-line__descr")
        allDescr.forEach((d) => {
            if (d !== descr) {
                d.classList.remove("active")
            }
        })
        descr.classList.toggle("active")
    })
})