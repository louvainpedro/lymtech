const Validacoes = {
    nameValidation: (name)=> {
        if (name != '') {
            if (name.length > 3) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    },

    emailValidation: (email)=> {
        const regex =/\S+@\S+\.\S+/;
        return regex.test(email)
    },

    phoneValidation: (telefone)=> {
        var retorno = false;
        //cast para string
        if(typeof telefone != "string"){
        telefone = telefone.toString();
        }
        //limpa string para validacao
        telefone = telefone.replace(/\D/g,"");
        //aplica ER
        var valida = telefone.match(/^((5{2})?(\d{2})?([987])?(\d{4})(\d{4}))$/);
        if(valida){
        //prefixo e sufixo já é um telefone
            if(valida[5] && valida[6]){
            retorno = fone = valida[5]+"-"+valida[6];
            //caso celular
            if(valida[4]){
                 retorno = valida[4]+fone;
            }
            if(valida[2] && valida[3] || valida[3]){
                        retorno = valida[2]+"("+valida[3]+")"+fone;
                //caso celular
                if(valida[4]){
                     retorno = valida[2]+"("+valida[3]+")"+valida[4]+fone;
                }
                 if(!valida[2]){
                                retorno = "("+valida[3]+")"+fone;
                    //caso celular
                    if(valida[4]){
                        retorno = "("+valida[3]+")"+valida[4]+fone;
                                }
                        }
                    }
            }
        }
        return retorno;
    }
}

module.exports = Validacoes;

