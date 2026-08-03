// ======= CONFIGURAÇÃO DE PRAZO DA OFERTA =======
// A oferta sempre expira ao final do dia atual do visitante (recalculado a cada carregamento).
// Mude OFFSET_DIAS para dar mais dias de prazo (ex: 1 = expira amanhã).
const OFFSET_DIAS = 0;
const DATA_LIMITE = (() => {
  const d = new Date();
  d.setDate(d.getDate() + OFFSET_DIAS);
  d.setHours(23, 59, 59, 999);
  return d;
})();

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
