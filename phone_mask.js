function phone_mask(valor) {

        var digito = valor.replace(/\D/g, "");
        digito = digito.replace(/^0/, "");
        if (digito.length > 10) {
            digito = digito.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (digito.length > 5) {
            digito = digito.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (digito.length > 2) {
            digito = digito.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            digito = digito.replace(/^(\d*)/, "$1");
        }
        return digito;

      }
