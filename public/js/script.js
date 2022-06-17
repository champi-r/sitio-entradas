const mostExpected = document.getElementById("most-expected");
const comming = document.getElementById("comming");
const div = document.createElement('div');
let aux = [];
let result = '';

fetch("./eventdata.json")
    .then((response) => response.json())
    .then((json) => {
        result = json.filter((ev) => ev.section.includes('most-expected'));
        result.slice(0,6).forEach((ev) => {
            const div = document.createElement('div')
            div.innerHTML = `
            <img src="${ev.cardImg}" class="card-img" alt="...">
            <div class="card-img-overlay flex-column">
              <p class="card-date ${ev.class}">${ev.category}</p>
              <div class="flex-row">
                <a href="#">
                  <i class="fa-solid fa-circle-info"></i>
                </a>
                <a class="btn btn-primary" href="./public/pages/event.html" role="button">Comprar</a>
              </div>
            </div>
            `
            div.classList.add('expected','card', 'bg-dark', 'text-white');
            mostExpected.append(div);
        });
        });

fetch("./eventdata.json")
.then((response) => response.json())
.then((json) => {
    result = json.filter((ev) => ev.section.includes('comming'));
    result.slice(0,6).forEach((ev) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <img src="${ev.cardImg}" class="card-img" alt="...">
        <div class="card-img-overlay flex-column">
          <p class="card-date ${ev.class}">${ev.category}</p>
          <div class="flex-row">
            <a href="#">
              <i class="fa-solid fa-circle-info"></i>
            </a>
            <a class="btn btn-primary" href="./public/pages/event.html" role="button">Comprar</a>
          </div>
        </div>
        `
        div.classList.add('expected','card', 'bg-dark', 'text-white');
        comming.append(div);
    });
    });

