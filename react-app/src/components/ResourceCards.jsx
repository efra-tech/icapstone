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
                    <Card imgsrc={resource1} title="Reclaiming Public Space" link="https://crosscut.com/focus/2020/11/seattles-urban-farmers-are-reclaiming-public-space"/>
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={resource2} title="Yes Farm: Vice Interview" link="https://i-d.vice.com/en/article/88gxq4/yes-farm-seattle-interview" />
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={resource3} title="Farming for Change" link="https://southseattleemerald.com/2020/04/28/farming-for-change-black-womxn-farmers-fight-the-pandemic-with-a-food-revolution/" />
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={resource4} title="Public Gardens and Livable Cities" link="https://muse.jhu.edu/book/78593" />
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={resource5} title="Seattle Youth Urban Farming" link="https://www.seattletimes.com/seattle-news/black-farmers-collective-creates-community-space-for-youth-in-urban-farming-program/" />
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={resource6} title="Seattle's CHOP guerrilla garden" link="https://www.tandfonline.com/doi/abs/10.1080/13549839.2022.2137788" />
                    </div>
                </div>
            </div>   
        );
    }
}

export default Cards;