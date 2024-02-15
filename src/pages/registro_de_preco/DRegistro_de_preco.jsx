import React from "react";
import axios from "axios";
import { StringHTML } from "../../components/StringHTML";
import { useParams } from "react-router-dom";

const DRegistroPreco = () => {
    const {rota} = useParams();
    
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {

            const response = await axios.post(`https://apps.tre-ce.jus.br/api-portal-de-compras/sistema-de-registro-de-preco/${rota}`)
            setPost(response.data)
        }
        getPost();
    },[rota])

    if (!post) return "No post!"

    return(
        <div>
        <p class="font-bold text-3xl text-center"> 
        Aqui está a estrutura da página de Licitações

        </p>            
        
        <div className="flex flex-auto text-xl items-center">
                <StringHTML htmlString={post.data} />
        </div>
        </div>

    );
}
export default DRegistroPreco;