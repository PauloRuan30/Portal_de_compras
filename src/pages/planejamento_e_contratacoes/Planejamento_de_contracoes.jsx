import React from "react";
import { StringHTML } from "../../components/StringHTML";
import "../Main.modules.css"
import axios from "axios";
import "../Main.modules.css"


const Planejamento = () => {
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {
            const response = await axios.post(`https://apps.tre-ce.jus.br/api-portal-de-compras/planejamento-de-contratacoes/planejamento-de-contratacoes`)
            setPost(response.data)
        }
        getPost();
    },[])

    if (!post) return "No post!"

    return (
        <div>
            <div id="content" className="flex-auto text-xl">
                <StringHTML htmlString={post.data} />
            </div>
        </div>

    );
}
export default Planejamento;
