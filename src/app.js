/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("btn").addEventListener("click", function() {
    location.reload();
  });
  let first = "Porque ";
  let adj = [
    "un complicado ",
    "un enojado ",
    "un triste ",
    "un loco ",
    "un contento ",
    "un simpatico ",

    "un viejo "
  ];
  let noun = [
    "payaso ",
    "policia ",
    "perro ",
    "vendedor ",
    "dconductor ",
    "comediante ",
    "vecino "
  ];
  let action = [
    "rompió mí ",
    "trancó mí ",
    "desarmó mí ",
    "incendió mí ",
    "arruinó mí ",
    "desató mí ",
    "robó mí ",
    "pateó mí "
  ];
  let possetion = [
    "puerta ",
    "auto ",
    "reloj ",
    "zapato ",
    "casa ",
    "ropa ",
    "llaves ",
    "computadora ",
    "telefono ",
    "comida "
  ];
  let where = [
    "en la calle",
    "en mi casa",
    "en mi camino",
    "en el frente de mi casa",
    "en el barrió",
    "en el estacionamiento",
    "en la parada de bus"
  ];

  // declaring random variables
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
};
