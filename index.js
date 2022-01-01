window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  

fetch(`https://thronesapi.com/api/v2/Characters`)
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(json => 
        {
        let parent = document.querySelector("datalist")
        // let charArr = [];
        json.forEach(element => {
            // charArr.push(element.fullName)
            const x = document.createElement("option")
            x.textContent = element.fullName
            parent.appendChild(x)
        });
        // console.log(charArr);

    })
    .catch(error => console.error(error));
});


const form = document.querySelector("form");
let APIKEY = "bFxMie1ZPZn4Cfo76DER6CTzbJjb4rcc";

form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const ch = formData.get("value");
  const ch_ = ch.toLowerCase().trim()
  const limit = formData.get("limit")
  console.log(limit);
  console.log(ch_);
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${limit}&q=${ch_}`)
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
    .catch(error => console.error(error));
});

