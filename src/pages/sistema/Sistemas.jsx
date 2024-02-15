import React from "react";
import { StringHTML } from "../../components/StringHTML";
import "../Main.modules.css"
import axios from "axios";

const Sistemas = () => {
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {
            const response = await axios.post(`https://apps.tre-ce.jus.br/api-portal-de-compras/sistemas`)
            setPost(response.data)
        }
        getPost();
    },[])

    if (!post) return "No post!"

    return (
        <div>
          

            <div className="flex flex-auto text-xl">
                <StringHTML htmlString={post.data} />
            </div>
        </div>

    );
}
export default Sistemas;
