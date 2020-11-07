const textPath1 = document.querySelector("#text-path1");
const textPath2 = document.querySelector("#text-path2");

const h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

document.addEventListener("scroll", e => {
  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 40;
  textPath1.setAttribute("startOffset", (-percent * 20) + 400);
  textPath2.setAttribute("startOffset", (-percent * 33) + 700);
});

//starting position on load.
textPath1.setAttribute("startOffset", 400);
textPath2.setAttribute("startOffset", 700);
