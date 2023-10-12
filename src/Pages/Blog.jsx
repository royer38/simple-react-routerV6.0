import { Link, useSearchParams } from "react-router-dom";
import {useFetch} from "../hooks/useFetch";

const Blog = () => { 
    //nos sirve como un buscador, para filtrar datos en el path y poder traer los datos filtrados
    const [searchParams, setSearchParams] = useSearchParams ();


const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')
if (loading) return <p>Loading data..</p>
if (error) return <p>error...</p>

//esto nos sirve para hacer la vincuacion entre lo que escribe el usuario y la busqueda que hare el input
const handleChange = (e) => {
let filter = e.target.value
//setSearchParams({filter : filter});
//logica para filtrar
if (filter) {
    setSearchParams({filter});
} else{
    setSearchParams({});
}
};

    return (
        <>
        <h1>Blog</h1>
        <input type="text" name="" onChange={handleChange} className="form-control my-3" value={searchParams.get("filter") || ""}/>
        <ul className="list-group">
        {data
            .filter((item)=> {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = item.title.toLowerCase();
                return name.startsWith(filter.toLocaleLowerCase());
            })
            .map((item) => (
                <Link to={`/blog/${item.id}`} key={item.id} className="list-group-item">{item.id} - {item.title}</Link>
            ))}
        </ul>
        </>
    )
 }
 export default Blog;