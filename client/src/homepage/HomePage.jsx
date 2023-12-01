import React, { useEffect, useState } from 'react';
import CardList from '../cardlist/CardList';
import './HomePage.css';
import axios from 'axios';

function HomePage() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:8089/api/games/');
                setGames(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div>
            <div id="banner">
                <div id="background-image"></div>
                <div id="content">
                    <p>Welcome to Dawgspot</p>
                </div>
            </div>

            <h1 className="section-header">Live Sports Games</h1>
            <CardList items={games}/>
        </div>
    )
}

export default HomePage;