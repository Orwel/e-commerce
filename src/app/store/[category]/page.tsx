//Aqui creas la interfaz con los parámetros de la categoría

interface CategoryProps {
    params: {
        category: string
    }
}

export default function Category(props: CategoryProps){
    //Aquí vamos a desestructurar el prop
    const {category} = props.params

    return(
        <h1>Categoría dinámica: {category}</h1>
    )
}