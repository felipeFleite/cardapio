import { useState } from "react";
import "../src/globals.css";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer, toast} from "react-toastify"
export default function App() {

    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            item: "Hambúrguer",
            imagem: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg",
            preco: "R$ 25,99"
        },
        {
            id: 2,
            item: "Coca-cola 350ml",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4S15squn95k7qtrVOpMX1MOJGe48y4B7FQ&s",
            preco: "R$ 5,99"
        },
        {
            id: 3,
            item: "Batatas fritas",
            imagem: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/05/batata_frita_destaque_ilustrativo_zona_sul.jpg",
            preco: "R$ 8,99"
        },
        {
            id: 4,
            item: "Suco de Frutas",
            imagem: "https://helenalunardelli.com.br/wp-content/uploads/2013/02/sucos.jpg",
            preco: "R$ 8,99"
        },
    ]);

    const [listaPedidos, setlistaPedidos] = useState([])
    
    const adicionarPedido = (item) => {
        toast("Produto adicionado😊")
        setlistaPedidos([...listaPedidos, item])
    }
    const removerPedido = (id) => {
        let removeu = false
        let listaX = listaPedidos.filter((produto)=> {
            if(removeu == false){
                if(produto.id !== id) {
                    return produto
                }
                else{
                    toast(`Você removeu ${produto.item} 😔`)
                    removeu = true
                    return null
                }
            }else{
                return produto
            }
        })
        setlistaPedidos(listaX)
    }
    return (
        <div className="bloco-principal">
            <div className="bloco-produtos">
              {
                listaProdutos.map((produto)=> 
                <div key={produto.id}>
                    <img src = {produto.image} alt={produto.item}/>
                    <p>{produto.item}</p>
                    <p>{produto.preco}</p>
                    <button onClick={()=> adicionarPedido(produto)}>ADICIONAR</button>
                </div>
                )
              }
            </div>
            <div className="bloco-pedidos">
                <p>Meus Pedidos</p>
                {listaPedidos.map((produto)=> 
                <table key={produto.id}>
                <tr>
                    <td>
                    {produto.item}
                    </td>
                    <td>
                    {produto.preco}
                    </td>
                    <td>
                    <button onClick={()=> removerPedido(produto.id)}>X</button>
                    </td>
                </tr>
                </table>       
            )}
            </div>
            <ToastContainer/>
        </div>
    );
}