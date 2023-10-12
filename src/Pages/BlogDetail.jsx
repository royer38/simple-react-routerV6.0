import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetail = () => { 
//aca lo que hacemos es activar las rutas con parametros, los importamos del archivo blog con el id y la ayuda del hook
//para obtener los datos, y solo concatenamos la informacion
const params = useParams();

const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
if (loading) return <p>Loading data..</p>
if (error) return <p>error...</p>

    return (
        <>
        <h1>{data.id} - {data.title}</h1>
        <p>{data.body}</p>
        </>
    )
 }
 export default BlogDetail;