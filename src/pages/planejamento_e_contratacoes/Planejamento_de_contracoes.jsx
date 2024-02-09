import React from "react";
import { StringHTML } from "../../components/StringHTML";
import "../Main.modules.css"
import axios from "axios";
import DyBanner from "../../components/pages_banners/Dynamic_Banner";

const Planejamento = () => {
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {
            const response = await axios.post(`http://cevmdocker-hmg-01.tre-ce.gov.br:1503/planejamento-de-contratacoes/planejamento-de-contratacoes`)
            setPost(response.data)
        }
        getPost();
    },[])

    if (!post) return "No post!"

    return (
        <div>
            <div className="flex-auto text-xl">
                <StringHTML htmlString={post.data} />
            </div>
        </div>

    );
}
export default Planejamento;
