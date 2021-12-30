const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const ch = formData.get("value");
  fetch(`https://anapioficeandfire.com/api/characters/${ch}`)
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.error(error));
});