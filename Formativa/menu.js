/*MENU*/ 
window.addEventListener("scroll", function(){
    var header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 400)
})

/*CADASTRO*/
document.querySelectorAll('.bt1').forEach(botao => {
  botao.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('cadastro').classList.remove('esconde');
  });
});

document.getElementById('fechar').addEventListener('click', function() {
    document.getElementById('cadastro').classList.add('esconde');
});


// Toggle do menu hamburguer sidebar
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const body = document.body;

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('aberto');
  body.classList.toggle('sidebar-aberto');

  // Opcional: alterar aria-label do botão para acessibilidade
  if (sidebar.classList.contains('aberto')) {
    menuBtn.setAttribute('aria-label', 'Fechar menu');
  } else {
    menuBtn.setAttribute('aria-label', 'Abrir menu');
  }
});
