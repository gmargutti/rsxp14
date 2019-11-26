// Onde vai chamar a API Total Voice
import axios from 'axios'
const url = process.env.REACT_APP_TOTALVOICE_ENDPOINT

const sendSms = ({numero_destino, mensagem, resposta_usuario = false, tags = '', 
                    multi_sms = true, data_criacao = ''}) => {
    return axios.post(`${url}/sms`, {
        numero_destino,
        mensagem,
        resposta_usuario,
        tags,
        multi_sms,
        data_criacao,
    }, {
        headers: {
            'Access-Token': process.env.REACT_APP_TOTALVOICE_ACCESS_TOKEN
        }
    })
}

export default {
    sendSms,
}