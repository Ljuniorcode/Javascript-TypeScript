//o fetch já retorna uma promise
//buscar recursos de forma assíncrona através da rede.

fetch(pagina4.html)
  .then((res) => {
    if (res !== 200) throw new Error("Deu ruim");
    return res.text();
  })
  .then((html) => console.log(html))
  .catch((e) => console.warn(e));

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);
    if (res.status !== 200) throw new Error("Deu ruim!");
    const html = await response.text();
    carregaResultado(html);
  } catch {
    (e) => console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
