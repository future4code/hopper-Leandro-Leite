import React from "react";
import axios from "axios"


class IntegracaoApi extends React.Component {

  pegarUsuarios = () => {

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
            Authorization: "Leandro-leite-hopper"
        }
    })
    .then((response)=>{
        console.log('Sucesso',
        response.data)
    })
    .catch((error)=>{
        console.log('Erro',
        error.response.data)
    })
   }

    render(){

        this.pegarUsuarios()

        return(
    <>
    </>
    
        )
    }
}



export default IntegracaoApi