const form = document.querySelector("form");
const finalresult = document.querySelector(".finalresult");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
let incomeempty = false;
let extraempty = false;
let deductionempty = false;
let ageempty = false;
let validincome = 0;
let validextra = 0;
let validage = 0;
let validdeduction = 0;
let result = 0;
const close = document.querySelector(".close");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const income = document.querySelector(".income").value;
  const extra = document.querySelector(".extra").value;
  const age = document.querySelector(".age").value;
  const deduction = document.querySelector(".deduction").value;
  incomeempty = income === "";
  extraempty = extra === "";
  ageempty = age === "";
  deductionempty = deduction === "";
  const incomevalue = income.trim();
  validincome = /^\d+$/.test(incomevalue) ? parseInt(incomevalue) : NaN;
  const extraval = extra.trim();
  validextra = /^\d+$/.test(extraval) ? parseInt(extraval) : NaN;
  const ageval = age.trim();
  validage = /^\d+$/.test(ageval) ? parseInt(ageval) : NaN;
  const deductionval = deduction.trim();
  validdeduction = /^\d+$/.test(deductionval) ? parseInt(deductionval) : NaN;

  if (
    !isNaN(validincome) &&
    !isNaN(validextra) &&
    !isNaN(validage) &&
    !isNaN(validdeduction)
  ) {
    const total = validincome + validextra - validdeduction;
    if (total < 800000) {
      result = total;
    } else if (total >= 800000) {
      if (validage < 40) {
        result = 0.3 * total;
      } else if (validage >= 40 && validage < 60) {
        result = 0.4 * total;
      } else {
        result = 0.1 * total;
      }
    }
    second.innerHTML = result;
    if (total > 800000) {
      third.innerHTML = "after tax deductions";
    }
    finalresult.style.display = "flex";
  } else {
    if (incomeempty) {
      document.querySelector("#incomeempty").style.display = "block";
    } else {
      document.querySelector("#incomeempty").style.display = "none";
    }
    if (extraempty) {
      document.querySelector("#extraemptybox").style.display = "block";
    } else {
      document.querySelector("#extraemptybox").style.display = "none";
    }
    if (ageempty) {
      document.querySelector("#ageemptybox").style.display = "block";
    } else {
      document.querySelector("#ageemptybox").style.display = "none";
    }
    if (deductionempty) {
      document.querySelector("#deductionemptybox").style.display = "block";
    } else {
      document.querySelector("#deductionemptybox").style.display = "none";
    }
  }
});

close.addEventListener("click", () => {
  finalresult.style.display = "none";
});

function hl() {
  const gross = document.querySelector("#gross");
  const grossimg = document.querySelector("#grossbox");

  gross.addEventListener("mouseover", function () {
    grossbox.style.display = "block";
  });

  gross.addEventListener("mouseout", function () {
    grossbox.style.display = "none";
  });

  let position = gross.getBoundingClientRect();
  grossimg.style.left = `${position.left}px`;
  grossimg.style.top = `${position.top - 100}px`;

  const extrabox = document.querySelector("#extrabox");
  const extraincome = document.querySelector("#extraincome");
  let position2 = extraincome.getBoundingClientRect();
  extrabox.style.left = `${position2.left}px`;
  extrabox.style.top = `${position2.top - 100}px`;

  extraincome.addEventListener("mouseover", function () {
    extrabox.style.display = "block";
  });

  extraincome.addEventListener("mouseout", function () {
    extrabox.style.display = "none";
  });

  const ageicon = document.querySelector("#ageicon");
  const agebox = document.querySelector("#agebox");
  let position3 = ageicon.getBoundingClientRect();
  agebox.style.left = `${position3.left}px`;
  agebox.style.top = `${position3.top - 80}px`;

  ageicon.addEventListener("mouseover", function () {
    agebox.style.display = "block";
  });

  ageicon.addEventListener("mouseout", function () {
    agebox.style.display = "none";
  });

  const deductionicon = document.querySelector("#deductionicon");
  const deductionbox = document.querySelector("#deductionbox");
  let position4 = deductionicon.getBoundingClientRect();
  deductionbox.style.left = `${position4.left}px`;
  deductionbox.style.top = `${position4.top - 140}px`;

  deductionicon.addEventListener("mouseover", function () {
    deductionbox.style.display = "block";
  });
  deductionbox.addEventListener("mouseout", function () {
    deductionbox.style.display = "none";
  });

  const emptyicon = document.querySelector("#emptyicon");
  const emptybox = document.querySelector("#incomeempty");
  let position5 = emptyicon.getBoundingClientRect();
  emptybox.style.left = `${position5.left}px`;
  emptybox.style.top = `${position5.top - 75}px`;

  emptyicon.addEventListener("mouseover", function () {
    emptybox.style.display = "block";
  });
  emptyicon.addEventListener("mouseout", function () {
    emptybox.style.display = "none";
  });

  const extraicon = document.querySelector("#extraicon");
  const extraemptybox = document.querySelector("#extraemptybox");
  let position6 = extraicon.getBoundingClientRect();
  extraemptybox.style.left = `${position6.left}px`;
  extraemptybox.style.top = `${position6.top - 75}px`;

  extraicon.addEventListener("mouseover", function () {
    extraemptybox.style.display = "block";
  });
  extraicon.addEventListener("mouseout", function () {
    extraemptybox.style.display = "none";
  });

  const ageemptyicon = document.querySelector("#ageempty");
  const ageemptybox = document.querySelector("#ageemptybox");
  let position7 = ageemptyicon.getBoundingClientRect();
  ageemptybox.style.left = `${position7.left}px`;
  ageemptybox.style.top = `${position7.top - 75}px`;

  ageemptyicon.addEventListener("mouseover", function () {
    ageemptybox.style.display = "block";
  });
  ageemptyicon.addEventListener("mouseout", function () {
    ageemptybox.style.display = "none";
  });

  const deductionemptyicon = document.querySelector("#deductionempty");
  const deductionemptybox = document.querySelector("#deductionemptybox");
  let position8 = deductionemptyicon.getBoundingClientRect();
  deductionemptybox.style.left = `${position8.left}px`;
  deductionemptybox.style.top = `${position8.top - 75}px`;

  deductionemptyicon.addEventListener("mouseover", function () {
    deductionemptybox.style.display = "block";
  });
  deductionemptyicon.addEventListener("mouseout", function () {
    deductionemptybox.style.display = "none";
  });
}

window.addEventListener("load", hl);
window.addEventListener("resize", hl);
