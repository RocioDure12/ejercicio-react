import { useEffect, useState } from "react";
import "../styles/Main.scss";
import Card from "./Card";


/*const gatos = [
    {
      name: 'Rodolfo',
      shortDesc:
        'Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg',
      colores: ['tricolor', 'negro', 'blanco', 'naranja', 'rayado'],
      sexo: 'm',
    },
  
    {
      name: 'Muzzarella',
      shortDesc:
        'Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg',
      colores: ['gris'],
      sexo: 'f',
    },
  
    {
      name: 'Artilugia',
      shortDesc:
        'Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg',
      colores: ['negro', 'blanco'],
      sexo: 'f',
    },
  
    {
      name: 'Wosito',
      shortDesc:
        'Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s',
      colores: ['rayado'],
      sexo: 'm',
    },
  
    {
      name: 'Calamardo',
      shortDesc:
        'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
      colores: ['negro'],
      sexo: 'm',
    },
  ];*/

  
const Main=()=>{

        /*<div>
        {gatos.map((gato)=><Card
            title={gato.name}
            img={gato.img}
            descripcion={gato.shortDesc}
            contentButton={gato.name}
            />
            )}
        
        </div>*/

        const [personajes, setPersonajes]=useState([]);
        const [valorDelInput, setValorDelInput]=useState("");
        const [busqueda, setBusqueda]=useState("");
        const [loading, setLoading] = useState(false);

        useEffect(()=>{
          fetch(`https://rickandmortyapi.com/api/character?name=${busqueda}`)
          .then((res)=>res.json())
          .then((data)=>{
            setPersonajes(data.results);
            setLoading(false);
          });
        }, [busqueda]); 

        const handleChange=(e)=>{
          setValorDelInput(e.target.value)
        };

        const handleClick=()=>{
          setBusqueda(valorDelInput);
        }
    
  return(
    <div>
      <div>
      {loading && <h1>CARGANDO</h1>}
        <h2>Personaje buscado: {valorDelInput}</h2>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>Search</button>
      </div>
        {personajes.map((personaje)=><Card
            title={personaje.name}
            img={personaje.image}
            descripcion={personaje.status}
            contentButton={personaje.id}
            />
            )}
        
        </div>
  )
        }

export default Main;