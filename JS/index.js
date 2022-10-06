//Element Selection
const multiForm = document.querySelector("#multiplication_form");
const numberInput = document.querySelector("#number");
const multiplierInput = document.querySelector("#multiplier");
const multiTable = document.querySelector("#multiplication_operations");
const reload = document.querySelector("#reload");
const spanTitle = document.querySelector("#multiplication_title span");

//Functions
const createTable = (number, multiplier) => {
  multiTable.innerHTML = "";

  for (i = 1; i <= multiplier; i++) {
    const result = number * i;

    console.log(result);
    const template = `
    <div class="row">
        <div class="opearation">${number} x ${i} =</div>
        <div class="result"> ${result} </div>
    </div>
    `;

    const parser = new DOMParser();

    const HTMLTemplate = parser.parseFromString(template, "text/html");

    const row = HTMLTemplate.querySelector(".row");

    multiTable.appendChild(row);
  }

  spanTitle.innerText = number;
};

//Events
multiForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplier = +multiplierInput.value;

  if (!multiplicationNumber || !multiplier) return;

  createTable(multiplicationNumber, multiplier);
});

//Reload page to Calc again
reload.addEventListener("click", (e) => {
  e.preventDefault();

  document.location.reload(true);
});
