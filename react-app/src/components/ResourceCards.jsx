import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import React, {Component} from 'react';
import Card from './ResourceCard.jsx';
import resource1 from '../imgs/resource1.jpeg';
import resource2 from '../imgs/resource2.jpg';
import resource3 from '../imgs/resource3.jpg';
import resource4 from '../imgs/resource4.jpg';
import resource5 from '../imgs/resource5.jpg';
import resource6 from '../imgs/resource6.jpg';


class Cards extends Component {
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4"> 
                    <Card imgsrc={resource1} title = {<a target="_blank" rel="noreferrer" className="resource-link" href="https://crosscut.com/focus/2020/11/seattles-urban-farmers-are-reclaiming-public-space">Reclaiming Public Space</a>}/>
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={resource2} title = {<a target="_blank" rel="noreferrer" className="resource-link" href="https://i-d.vice.com/en/article/88gxq4/yes-farm-seattle-interview">Yes Farm: Vice Interview</a>}/>
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={resource3} title = {<a target="_blank" rel="noreferrer" className="resource-link" href="https://southseattleemerald.com/2020/04/28/farming-for-change-black-womxn-farmers-fight-the-pandemic-with-a-food-revolution/">Farming for Change</a>}/>
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={resource4} title = {<a target="_blank" rel="noreferrer" className="resource-link" href="https://muse.jhu.edu/book/78593">Public Gardens and Livable Cities</a>}/>
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={resource5} title = {<a target="_blank" rel="noreferrer" className="resource-link" href="https://www.seattletimes.com/seattle-news/black-farmers-collective-creates-community-space-for-youth-in-urban-farming-program/">Seattle Youth Urban Farming Program</a>}/>
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={resource6} title = {<a target="_blank" rel="noreferrer" className="resource-link" href="https://www.tandfonline.com/doi/abs/10.1080/13549839.2022.2137788">Seattle's CHOP guerrilla garden</a>}/>
                    </div>
                </div>
            </div>   
        );
    }
}

export default Cards;