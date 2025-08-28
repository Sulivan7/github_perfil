import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState("");

    useEffect(() => {
        console.log("O componente foi montado");
        return () => {
            console.log("O componente foi desmontado");
        }
    }, []);

    useEffect(() => {
        console.log("O estado nome Mudou");   
    }, [nome]);

    useEffect(() => {
        console.log("O estado materiaA Mudou");   
    }, [materiaA]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            return evento.target.value;
        });
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return <p>Ola {nome} voce foi aprovado </p>;
        } else {
            return <p>ola {nome} voce está de recuperação </p>;
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Materia aqui A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Materia aqui B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Materia aqui C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;