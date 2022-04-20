import React from "react";

export default function Contato() {
    return (
        <>
            <main>
                <h2>Contato</h2>

                <div className="container d-flex justify-content-center">
                    <form className="my-4" style={{width: "60%"}}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="nome" placeholder="Nome"/>
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="assunto" placeholder="Assunto"/>
                        </div>

                        <div className="form-group">
                            <textarea className="form-control" name="msg" id="msg" cols="30" rows="10" placeholder="Escreva sua menssagem aqui"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </main>
        </>
    );
}