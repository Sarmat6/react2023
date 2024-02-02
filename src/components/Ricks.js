const Ricks = ({id,name,status,species,gender,img}) => {
    return(
        <div>
            <h2>id:{id}, name:{name}</h2>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>gender: {gender}</p>
            <img src={img} alt={name}/>
        </div>
    );
}
export {Ricks}