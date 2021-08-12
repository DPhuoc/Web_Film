import React from 'react'
import  { Switch ,Route } from 'react-router-dom'

import Home from '../pages/Home'
import FeatureFilm from '../pages/FeatureFilm'
import TVseries from '../pages/TVseries'
import FAQ from '../pages/FAQ'
import Collection from '../pages/Collection'
import Search from '../pages/Search'

export default function routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/type/movie" component={FeatureFilm} />
                <Route path="/type/show" component={TVseries} />
                <Route path="/faq" component={FAQ} />
                <Route path="/collection" component={Collection} />
                <Route path="/search" component={Search} />
            </Switch>
        </div>
    )
}
