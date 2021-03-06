import React from "react";
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';

export default function Home() {
    return (
        <>
            <main>
                <h2>Home</h2>
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{height: "60%"}}>
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src={img1} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={img2} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
            </main>
            <section className="container d-flex sessao">
                <aside className="descricao">
                    <h2 style={{color: '#3772da', fontFamily: 'ariel', fontWeight: 'bold', fontSize: '2.5rem'}}>Monteiro viagens</h2>

                    <p>
                        Equipe Qualificada para
                        Encontrar o Pacote Ideal para Sua
                        Viagem dos Sonhos. Est??
                        Organizando uma Viagem e ainda
                        N??o Escolheu o Destino? Fale com
                        a Nossa Ag??ncia.
                    </p>

                    <p>
                        <strong>Miss??o:</strong> Agenciar as solu????es de
                        turismo que melhor atendam as
                        necessidades de nossos clientes
                        com seguran??a, agilidade e
                        conhecimento.
                    </p>

                    <p>
                        <strong>Vis??o:</strong> Ser reconhecida pelos
                        nossos clientes, equipe e
                        fornecedores como ag??ncia de
                        viagens com inova????o e alta
                        tecnologia.
                    </p>

                    <p>
                        <strong>Valores:</strong> Comprometimento com
                        os nossos clientes, equipe e
                        parceiros atrav??s:
                    </p>

                    <ul>
                        <li>
                            confiabilidade pelos servi??os prestados
                        </li>
                        <li>intera????o Interpessoal</li>
                        <li>equidade de oportunidades</li>
                        <li>simplicidade com profissionalismo</li>
                        <li>inova????o como fortalecimento para o futuro</li>
                        <li>respeito nas rela????es comerciais</li>
                        <li>sucesso de pessoas e de empresas</li>
                    </ul>

                    <a href="#">WWW.MONTEIROVIAGENS.COM.BR</a>
                </aside>
                <article className="conteudo d-flex flex-wrap container align-items-center justify-content-around">
                    <div className="circulo">SEGURAN??A</div>
                    <div className="circulo">QUALIDADE</div>
                    <div className="circulo">CONFORTO</div>
                    <div className="circulo">SONHOS</div>
                    <div className="circulo">FELICIDADE</div>
                    <div className="circulo">MOMENTOS</div>
                </article>
            </section>
        </>
    );
}