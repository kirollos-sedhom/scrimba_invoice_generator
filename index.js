const washbtn = document.querySelector("#wash");
const mowbtn = document.querySelector("#mow");
const pullbtn = document.querySelector("#pull");
const smol = document.querySelector("#smol");
const smolprice = document.querySelector("#smolprice");
const finalpriceelement = document.querySelector("#finalprice");
const send = document.querySelector("#send");
// washbtn.addEventListener("click", addtasktolist(this));
// mowbtn.addEventListener("click", addtasktolist(this));
// pullbtn.addEventListener("click", addtasktolist(this));
let washed = false;
let mowed = false;
let pulled = false;
let taskslist = [];
let willpay = 0;

function addtasktolist(arg) {
  let taskobject = {};
  if (arg.id === "wash") {
    if (washed === false) {
      taskobject = {
        id: "wash",
        content: `<li class="service_name">Wash Car <p class="remove" id="rmwash" onclick="removetaskfromlist(this);">remove</p></li> `,
        price: `<li class="service_price">$10</li>`,
      };
      willpay += 10;
      taskslist.push(taskobject);
      viewtasks();
      washed = true;
    }

    // alert(taskobject.content);
    // priceobject = { id: "wash", };
    // taskslist.push(taskobject)
    // priceslist.push()
    // // alert(priceobject.price);
    // pricenow += 10;
    // totalpay.textContent = `$ ${pricenow}`;
  } else if (arg.id === "mow") {
    if (mowed === false) {
      taskobject = {
        id: "mow",
        content: `<li class="service_name">Mow Lawn <p class="remove" id="rmmow" onclick="removetaskfromlist(this);">remove</p></li>`,
        price: `<li class="service_price">$20</li>`,
      };
      willpay += 20;
      taskslist.push(taskobject);
      viewtasks();
      mowed = true;
    }
  } else {
    if (pulled === false) {
      taskobject = {
        id: "pull",
        content: `<li class="service_name">Pull Weeds <p class="remove" id="rmpull" onclick="removetaskfromlist(this);">remove</p></li>`,
        price: `<li class="service_price">$30</li>`,
      };
      willpay += 30;
      taskslist.push(taskobject);
      viewtasks();
      pulled = true;
    }
  }
}
function removetaskfromlist(params) {
  // find index of the (will be removed) item
  if (params.id === "rmwash") {
    for (let i = 0; i < taskslist.length; i++) {
      if (taskslist[i].id === "wash") {
        taskslist.splice(i, 1);
        washed = false;
        willpay -= 10;
        viewtasks();
      }
    }
  } else if (params.id === "rmmow") {
    for (let i = 0; i < taskslist.length; i++) {
      if (taskslist[i].id === "mow") {
        taskslist.splice(i, 1);
        mowed = false;
        willpay -= 20;
        viewtasks();
      }
    }
  } else {
    for (let i = 0; i < taskslist.length; i++) {
      if (taskslist[i].id === "pull") {
        taskslist.splice(i, 1);
        pulled = false;
        willpay -= 30;
        viewtasks();
      }
    }
  }
}
function viewtasks() {
  let viewedtasks = "";
  let pricetotal = "";
  for (let index = 0; index < taskslist.length; index++) {
    const element = taskslist[index];
    viewedtasks += element.content;
    pricetotal += element.price;
  }
  smol.innerHTML = viewedtasks;
  smolprice.innerHTML = pricetotal;
  finalpriceelement.innerHTML = "$" + willpay;
}
send.addEventListener("click", myalert);
function myalert() {
  let message = `Thanks for using Carlo's services!`;
  alert(message);
}
