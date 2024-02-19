import React from "react";
import axios from "axios";
import { StringHTML } from "../../components/StringHTML";
import { useParams } from "react-router-dom";
import "../Main.modules.css"
import Esqueleto_de_Loading from "../../components/Esqueleto_de_Loading";

const FolderContent = ({ data }) => {
    return (
        <ul>
            {data.map((item, index) => (
                <li key={index}>
                    {Object.keys(item).map((key) => (
                        <a href={item[key]}>{key}</a>
                    ))}
                </li>
            ))}
        </ul>
    );
};

const DFornecedores = () => {
    const { rota } = useParams();
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        async function getPost() {
            const response = await axios.post(`https://apps.tre-ce.jus.br/api-portal-de-compras/fornecedores/${rota}`);
            setPost(response.data);
        }
        getPost();
    }, [rota]);

    if (!post) return <Esqueleto_de_Loading/>;

    return (
        <div>
            <p className="font-bold text-3xl text-center"></p>
            <div id="content" className="flex flex-auto text-xl items-center">
                {post.tipo === "html" ? (
                    <StringHTML htmlString={post.data} />
                ) : post.tipo === "Folder" ? (
                    <FolderContent data={post.data} />
                ) : null}
            </div>
        </div>
    );
}
export default DFornecedores;