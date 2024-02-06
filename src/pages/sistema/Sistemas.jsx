import React from "react";
import { StringHTML } from "../../components/StringHTML";
import Sidebar from "../../components/Sidebar";
import "../Main.modules.css"
import axios from "axios";

const Sistemas = () => {
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {
            const response = await axios.post(`http://cevmdocker-hmg-01.tre-ce.gov.br:1503/sistemas`)
            setPost(response.data)
        }
        getPost();
    },[])

    if (!post) return "No post!"

    return (
        <div>
            <p class="font-bold text-3xl text-center items-center py-10">
                Aqui está a estrutura da página de Planejamento Contratações
            </p>

            <div className="flex flex-auto text-xl">
                <StringHTML htmlString={post.data} />
            </div>
        </div>

    );
}
export default Sistemas;
