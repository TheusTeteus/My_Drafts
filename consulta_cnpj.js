function get_cnpj_infos(){
    
    var cnpj = $("#inputCpfCnpj").val()

    $.ajax({
        "url": `https://receitaws.com.br/v1/cnpj/${cnpj.replaceAll(".","").replaceAll("-","").replaceAll("/","")}`,
        "type": "GET",
        "dataType": "jsonp",
        "success": (data) => {
            //$("#inputNomeRazaoSocial").val(data.nome)
            //$("#inputAddress").val(data.logradouro + ', '+ data.numero + ' ' + data.complemento + ' - '+ data.bairro + ' - ' + data.municipio + ' - ' + data.uf)
            console.log(data)
        }
    })
}