import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SelectCrypto extends Component {
    constructor(props){
        super(props);
        this.state={
            showQR:false,
            thankyouPage:false
        };
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({thankyouPage:true});
        }, 5000);
    }



    render(){
        return(
            <div>
                { !this.state.thankyouPage ?
                <div>
                    <div className="container text-center" style={{marginTop:"2em"}}>
                    <h1>Selecione o Pagamento:</h1>
                    <div class="row">
                        <div className="col-md-3 thumbnail gallery"><span><img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" className="text-center"style={{display:"block", width:"100px", height:"60px", marginLeft:"5em"}}/></span> <span className="caption">Bitcoin</span><p><button className="btn btn-outline-primary btn-sm">Enviar Moeda</button></p></div>
                        <div className="col-md-3 thumbnail gallery"><span><img style={{display:"block", width:"100px", height:"60px",marginLeft:"5em"}}src="data:image/png;base64,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" /></span> Ethereum<p><button className="btn btn-outline-primary btn-sm">Enviar Moeda</button></p></div>
                        <div className="col-md-3 thumbnail gallery"onClick={()=> this.setState({showQR:true})}><span><img style={{display:"block", width:"100px", height:"60px",marginLeft:"5em"}} src="http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Nano-icon.png"/></span> Nano<p><button className="btn btn-sm btn-outline-primary">Enviar Moeda</button></p></div>
                        <div className="col-md-3 thumbnail gallery"><span><img style={{display:"block", width:"100px", height:"60px",marginLeft:"5em"}} src="https://cdn3.vectorstock.com/i/1000x1000/15/57/dash-coin-flat-icon-vector-19221557.jpg" /></span> Dash<p><button className="btn btn-sm btn-outline-primary">Enviar Moeda</button></p></div>
                    </div>
                </div>
                 <div className="text-center">
                 {this.state.showQR ? 
                 <div>
                     <p style={{marginTop:"2em"}}><strong>Nano Address: </strong>xrb_19r9copschf8qinm757kuicpq86hd5m5y9ifa536k87ef5bxoxdm3wmdgf5b</p>
                 <img src="https://chart.googleapis.com/chart?cht=qr&chl=xrb_19r9copschf8qinm757kuicpq86hd5m5y9ifa536k87ef5bxoxdm3wmdgf5b&chs=180x180&choe=UTF-8&chld=L%7C2" /> 
                 </div>
                 : null } 
             </div>

                </div>
                : <div className="container-fluid text-center">
                    <div className="jumbotron">
                    <h1>Obrigado por gerar impacto conosco!</h1>
                    <h3>Em breve você receberá suas moedas :)</h3>
                    </div>
                </div>}
                
                </div>

        );
    }
}

export default SelectCrypto;

