casper.test.begin("Pesquisa por endereço deve retornar resultados", 2, function(test) {

	casper.start("http://www.buscacep.correios.com.br/sistemas/buscacep/buscaLogBairro.cfm");

	casper.then(function() {
		casper.fill("form#Geral", {
			"UF": "RJ",
			"Localidade": "São Paulo",
			"Bairro": "Copacabana",
		}, false);
	});

	casper.then(function() {
		casper.click("input[type='submit']");
	});

	casper.then(function() {
		casper.test.assertTextExists("DADOS ENCONTRADOS COM SUCESSO.", "Texto de dados encontrados existe.");
		casper.test.assertVisible("table.tmptabela", "A tabela de resultados existe.");
	});

	casper.run(function() {
		test.done();
	});

});
