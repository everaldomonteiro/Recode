import React from 'react';
import { Link } from 'react-router-dom';
import canada from '../assets/img/canada.jpg';
import franca from '../assets/img/franca.jpg';
import japao from '../assets/img/japao.jpg';
import portugal from '../assets/img/portugal.jpg';
import russia from '../assets/img/russia.jpg';
import mexico from '../assets/img/mexico.jpg';

export default function Promocoes() {
    return (
        <>
            <main>
                <h2>Promoções</h2>
                <div className="container d-flex flex-wrap justify-content-center py-4">
                    <div className="card m-2" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src={canada}
                            alt=""
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
                            src={franca}
                            alt=""
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
                            src={japao}
                            alt=""
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
                            src={portugal}
                            alt=""
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
                            src={russia}
                            alt=""
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
                            src={mexico}
                            alt=""
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
