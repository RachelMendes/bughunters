//Função que aumenta o tamanho da fonte
function changeSizePlus(){
	//variável x recebe todos os elementos do tipo parágrafo (tag 'p') 	
	var x = document.getElementsByTagName('p');
	var i; //declaração da variável auxiliar i
	/* 'for' percorre o documento encontrando todos os elementos do tipo parágrafo (tag 'p') 
	e alterando seu parâmetro 'fontSize' */	
	for (i = 0; i < x.length; i++) {
		x[i].style.fontSize = "20px";
	}	
}
	
//Função que diminui o tamanho da fonte	
function changeSizeMinus(){
	//variável x recebe todos os elementos do tipo parágrafo (tag 'p') 	
	var x = document.getElementsByTagName('p');
	var i; //declaração da variável auxiliar i
	/* 'for' percorre o documento encontrando todos os elementos do tipo parágrafo (tag 'p') 
	e alterando seu parâmetro 'fontSize' */	
	for (i = 0; i < x.length; i++) {
		x[i].style.fontSize = "12px";
	}	
}

//Função que restaura o tamanho da fonte	
function changeSizeDefault(){
	//variável x recebe todos os elementos do tipo parágrafo (tag 'p') 
	var x = document.getElementsByTagName('p');
	var i; //declaração da variável auxiliar i
	/* 'for' percorre o documento encontrando todos os elementos do tipo parágrafo (tag 'p') 
	e alterando seu parâmetro 'fontSize' */
	for (i = 0; i < x.length; i++) { 
		x[i].style.fontSize = "16px";
	}	
}

//Função que confirma recebimento de orçamento
function orcRecebido(){
	window.alert("Agradecemos sua mensagem. Retornaremos em breve.");
}