import React from 'react';
import { Link } from 'react-router-dom';

export default function Promocoes() {
    return (
        <>
            <main>
                <h2>Promoções</h2>
                <div className="container d-flex flex-wrap justify-content-center py-4">
                    <div className="card m-2" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src="https://s1.1zoom.me/b5050/21/407089-svetik_1920x1080.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Canadá</h5>
                            <p className="card-text">
                                Hospedagem + café da manhã
                            </p>
                                <div className="preco">
                                    Preço:
                                    <span className="preco"> R$ 1399,00 </span>
                                    <br />
                                    <br />
                                    <br />
                                </div>

                            <Link to="#" className="btn btn-primary">
                                Comprar
                            </Link>
                        </div>
                    </div>

                    <div className="card m-2" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src="https://s1.1zoom.me/b8048/487/Sky_Evening_France_Eiffel_Tower_Paris_From_above_520603_1920x1080.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">França</h5>
                            <p className="card-text">
                                Hospedagem + café da manhã
                            </p>
                                <div className="preco">
                                    Preço:
                                    <span className="preco"> R$ 1499,00 </span>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            <Link to="#" className="btn btn-primary">
                                Comprar
                            </Link>
                        </div>
                    </div>

                    <div className="card m-2" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src="https://s1.1zoom.me/b5050/668/Japan_Kyoto_Parks_Pond_Pagodas_564976_1920x1080.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Japão</h5>
                            <p className="card-text">
                                Hospedagem + café da manhã
                            </p>
                                <div className="preco">
                                    Preço:
                                    <span className="preco"> R$ 1899,00 </span>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            <Link to="#" className="btn btn-primary">
                                Comprar
                            </Link>
                        </div>
                    </div>

                    <div className="card m-2 mb-4" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src="https://s1.1zoom.me/b5050/895/Coast_Evening_Houses_Portugal_Porto_534068_1920x1080.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Portugal</h5>
                            <p className="card-text">
                                Hospedagem + café da manhã
                            </p>
                                <div className="preco">
                                    Preço:
                                    <span className="preco"> R$ 1299,00 </span>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            <Link to="#" className="btn btn-primary">
                                Comprar
                            </Link>
                        </div>
                    </div>

                    <div className="card m-2 mb-4" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src="https://s1.1zoom.me/b5050/894/424180-Kycb_1920x1080.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Russia</h5>
                            <p className="card-text">
                                Hospedagem + café da manhã
                            </p>
                                <div className="preco">
                                    Preço:
                                    <span className="preco"> R$ 1799,00 </span>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            <Link to="#" className="btn btn-primary">
                                Comprar
                            </Link>
                        </div>
                    </div>

                    <div className="card m-2 mb-4" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src="https://s1.1zoom.me/b5070/442/Mexico_Sunrises_and_sunsets_Temples_Temple_of_542460_1920x1080.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">México</h5>
                            <p className="card-text">
                                Hospedagem + café da manhã
                            </p>
                                <div className="preco">
                                    Preço:
                                    <span className="preco"> R$ 1199,00 </span>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            <Link to="#" className="btn btn-primary">
                                Comprar
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
