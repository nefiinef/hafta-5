const drums = document.querySelectorAll(".drum");
const image = document.querySelector("img");
const boom = document.querySelector('[data-sound="boom"]');
const clap = document.querySelector('[data-sound="clap"]');
const hihat = document.querySelector('[data-sound="hihat"]');
const kick = document.querySelector('[data-sound="kick"]');
const openhat = document.querySelector('[data-sound="openhat"]');
const ride = document.querySelector('[data-sound="ride"]');
const snare = document.querySelector('[data-sound="snare"]');
const tink = document.querySelector('[data-sound="tink"]');
const tom = document.querySelector('[data-sound="tom"]');

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    const soundName = drum.getAttribute("data-sound");
    const audio = new Audio(`./assets/audio/${soundName}.wav`);
    audio.currentTime = 0;
    audio.play();
  });
});

boom.addEventListener("click", () => {
  image.classList.toggle("drumA");
  setTimeout(() => {
    image.classList.remove("drumA");
  }, 1000);
});

clap.addEventListener("click", () => {
  image.classList.toggle("drumS");
  setTimeout(() => {
    image.classList.remove("drumS");
  }, 1000);
});

hihat.addEventListener("click", () => {
  image.classList.toggle("drumD");
  setTimeout(() => {
    image.classList.remove("drumD");
  }, 1000);
});

kick.addEventListener("click", () => {
  image.classList.toggle("drumF");
  setTimeout(() => {
    image.classList.remove("drumF");
  }, 1000);
});

openhat.addEventListener("click", () => {
  image.classList.toggle("drumG");
  setTimeout(() => {
    image.classList.remove("drumG");
  }, 1000);
});

ride.addEventListener("click", () => {
  image.classList.toggle("drumH");
  setTimeout(() => {
    image.classList.remove("drumH");
  }, 1000);
});

snare.addEventListener("click", () => {
  image.classList.toggle("drumJ");
  setTimeout(() => {
    image.classList.remove("drumJ");
  }, 1000);
});

tink.addEventListener("click", () => {
  image.classList.toggle("drumK");
  setTimeout(() => {
    image.classList.remove("drumK");
  }, 1000);
});

tom.addEventListener("click", () => {
  image.classList.toggle("drumL");
  setTimeout(() => {
    image.classList.remove("drumL");
  }, 1000);
});

// Keyboard
const keyMap = {
  a: "boom",
  s: "clap",
  d: "hihat",
  f: "kick",
  g: "openhat",
  h: "ride",
  j: "snare",
  k: "tink",
  l: "tom",
};

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  const soundName = keyMap[key];
  if (!soundName) return;

  const btn = document.querySelector(`[data-sound="${soundName}"]`);
  if (!btn) return;

  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 250);
  btn.click();
});
