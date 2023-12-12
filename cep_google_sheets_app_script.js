function pesquisaCEP(){

var guia = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

for (var i=0;i<5000;i++){

var cep = guia.getRange(2+i,1).getValue() 
var cep = cep.replace(/\D/g, '');
var validacep = /^[0-9]{8}$/;

if (cep != ""){

  if (validacep.test(cep)){

    var url = "http://viacep.com.br/ws/" + cep + "/json/";
        var retorno = UrlFetchApp.fetch(url);
        var json = retorno.getContentText();
        var dados = JSON.parse(json);

        if(dados.logradouro != null){

            guia.getRange(2 + i, 2).setValue(dados.logradouro);
            guia.getRange(2 + i, 4).setValue(dados.complemento);
            guia.getRange(2 + i, 5).setValue(dados.bairro);
            guia.getRange(2 + i, 6).setValue(dados.localidade);
            guia.getRange(2 + i, 7).setValue(dados.uf);
            
        }

  }


}


}

}
