// ======= CONFIGURAÇÃO DE PRAZO DA OFERTA =======
// Edite esta data para atualizar a barra de escassez e o contador do Plano Completo.
const DATA_LIMITE = new Date("2026-08-01T23:59:59");

function formatarDataLonga(d){
  return d.toLocaleDateString('pt-BR', { day:'2-digit', month:'long' });
}
document.getElementById('data-barra').textContent = formatarDataLonga(DATA_LIMITE);
document.getElementById('data-planos').textContent = formatarDataLonga(DATA_LIMITE);

function atualizarContador(){
  const agora = new Date();
  let diff = DATA_LIMITE - agora;
  const el = document.getElementById('contador');
  if(diff <= 0){ el.textContent = "00:00:00"; return; }
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  el.textContent = String(h).padStart(2,'0') + ":" + String(m).padStart(2,'0') + ":" + String(s).padStart(2,'0');
}
atualizarContador();
setInterval(atualizarContador, 1000);

// ======= TOAST DE COMPRA (exemplo estático — trocar por integração real de notificações) =======
const toast = document.getElementById('toast');
setTimeout(() => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 6000);
}, 4000);
