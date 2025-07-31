#!/usr/bin/env node

const fetch = require('node-fetch');

// Função principal para buscar curiosidade
async function buscarCuriosidade() {
  try {
    const url = `https://uselessfacts.jsph.pl/random.json?language=en`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(`\n📚 Curiosidade Aleatória:\n`);
    console.log(`"${dados.text}"`);
    console.log(`\n🌐 Fonte: ${dados.source_url || 'Desconhecida'}\n`);
  } catch (erro) {
    console.error("❌ Erro ao buscar curiosidade:", erro.message);
  }
}

const args = process.argv.slice(2);
if (args[0] && args[0] !== 'en') {
  console.log("⚠️  Por enquanto, a API só retorna curiosidades em inglês. Argumento ignorado.\n");
}

buscarCuriosidade();
