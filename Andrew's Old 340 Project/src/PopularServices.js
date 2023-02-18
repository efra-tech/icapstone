import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function PopularServices(popular) {

    const urlParams = useParams();
    const popularCard = popular.popular.map((element) => {
        if (element.time === urlParams.time) {
            return <PopularCard popular={element} key={element.name}/>
        }
        return true;
    })

    return (
    <div>
        <ul className="nav-bar">
            <li className="nav-bar" key="month"><NavLink to="/popular/month" activeClassName="current">Monthly</NavLink></li>
            <li className="nav-bar" key="year"><NavLink to="/popular/year" activeClassName="current">Yearly</NavLink></li>
        </ul>
        <div className="row">

            <section>
                <h2>Popular Services</h2>
                <div className="card">
                    <div className="card-body">
                        <div className="popular">
                            <div className="row">
                                {popularCard}
                                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
    )
}

function PopularCard(popular) {
    return (
        <div className="col-6 col-md-4 col-lg-2">
            <div className="card popular-card">
                <img src={popular.popular.img} className="popular-icon" alt={popular.popular.name + " logo"} />
                <p>{popular.popular.name}</p>
                <p>{"Avg Hours/Month: " + popular.popular.avgHours}</p>
                <p>{"Avg Cost Efficiency: " + popular.popular.avgEfficiency}</p>
            </div>
        </div>
    )
}