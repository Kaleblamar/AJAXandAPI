console.log(`Sup Globe Peeps?`);

// AJAX and APIs Exercise

// 1
const first = document.querySelector("#first");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
first.append(p1);
first.append(p2);
const oneAJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

const jokeJS1 = JSON.parse(oneAJSON);
console.log(jokeJS1);

//1b
p1.innerText = jokeJS1.setup;
//1c
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector("#second");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
second.append(p3);
second.append(p4);

//2a

const activity = axios
  .get(`https://www.boredapi.com/api/activity`)

  .then((result) => {
    console.log(`result was successful`);
    activityjs2 = result.data;
    p3.innerText = activityjs2.type;
    p4.innerText = activityjs2.activity;
  })
  .catch((err) => {
    console.log(`failed to get`);
    console.log(err);
  });

// 3
const third = document.querySelector("#third");
const p5 = document.createElement("p");
const p6 = document.createElement("p");
third.append(p5);
third.append(p6);

const activityjs3 = axios.get(`https://www.boredapi.com/api/activity`);

async function activityFunc() {
  try {
    const activityjs3 = await axios.get(
      `https://www.boredapi.com/api/activity`
    );

    p5.innerText = activityjs3.data.activity;
    p6.innerText = activityjs3.data.type;
  } catch (error) {
    console.log(`failed`);
    console.log(err);
  }
}
activityFunc();
// 4
const fourth = document.querySelector("#fourth");
const p7 = document.createElement("p");
fourth.append(p7);
// https://www.tvmaze.com/api
async function tvmazeFunc() {
  try {
    const finalEp = await axios.get(
      `https://api.tvmaze.com/singlesearch/shows?q=Mandalorian&embed=episodes`
    );
    console.log(`result successful`);
    p7.innerText = finalEp.data._embedded.episodes[23].name;
  } catch (error) {
    console.log(`failed`);
    console.log(err);
  }
}
tvmazeFunc();

const img = document.createElement(`img`);
const body = document.body;

async function pika() {
  try {
    const pikaPic = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/pikachu`
    );
    img.src = pikaPic.data.sprites.front_shiny;
    body.append(img);
    console.log(`bonus successful`);
  } catch (err) {
    console.log(`failed`);
    console.log(err);
  }
}

pika();
