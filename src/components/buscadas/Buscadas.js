import axios from "axios";
import { useEffect, useState } from "react";

const Buscadas = () => {
    const [buscadas, setBuscadas] = useState([])
    
    useEffect(()=>{
    axios.get('https://apipdtc.herokuapp.com/bulldog/buscadas')
    .then(resp=>{
        setBuscadas(resp.data)
         })
},[])
    return ( 
        <div className="justify-content-around">
            <h1>Las mas Buscadas</h1>
        <div className="d-flex justify-content-between m-5">
            
            {buscadas.map(uno => (
                <div className="card m-2" style={{width: "18rem;"}}>
                <img className="card-img-top h-3 w-3" src={require(`../../assets/img/buscadas/${uno.nombre}.png`)} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{uno.nombre}</h5>
                  <div className="card-text">{uno.ingredientes.map(uno =>(
                      <h6>{uno}</h6>
                  ))}</div>
                  <a href="#" className="btn btn-primary">comprar</a>
                </div>
              </div>
            ))}

        </div>
        </div>
     );
}
 
export default Buscadas;