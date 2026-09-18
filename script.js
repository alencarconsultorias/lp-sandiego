// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}));

// Sticky nav shadow
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,0.08)' : 'none';
});

// Form handler — monta a mensagem e envia para o WhatsApp (sem backend)
function handleForm(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const nome = data.get('nome') || '';
  const telefone = data.get('telefone') || '';
  const tipo = data.get('tipo') || '';
  const email = data.get('email') || '';
  const mensagem = data.get('mensagem') || '';

  let texto = `Olá, meu nome é ${nome}.`;
  if (tipo) texto += ` Preciso de ajuda com um caso de: ${tipo}.`;
  texto += ` Meu telefone é ${telefone}.`;
  if (email) texto += ` Meu e-mail é ${email}.`;
  if (mensagem) texto += ` ${mensagem}`;

  window.open(`https://wa.me/5512988481288?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  e.target.reset();
}
