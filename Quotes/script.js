console.log("its working!");
setInterval(() => apicall(), 3000);

function apicall() {
  let card = document.getElementById("card");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://type.fit/api/quotes", true);

  xhr.onload = function () {
    if (this.status === 200) {
      obj = JSON.parse(this.responseText);
      console.log(obj);
      let len = obj.length;
      console.log(len);
      let index = Math.round(Math.random() * len);
      console.log(index);
      let str = `<h1 id="card-header">
       Quotes of the Day !
        </h1>
        <div id="card-body">
            ${obj[index].text}
            </div>
            <p id="author">${obj[index].author}</p>
        `;

      card.innerHTML = str;
    } else {
      card.innerHTML = `<h1>Nothing Found !</h1>`;
    }
  };
  xhr.send();
}
