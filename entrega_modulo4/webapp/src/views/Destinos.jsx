import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img/d1.jpg';
import img2 from '../assets/img/ny.jpg';


export default function Destinos() {
    return (
        <>
            <main>
                <h2>Destinos Nacionais e Internacionais</h2>
                <div className="container d-flex flex-wrap justify-content-center py-4">
                    <div className="card m-2" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src={img1}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                            Veneza, a capital da região de Vêneto, no norte da Itália, é formada por mais de 100 pequenas ilhas em uma lagoa no Mar Adriático.
                            </p>
                        </div>
                    </div>
                    <div className="card m-2" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src={img2}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                A cidade de Nova York compreende 5 distritos situados no encontro do rio Hudson com o Oceano Atlântico. No centro da cidade fica Manhattan, um distrito com alta densidade demográfica.
                            </p>
                        </div>
                    </div>
                    <div className="card m-2" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src="https://s1.1zoom.me/b5050/898/Coast_Houses_Canada_Lake_481500_1920x1080.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Toronto, a capital da província de Ontário, é uma grande cidade canadense localizada ao longo da costa noroeste do Lago Ontário.
                            </p>
                        </div>
                    </div>
                    <div className="card m-2" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src="http://www.osmais.com/wallpapers/201601/rio-de-janeiro-wallpaper.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor.
                            </p>
                        </div>
                    </div>
                    <div className="card m-2" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src="https://www.nerdediva.com.br/wp-content/uploads/2016/08/fernando-de-noronha-brazil_001090.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Fernando de Noronha é um arquipélago vulcânico situado a cerca de 350 quilómetros ao largo da costa nordeste do Brasil. Tem o nome da sua maior ilha, um parque marinho e santuário.
                            </p>
                        </div>
                    </div>
                    <div className="card m-2" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src="http://www.ebc.com.br/institucional/sites/_institucional/files/thumbnails/image/caminhos_da_reportagem_cataratas_do_iguacu.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Foz do Iguaçu, cidade no estado brasileiro do Paraná, é a principal base para visitar as famosas Cataratas do Iguaçu, uma das maiores cachoeiras do mundo.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
