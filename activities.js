let actSel = "";
let getData = document.getElementById("search");
let apiurl = "https://www.boredapi.com/api/activity";
let answer = document.getElementById("todo");

const options = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];

function select() {
  actSel = document.querySelector("#actresp");
  var output = actSel.options[actSel.selectedIndex].value;
  //console.log(output);
  let actUrl = "";

  for (var i = 0; i < options.length; i++) {
    if (output == options[i]) {
      //console.log(options[i]);
      actUrl = "?type=" + options[i];
      //console.log(actUrl);
      apiurl = apiurl + actUrl;
     // console.log(apiurl);
    }
  }
  //console.log("here");
  //console.log(actUrl);
}

const access = document.querySelector("#access");
const accessout = document.querySelector(".access-output");

accessout.textContent = access.value;

access.addEventListener("input", function () {
  accessout.textContent = access.value;
});

function accessibility() {
  let accessUrl = "&accessibility=" + access.value;
  //console.log(accessUrl);
  apiurl = apiurl + accessUrl;
  //console.log(apiurl);
}

let min = document.getElementById('min');
let max = document.getElementById('max');

function getPrice () {
  let priceUrl = "&minprice=" + min.value + "&maxprice=" + max.value; 
  //console.log(priceUrl);
  apiurl = apiurl + priceUrl;
  //console.log(apiurl);

}




async function getInfo() {
  //const comb = "?type=social";
  //apiurl = apiurl + comb;

  try {
   // console.log(apiurl);
    const response = await fetch(apiurl);
    const data = await response.json();

    const { activity } = data;
    //console.log(activity);

    if (activity === undefined) {
      todo.innerHTML = "No available activities. Try again with different parameters";
      //console.log('try again');
    } else {
      todo.innerHTML = activity;
    }

  } catch (err) {
    //console.log(err);
  }
  /*
  console.log(apiurl);
  const response = await fetch(apiurl);
  const data = await response.json();

  const { activity } = data;
  console.log(activity);

  document.getElementById("todo").textContent = activity;
  */
}

getData.onclick = function () {
  apiurl = "";
  apiurl = "https://www.boredapi.com/api/activity";
  select();
  accessibility();
  getPrice();
  getInfo();
};
