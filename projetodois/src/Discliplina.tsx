import '../components/disciplinas/index.css'

type DisciplinaProps = { 
codigo: string;
nome: string;
}

function  Disciplina({codigo, nome}: DisciplinaProps){

return (

<main>
<div className="disciplina">

<section>
<h1>Disciplina - Frontend</h1>
<p>{codigo}</p>
<p>{nome}</p>
</section>

</div>
</main>
);

}

export default Disciplina;