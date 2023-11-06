import { useEffect } from 'react';
import api from './../../api/tinkoffClient'

const InvestPage = () => {
    const tinkoff = async() =>{
        const response = await api.post('/tinkoff.public.invest.api.contract.v1.OperationsService/GetPortfolio',{
            "accountId": process.env.REACT_APP_TINKOFF_ACCOUNT_ID,
            "currency": "RUB"
          }, {headers:{Authorization:`Bearer ${process.env.REACT_APP_TINKOFF_TOKEN}`}})
        console.log(response)
      }
      useEffect(()=>{
        tinkoff()
      },[])
    return (
        <main className="main">
        <h1 className="main__header">Мои инвестиции</h1>
        </main>
    );
};

export default InvestPage;