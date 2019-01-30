import React, {Component} from 'react';
import { getMovieList } from './api';
import './MovieList.css';

class MovieList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filters: {
                title: '',
                description: '',
                director: '',
                producer: '',
            }
         };
    }

    componentDidMount(){
        getMovieList().then(movies => {
            this.setState({ movies })
        })
    }

    render() {
        const { movies } = this.state;
        return (
            <div className="wrapper">
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
                        <td className="number">{release_date}</td>
                        <td className="number">{rt_score}</td>
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
