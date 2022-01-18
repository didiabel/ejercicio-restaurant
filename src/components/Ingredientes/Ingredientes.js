import { useEffect, useState } from "react";
import axios from 'axios'
import './ingredientes.css'

const Ingredientes = () => {

    const [ingredientes, setIngredientes] = useState([])
    const [ingCompra, setIngCompra] = useState([])
    const [precio, setPrecio] = useState(350)

    useEffect(()=>{
        axios.get('https://apipdtc.herokuapp.com/bulldog/ingredientes')
        .then(resp=>{
            setIngredientes(resp.data)
             })
    },[])

    const agregar=(ingre, precionuevo)=>{
        setIngCompra([...ingCompra, ingre])
        setPrecio(precio+precionuevo)
    }
    const eliminar=(id, precioViejo)=>{
        setIngCompra(ingCompra.filter(indiv => indiv.id !== id))
        setPrecio(precio-precioViejo)
    }

    return ( 
    <div className="row">
        <div className="col-6">
    {ingredientes.map(ingre =>
    (<button onClick={()=>agregar({...ingre}, ingre.precio)} disabled={ingCompra.find(element => element.id == ingre.id ? true : false)} key={ingre.id} className="btn btn-warning d-flex justify-content-between align-items-center m-5" style={{width: "500px"}}><img className="h-1 w-1 img" src={require(`../../assets/img/ingredientes/${ingre.imagen}.png`)} ></img> {ingre.nombre} ${ingre.precio}</button>)
    
    )}
</div>
<div className="col-6">
    {ingCompra.length <= 0 ?
    ""
    :
    <>
    <div className="d-flex justify-content-between align-items-center m-5 border"><img className="h-1 w-1 img" src={require(`../../assets/img/ingredientes/Carne.png`)} ></img>carne $350</div>
    </>
    }
    {ingCompra?.map(ingred=>(
        <div className="d-flex justify-content-between align-items-center m-5 border"><img className="h-1 w-1 img" src={require(`../../assets/img/ingredientes/${ingred.imagen}.png`)} ></img>{ingred.nombre} ${ingred.precio} <button className="btn btn-danger" onClick={()=>eliminar(ingred.id, ingred.precio)}>eliminar</button></div>
    ) )}
    {precio == 350 ?
    <h2>Precio:</h2>
    :
    <h2 className="d-flex ">precio: ${precio}</h2>
    }
    </div>
    </div> 
    );
}
 
export default Ingredientes;