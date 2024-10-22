function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string vazia
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhum conteúdo foi inserido.</p><p>Por favor, insira alguma informação relativa a compra de serviços.</p>"
      return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item (dado) da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.titulo.toLowerCase();
      tags = dado.titulo.toLowerCase();
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p><a href="#" target="_blank">${dado.link}</a></p>
        </div>
      `;
      }
      console.log(dado.titulo.includes(campoPesquisa));
    }

    if (!resultados) {
      resultados = "<p>Nenhuma informação encontrada.</p>";
    }

    // Insere o HTML gerado na seção selecionada, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }