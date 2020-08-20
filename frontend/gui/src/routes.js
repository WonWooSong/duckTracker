import React from 'react';
import { Route } from 'react-router-dom';
import DuckList from './containers/DuckListView';
import DuckDetail from './containers/DuckDetailView'
import CreateList from './containers/CreateDuckView'
import Report from './containers/ReportSummary'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component = {DuckList} />
        <Route exact path='/create' component = {CreateList} />
        <Route exact path='/info/:duckID' component = {DuckDetail} />
        <Route exact path='/report' component = {Report} />
    </div>
);

export default BaseRouter;