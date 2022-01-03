var charArr = [];
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');


    fetch(`https://thronesapi.com/api/v2/Characters`)
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(json => 
        {
        var parent = document.querySelector("datalist")
        
        json.forEach(element => {
          charArr.push(element.fullName)
            
            console.log(element.fullName);
            const x = document.createElement("option")
            x.textContent = element.fullName
            parent.appendChild(x)
        })
        
      })
      .catch(error => console.error(error));
    });


// for(let i =1; i<1136;i++){
// fetch(`https://anapioficeandfire.com/api/characters/${i}`)
//     .then(response => {
//       if (!response.ok) throw new Error(response.status);
//       return response.json();
//     })
//     .then(json => 
//         {
//         var parent = document.querySelector("datalist")
//               if(json.name!==""){
//             charArr.push(json.name)}
          
            
//             const x = document.createElement("option")
//             x.textContent = json.name
//             parent.appendChild(x)
        

//     })
//     .catch(error => console.error(error));
    
// }
// });

console.log(charArr);

const form = document.querySelector("form");
let APIKEY = "bFxMie1ZPZn4Cfo76DER6CTzbJjb4rcc";


form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const ch = formData.get("value");
  const limit = formData.get("limit")
  const fetchGif = (ch_, limit, APIKEY) => fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${limit}&q=${ch_}`)
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(json => {
        document.querySelector("output").innerHTML = ""
        for (let i=0; i<limit; i++){
        let img = document.createElement("img");
        img.src = json.data[i].images.downsized.url;
        console.log(img);
        document.querySelector("output").appendChild(img)
    
    }
            
      
    })
    .catch(error => {
      const output = document.querySelector("output");
      const error_msg = document.createElement("h2");
      error_msg.innerHTML = "we have no GIF for that";


      output.appendChild(error_msg)
    });
  
  if(charArr.includes(ch)){
  const ch_ = ch.toLowerCase().trim()
  fetchGif(ch_,limit,APIKEY)
  }else
  {
    // console.log(cahrArr[0]);
    // console.log(ch);
    // console.log(ch===charArr[0]);
    const output = document.querySelector("output");
    output.innerHTML = ""

    let errMes = document.createElement("span")
    errMes.textContent = "That is not a GOT character"

    let img__ = document.createElement("img")
    img__.src = "./not_a_got.jpg"
      
    output.appendChild(errMes)
    output.appendChild(img__)
  }
  
  
  // console.log(limit);
  // console.log(ch_);
  
});

