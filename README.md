# 🧠 Perigos Complexos - Tormenta 20

Este projeto tem como objetivo organizar e exibir **Perigos Complexos** do sistema **Tormenta 20**, utilizando HTML, CSS, JavaScript e Bootstrap. Os dados são carregados automaticamente a partir de um arquivo JSON.

## 💥 O que são Perigos Complexos?

> "Enquanto perigos simples oferecem uma ameaça dentro de uma cena, **perigos complexos são uma cena por si só**. São uma boa opção para criar cenas de ação que não envolvam combate diretamente."

Os perigos podem ser:
- **Físicos** (ex: fugir de uma avalanche)
- **Mentais** (ex: escrever um tomo sob pressão)
- **Sociais** (ex: se portar numa festa da corte)

## 🧩 Funcionalidades

- Filtragem por:
  - **Origem** (livro)
  - **ND** (nível de desafio)
  - **Tipo** (físico, mental ou social)
- Imagens ilustrativas
- Interface com Bootstrap 5
- Dados carregados via arquivo JSON hospedado no GitHub

## 🌐 Como visualizar

Você pode abrir o `index.html` diretamente no navegador. O JavaScript irá buscar os dados automaticamente do JSON:

📄 [`perigos.json`](https://raw.githubusercontent.com/nicholemos/perigos/main/perigos.json)

> Para rodar localmente, certifique-se de estar usando um servidor local (como Live Server do VSCode), pois o `fetch` pode ser bloqueado por CORS ao abrir o arquivo diretamente.

## 📁 Estrutura do Projeto

perigos/ ├── index.html ├── style.css ├── script.js ├── perigos.json └── imagens/ └── Avalanche.png


## 🚧 Em desenvolvimento

Esse projeto está em construção e novos perigos serão adicionados futuramente. Sinta-se à vontade para contribuir ou sugerir melhorias!
