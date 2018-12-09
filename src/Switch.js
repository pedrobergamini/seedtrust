import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import SelectInvestment from './SelectInvestment';
import SelectCrypto from './SelectCrypto';
import RelatorioPage from './RelatorioPage';
import HubPage from './HubPage';

const SwitchDemo = ()=> (
<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/invest" component={SelectInvestment} />
    <Route exact path="/invest/agricultura-familiar/select-crypto" component={SelectCrypto}/>
    <Route exact path="/relatorios" component={RelatorioPage} />
    <Route exact path="/green-hub" component={HubPage} />
</Switch>
);

export default SwitchDemo;