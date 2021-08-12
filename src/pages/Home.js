import { Container } from '@material-ui/core'
import React, { useEffect, useState} from 'react'
import { getTrendingFilm } from '../apis';
import FilmView from '../components/FilmView'

export default function Home() {
    const [trendingFilm, setTrendingFilm] = useState([]);

    useEffect(() => {
        getTrendingFilm()
            .then(res => {
                res.data.results.shift();
                setTrendingFilm(res.data.results);
            })
    }, [])

    return (
        <Container>
            <div className="content">
                <FilmView name="Phim đề cử" data={trendingFilm} quantity={4}/>

            </div>
        </Container>
    )
}
