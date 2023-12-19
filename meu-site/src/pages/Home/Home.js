import React from "react";
import './Home.css';


//Conteudos que não se repetem nas paginas ficam aqui

const Home = () => {

    return (
    <div className="principal"> 
      <section>
        <h1>Video Apresentação</h1>
        <iframe className="video" width="682" height="384" src="https://www.youtube.com/embed/C5k5F6xj59w" title="Vídeo Apresentação Pessoal - Ester Vitoria Reis de Lima" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>...</p>
      </section>

      <aside>
        <p>Índice</p>
      </aside>

    </div>
  );
};

export default Home;