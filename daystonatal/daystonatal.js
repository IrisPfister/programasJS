
const hoje = new Date();
const natal = new Date(hoje.getFullYear(), 11, 25); // Mês é 0-based (0 para janeiro, 11 para dezembro e 25 o dia do natal)
const um_dia = 1000 * 60 * 60 * 24; // Milissegundos em um dia

if (hoje.getMonth() == 11 && hoje.getDate() > 25) {
  natal.setFullYear(natal.getFullYear() + 1);
}

const dias = Math.ceil((natal.getTime() - hoje.getTime()) / um_dia);

console.log(`${dias} dia(s) para o natal`);