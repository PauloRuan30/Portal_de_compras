import React from "react";
import axios from "axios";
import { StringHTML } from "../../components/StringHTML";
import { useParams } from "react-router-dom";
import "../Main.modules.css"


const DPlanejamentoContratacoes = () => {
    const {rota} = useParams();
    
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {

            const response = await axios.post(`https://apps.tre-ce.jus.br/api-portal-de-compras/planejamento-de-contratacoes/${rota}`)
            setPost(response.data)
        }
        getPost();
    },[rota])

    if (!post) return "No post!"

    return(
        <div>
            <div id="content" className="flex-auto text-xl">
                <StringHTML htmlString={post.data} />
            </div>
        </div>
    );
}
export default DPlanejamentoContratacoes;