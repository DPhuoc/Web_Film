import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import Routes from '../routes/routes'

export default function Layout() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props} />
                    <Routes />
                    <Footer />
                </div>
            )} />
        </BrowserRouter>
    )
}
