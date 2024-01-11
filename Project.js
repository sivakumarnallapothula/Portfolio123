let a = document.getElementById("input1")
let b = document.getElementById("input2")
let c = document.getElementById("input3")
let d = document.getElementById("projectslist")

function but() {

    if (a.value === "" || b.value === "" || c.textContent === "") {
        alert("Please, Enter the Project Deatils")
    } else {
        if (((b.value).startsWith("http") || (b.value).startsWith("https") || (b.value).startsWith("www"))) {
            let pro = document.createElement("div")
            let bre = document.createElement("br")

            pro.appendChild(bre)
            pro.style.marginBottom = "10px";
            pro.classList.add("shadow")
            d.appendChild(pro)
            d.appendChild(pro)
            pro.classList.add("p-3")
            let head = document.createElement("h1")
            head.textContent = a.value
            pro.appendChild(head)
            d.appendChild(pro)
            let paraa = document.createElement("p")
            paraa.textContent = c.value
            pro.appendChild(paraa)
            d.appendChild(pro)
            let paraa1 = document.createElement("a")
            let butt = document.createElement("button")
            butt.textContent = "View Project"
            butt.classList.add("btn", "btn-outline-dark", "shadow")
            paraa1.setAttribute("href", b.value)
            paraa1.setAttribute("target", "_blank")
            paraa1.appendChild(butt)
            pro.appendChild(paraa1)
            d.appendChild(pro)
            a.value = ""
            b.value = ""
            c.value = ""
        } else {
            alert("Please, Enter the Valid Project link")
        }
    }
}