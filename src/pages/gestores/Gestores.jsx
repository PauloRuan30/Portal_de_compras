import React from "react";
import { StringHTML } from "../../components/StringHTML";
import "../Main.modules.css"
import axios from "axios";

const Gestores = () => {
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {
            const response = await axios.post(`https://apps.tre-ce.jus.br/api-portal-de-compras/gestores`)
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
export default Gestores;
