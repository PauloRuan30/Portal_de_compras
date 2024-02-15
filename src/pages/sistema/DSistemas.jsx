import React from "react";
import axios from "axios";
import { StringHTML } from "../../components/StringHTML";
import { useParams } from "react-router-dom";

const DSistemas = () => {
    const {rota} = useParams();
    
    const [post, setPost] = React.useState(null)

    React.useEffect(() =>
    {
        async function getPost()
        {

            const response = await axios.post(`https://apps.tre-ce.jus.br/api-portal-de-compras/sistemas/${rota}`)
            setPost(response.data)
        }
        getPost();
    },[rota])

    if (!post) return "No post!"

    return(
        <div>
               
        
        <div className="flex flex-auto text-xl items-center">
         
                <StringHTML htmlString={post.data} />
        </div>
        </div>

    );
}
export default DSistemas;