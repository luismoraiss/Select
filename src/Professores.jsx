import React from "react";
import { useParams } from "react-router-dom";
import Professores from "../json/Professores.json";

const ProfessoresJson = () => {
  const { id } = useParams(); 

  
  const professor = Professores.professores.find(
    (prof) => prof.id === parseInt(id, 10)
  );

  if (!professor) {
    return <div>Professor não encontrado</div>;
  }

  return (
    <div>
      <h1>{professor.nome}</h1>
      {professor.horarios.map((dia, index) => (
        <div key={index}>
          <h2>{dia.dia}</h2>
          {dia.horarios_do_dia.map((horario, i) => (
            <div key={i}>
              <p>
                {horario.hora} - {horario.status} - {horario.sala}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProfessoresJson;
