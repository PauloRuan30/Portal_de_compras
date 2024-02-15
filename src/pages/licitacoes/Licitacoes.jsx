import React from "react";
import { StringHTML } from "../../components/StringHTML";
import axios from "axios";
import "../Main.modules.css"

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
            
            </p>
            <div id="content"className="flex flex-auto text-xl items-center">
                <StringHTML htmlString={post.data} />
            </div>
        </div>
        </main>

    );
}
export default Licitacoes;
