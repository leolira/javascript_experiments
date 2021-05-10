const agora = new Date()

function diaDaSemana(dia){
    const semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return semana[dia]
}

function mes(numMes){
    const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return mes[numMes]
}

function zeroEsquerda(num){
    return num >=10 ? num : `0${num}`
}

const dataAtual = `Hoje é ${diaDaSemana(agora.getDay())}, ${agora.getDate()} de ${mes(agora.getMonth())} de ${agora.getFullYear()} ${zeroEsquerda(agora.getHours())}:${zeroEsquerda(agora.getMinutes())}`
const setagemData = {
    dateStyle: 'full',
    timeStyle: 'short'
}
const dataAtualSimples = `Hoje é ${agora.toLocaleDateString('pt-BR', setagemData)}`

console.log(dataAtual)
console.log(dataAtualSimples)
