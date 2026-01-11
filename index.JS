const nameHeroi = ["Mulher Maravilha", "Homem de Ferro", "Capitão America"];
const xp = [5550, 7800, 9851];

function nivelPorXp(valor) {
  if (valor <= 1000) return "Ferro";
  if (valor <= 2000) return "Bronze";
  if (valor <= 5000) return "Prata";
  if (valor <= 7000) return "Ouro";
  if (valor <= 8000) return "Platina";
  if (valor <= 9000) return "Ascendente";
  if (valor <= 10000) return "Imortal";
  return "Radiante";
}

for (let i = 0; i < nameHeroi.length; i++) {
  console.log(`O Herói ${nameHeroi[i]} está no nível de: ${nivelPorXp(xp[i])}`);
}
