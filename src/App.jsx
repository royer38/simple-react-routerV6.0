import Navbar from "./components/Navbar";
//nos sirve para configurar rutas
import { Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Contacto from "./Pages/Contacto";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";
import LayoutPublic from "./layouts/LayoutPublic";
import BlogDetail from "./Pages/BlogDetail";


const App = () => { 
  return <>
  <Navbar/>
<Routes>
  {/* aca es donde regresamos un layout a nuestro elementos anidados, en otras palabras, para que sea estatico en cada una de nuestras paginas */}
  <Route path="/" element={<LayoutPublic/>}>
    {/*siempre retornamos componentes, es decir nuestros jsx que hemos creado y lo qe tenemos configurado ahi
        por eso es que siempre regresamos elementos, y en el path podemos regresar lo que querramos */}
        <Route element={<Inicio/>} index></Route>
        <Route element={<Contacto/>} path="/Contacto"></Route>
        <Route element={<Blog />} path="/Blog"></Route>
        <Route element={<BlogDetail />} path="/Blog/:id"></Route>
        <Route element={<NotFound />} path="*"></Route>
  </Route>
      </Routes>     
  </>
 }

 export default App;