
/* ================== function to manipulate the code ahead (search address) throughtout all active cells ================== */

function onEdit(){
    
var current_sheet = SpreadsheetApp.getActive().getSheetName();

if(current_sheet == "Página1"){

var active_cells = SpreadsheetApp.getActive().getSheetByName("Página1");
var row = active_cells.getActiveCell().getRow();
var column = active_cells.getActiveCell().getColumn();

if(row > 1 && column == 1){
  search_address();
}

}

}


/* =============================== function to make a request on postcode number added ======================================= */

function search_address() {
  
var current_sheet = SpreadsheetApp.getActiveSpreadsheet();
var sheet = current_sheet.getSheetByName("Página1");
var row = sheet.getActiveCell().getRow();
var post_code = sheet.getRange(row,1).getValue();

// whether postcode cell is blank, a false boolean aftermath will be given and all cells will be cleared
    
if(post_code == ""){
  sheet.getRange(row,2,1,6).clearContent();
  return false;
}
    
var post_code = post_code.replace(/\D/g, '');
var check_post_code = /^[0-9]{8}$/;

// whether postcode cell is filled, it does a fetch request in the url below    
    
if(post_code != ""){

  if(check_post_code.test(post_code)){

    var url = "http://viacep.com.br/ws/" + post_code + "/json/";
    var comeback = UrlFetchApp.fetch(url);
    var json = comeback.getContentText();
    var data = JSON.parse(json);

// as the postcode is found, it seeks for the params below aside to "data"
      
    if(data.logradouro != null){

        sheet.getRange(row,2).setValue(data.logradouro);
        sheet.getRange(row,4).setValue(data.complemento);
        sheet.getRange(row,5).setValue(data.bairro);
        sheet.getRange(row,6).setValue(data.localidade);
        sheet.getRange(row,7).setValue(data.uf);
        
    }

  }
}

}
