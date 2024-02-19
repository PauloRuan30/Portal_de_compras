import React from "react";
import { StringHTML } from "../../components/StringHTML";
import axios from "axios";
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

const Fornecedores = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        async function getPost() {
            const response = await axios.post(`https://apps.tre-ce.jus.br/api-portal-de-compras/fornecedores`);
            setPost(response.data);
        }
        getPost();
    }, []);

    if (!post) return <Esqueleto_de_Loading/>;

    return (
        <main>
            <div>
                <p class="font-bold text-3xl text-center items-center py-10"></p>
                <div id="content" className="flex flex-auto text-xl items-center">
                    {post.tipo === "html" ? (
                        <StringHTML htmlString={post.data} />
                    ) : post.tipo === "Folder" ? (
                        <FolderContent data={post.data} />
                    ) : null}
                </div>
            </div>
        </main>
    );
}
export default Fornecedores;
