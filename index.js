// api
// https://api.unsplash.com/photos/?client_id=FEZBthcu_3sqkOG4sVc2jGfvuncLa1N1L1Q4zlnw_Sc

async function getData() {
    try {
        let res = await fetch("https://api.unsplash.com/photos/?client_id=FEZBthcu_3sqkOG4sVc2jGfvuncLa1N1L1Q4zlnw_Sc")

        let data = await res.json()
        console.log("res", data)
        showData(data)
    }
    catch (err) {
        console.log(err)
    }
}



function showData(data) {
    var main_cont = document.getElementById('main_cont')
    data.map((e) => {
        let div = document.createElement("div")
        div.setAttribute("class", "main_card")
        let img = document.createElement("img");
        img.src = `${e.urls.small}`
        img.setAttribute("class", "crd_img")
        let div1 = document.createElement("div")
        div1.setAttribute("class", "scard_txt")
        let p = document.createElement("p")
        p.innerHTML = `${e.alt_description}`;
        p.setAttribute("class", "scard_p")

        let div2 = document.createElement("div")
        div2.setAttribute("class", "crd_bttm")
        div2.innerHTML = `<div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUbhqo251aMtx1WmBEBbWuc_P8Gmiinfh4A&usqp=CAU" alt=""/><span>${e.likes}</span></div>

        <div><img style="height:15px, color: white" src="https://www.freeiconspng.com/thumbs/comment-png/comment-png-1.png" alt=""/><span>${e.likes}</span></div>

          <div><img style="height:15px,width: 10px, color: white" src="https://cdn3.iconfinder.com/data/icons/mixed-all-icons/512/LOOK-512.png" alt=""/><span>${e.likes} K</span></div>
        
        `

        div1.append(p, div2)
        div.append(img , div1)
        main_cont.appendChild(div)

        // div.appendChild(img)
    })
}

getData();