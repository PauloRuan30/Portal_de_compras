import React from "react";
import { StringHTML } from "../../components/StringHTML";
import Sidebar from "../../components/Sidebar";
import axios from "axios";

const Licitacoes = () => {
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {

            const response = await axios.post(`http://cevmdocker-hmg-01.tre-ce.gov.br:1503/licitacoes/licitacoes`)
            setPost(response.data)
        }
        getPost();
    },[])

    if (!post) return "No post!"

    return (
        <main>
        <div>
            <p class="font-bold text-3xl text-center items-center py-10">
                Aqui está a estrutura da página de Licitações
            </p>
            <div className="flex flex-auto text-xl items-center">
                {/* <Sidebar />  */}
                <StringHTML htmlString={post.data} />
            </div>
        </div>
        </main>

    );
}
export default Licitacoes;
