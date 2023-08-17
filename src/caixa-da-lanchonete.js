class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    const cardapio = {
      cafe: 3.0,
      chantily: 1.5,
      suco: 6.2,
      sanduiche: 6.5,
      queijo: 2.0,
      salgado: 7.25,
      combo1: 9.5,
      combo2: 7.5,
    };
    let valorTotal = 0;
    let carrinhoDeCompras = [];
    const metodosValidos = ["dinheiro", "debito", "credito"];
    if (metodosValidos.includes(metodoDePagamento) == false) {
      return "Forma de pagamento inválida!";
    }
    if (itens.length == 0) {
      return "Não há itens no carrinho de compra!";
    }
    for (let item of itens) {
      const [produto, qtde] = item.split(",");
      carrinhoDeCompras.push(produto);
    }
    for (let item of itens) {
      const [produto, qtde] = item.split(",");
      if (qtde == 0) {
        return "Quantidade inválida!";
      }

      if (!cardapio[produto]) {
        return "Item inválido!";
      }
      if (produto == "chantily") {
        if (!carrinhoDeCompras.includes("cafe")) {
          return "Item extra não pode ser pedido sem o principal";
        }
      }
      if (produto == "queijo") {
        if (carrinhoDeCompras.includes("sanduiche") == false) {
          return "Item extra não pode ser pedido sem o principal";
        }
      }
      valorTotal = valorTotal + cardapio[produto] * Number(qtde);
      console.log(valorTotal);
    }
    if (metodoDePagamento === "dinheiro") {
      valorTotal *= 0.95;
    } else if (metodoDePagamento === "credito") {
      valorTotal *= 1.03;
    }

    return `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
