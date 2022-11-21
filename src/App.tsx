import React, {useState} from 'react';

type AnimalsType=Array<AnimalType>
type AnimalType={
    type:string
    name:string
    age:number
}
type ThreeAnimals="all"|"dog"|"cat"

function App() {
    const onClickHandler = (filter:ThreeAnimals) => {
        setFiltAnimalsName(filter)
    }
    const animals = [
        {type: "dog", name: "Miki", age: 45},
        {type: "cat", name: "Lev", age: 15},
        {type: "birdie", name: "Solovei", age: 25},
        {type: "dog", name: "Ralf", age: 95},
    ]
    let[filtAnimalsName,setFiltAnimalsName]=useState<ThreeAnimals>("all")
    let anims=animals
    if(filtAnimalsName==="dog"){
        anims=animals.filter((animal)=>animal.type==="dog")
    }
    if(filtAnimalsName==="cat"){
       anims=animals.filter((animal)=>animal.type==="cat")
    }
    return (<div>
            <ul> {anims.map((ObjectFRomAnimalArray, index: number) => {
                return (
                    <li key={index}>
                        <span>{ObjectFRomAnimalArray.type}</span>
                        <span>{ObjectFRomAnimalArray.age}</span>
                        <span>{ObjectFRomAnimalArray.name}</span>
                    </li>
                )
            })}
            </ul>
                <button onClick={() => onClickHandler("all")}>All</button>
                <button onClick={() => onClickHandler("dog")}>Dogs</button>
                <button onClick={() => onClickHandler("cat")}>Cats</button>
            </div>
    );
}

export default App;
