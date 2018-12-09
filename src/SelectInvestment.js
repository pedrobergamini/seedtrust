import React from 'react';
import {Link} from 'react-router-dom';

const SelectInvestment= props=>(
    <div className="container text-center card" style={{width:"800px", marginTop:"2em"}}>
   <h1>Selecione o Setor de Impacto</h1>
   <div className="card-body">   
           <input type="checkbox" name="choice"/>Agricultura Familiar <br />
           <input type="checkbox" name="choice" />Resíduos Sólidos <br />
           <input type="checkbox" name="choice" />Madeira Certificada <br />
           <input type="checkbox" name="choice" />Crédito de Carbono <br />
    
       <Link to="/invest/agricultura-familiar/select-crypto" className="btn btn-success" style={{marginTop:"2em"}}>Continuar</Link> 
   </div>
   <input type="text" placeholder="Cole a Sua Carteira $eed"/>
    </div>
    
)

export default SelectInvestment;