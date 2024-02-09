import React from "react";
import axios from "axios";
import { StringHTML } from "../../components/StringHTML";
import { useParams } from "react-router-dom";
import "../Main.modules.css"

const DLicitacoes = () => {
    const {rota} = useParams();
    
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {

            const response = await axios.post(`http://cevmdocker-hmg-01.tre-ce.gov.br:1503/licitacoes/${rota}`)
            setPost(response.data)
        }
        getPost();
    },[rota])

    if (!post) return "No post!"

    return(
        <div>
        <p className="font-bold text-3xl text-center"> 
        Aqui está a estrutura da página de Licitações

        </p>            
        <div id="content" className="flex flex-auto text-xl items-center">
                <StringHTML htmlString={post.data} />
            </div>
        </div>

    );
}
export default DLicitacoes;