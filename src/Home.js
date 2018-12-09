import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            showAddress: false
        }
    }
        render(){
            const {showAddress} = this.state;
            return(
                <div>
                    <header className="jumbotron" style={{backgroundImage:`url("https://i.imgur.com/GkScz2F.png")`, width:"2800px", height:"500px", backgroundRepeat:"no-repeat", backroundSize:"cover", backgroundColor:"white", marginLeft:"14em"}}>
                    </header>
                <div className="container-fluid">
                    <div className="jumbotron text-center" style={{backgroundColor:"#73b139"}}>
                    <h1 style={{color:"white"}}>Primeiro Passo</h1>
                    <h3 style={{color:"white"}}>Crie sua Carteira SeedTrust =D</h3>
                    <button onClick={()=> this.setState({showAddress:true})} className="btn btn-primary">Quero Gerar Impacto!</button>
                    {showAddress ? <div style={{paddingTop:'2em', color:"white"}}><strong style={{color:"white"}}>Seu Endereço é:</strong> seed_1bxkqyb3zz81wmhxndsbrjb94hx3fhr1fyydmg6iresyk76f3k7y7jiazoji</div> : null}
                    </div>
                <div className="container">
                    <div className="text-center">
                    <h3>Invista em $eeds     <Link to="/invest" className="btn btn-success">Comprar Agora</Link> </h3>
                    <div className="jumbotron" style={{backgroundImage:`url("https://i.imgur.com/HcMe1B5.png")`, width:"1000px", height:"700px", backgroundRepeat:"no-repeat", backroundSize:"cover", backgroundColor:"white", marginRight:"5em"}}>
                    </div>
                    </div>
                </div>

                </div>
                </div>
            );
        }
    
}

export default Home;