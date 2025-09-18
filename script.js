document.addEventListener("DOMContentLoaded", function () {
  const dataNascimento = new Date(1985, 6, 31);
  const hoje = new Date();

  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = dataNascimento.getMonth();

  // Se o aniversário ainda não ocorreu este ano, diminui 1
  if (
    mesAtual < mesNascimento ||
    (mesAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())
  ) {
    idade--;
  }

  const idadeElemento = document.getElementById("idade");
  if (idadeElemento) {
    idadeElemento.textContent = idade;
    console.log("Idade atualizada para:", idade);
  } else {
    console.error("Elemento com ID 'idade' não encontrado!");
  }
});

// Smooth Scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Menu sanduíche toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-sanduiche");
  const menu = document.querySelector(".linksTopo");

  if (menuToggle && menu) {
    const toggleMenu = () => {
      menu.classList.toggle("ativo");
    };

    menuToggle.addEventListener("click", toggleMenu);
    menuToggle.addEventListener("touchstart", toggleMenu);
  } else {
    console.error("Elementos do menu não encontrados!");
  }

  // Fechar o menu ao clicar fora
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove("ativo");
    }
  });
});


// Adicionar sombra ao header durante a rolagem
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    // Ativa a sombra após rolar 50px
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});
