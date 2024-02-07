import React from "react";
import axios from "axios";
import { StringHTML } from "../../components/StringHTML";
import { useParams } from "react-router-dom";

const DContratacoes = () => {
    const {rota} = useParams();
    
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {

            const response = await axios.post(`http://cevmdocker-hmg-01.tre-ce.gov.br:1503/contratacoes/${rota}`)
            setPost(response.data)
        }
        getPost();
    },[rota])

    if (!post) return "No post!"

    return(
        <div>
        <p class="font-bold text-3xl text-center"> 
        Aqui está a estrutura da página de contratações

        </p>            
        
        <div className="flex flex-auto text-xl items-center">
                {/* <Sidebar />  */}
                <StringHTML htmlString={post.data} />
        </div>
        </div>
    );
}
export default DContratacoes;