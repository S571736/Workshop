import React, {Component} from 'react';
import { getMovieList } from './api';

class MovieList extends Component{
    constructor(props) {
        super(props);
        this.state = {movies: [] };
    }

    componentDidMount(){
        getMovieList().then(movies => {
            this.setState({ movies })
        })
    }

    render() {
        const { movies } = this.state;
        return (
            <div>
                <h1>Ghibli movies</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Director</th>
                            <th>Producer</th>
                            <th>Release year</th>
                            <th>Score (Rotten Tomatoes)</th>
                        </tr>
                    </thead>
                    <tbody>{movies.map(({ id, title, description, director, producer, release_date, rt_score }) => <tr key={id}>)}
                        <td>{title}</td>
                        <td>{description}</td>
                        <td>{director}</td>
                        <td>{producer}</td>
                        <td>{release_date}</td>
                        <td>{rt_score}</td>
                        </tr>)}

                    </tbody>
                </table>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default MovieList;
