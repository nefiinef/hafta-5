let isim = prompt("Adınızı giriniz");
document.getElementById("myName").innerHTML = isim;

let clock = document.querySelector(".clock");
const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
function showTime() {
  const now = new Date();
  const saat = now.getHours().toString().padStart(2, "0");
  const dakika = now.getMinutes().toString().padStart(2, "0");
  const saniye = now.getSeconds().toString().padStart(2, "0");
  const gun = days[now.getDay()];

  clock.innerHTML = `${saat}:${dakika}:${saniye}:${gun}`;
}
setInterval(showTime, 1000);
showTime();
