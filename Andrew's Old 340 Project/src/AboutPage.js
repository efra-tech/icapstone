import React from 'react';

export default function AboutPage() {

    return (
        <div className="container about">
            <h2>Group AB3</h2>
            <div className="container staff">
                <img src="/img/tom.png" alt="tom's icon" />
                <div className="staffText">
                    <h4>Tom Zhang</h4>
                    <p>Hi, I am a junior student in ACMS. I am also curious about info science and web development, so I took this course, and this is more interesting than I thought! I really enjoy the chance to create an App that can handle people's subscriptions. Hope you can enjoy using it!</p>
                </div>
            </div>
            <div className="container staff">
                <img src="/img/ha.png" alt="ha's icon" />
                <div className="staffText">
                    <h4>Ha To</h4>
                    <p>Hi, my name is Ha To and I'm a senior in Informatics looking more into Data Science. I learned a lot about Web development from the class and working on this project, although there are still things I need more practice on. I hope in the future we can bring more updates to the website! </p>
                </div>
            </div>
            <div className="container staff">
                <img src="/img/andrew.png" alt="andrew's icon" />
                <div className="staffText">
                    <h4>Andrew Chen</h4>
                    <p>Hello. I'm a senior in Informatics/Psychology. This was a pretty tough project, but we did our best.</p>
                </div>
            </div>
            Photo by <a href="https://unsplash.com/@ohlrogge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3ENiklas">Ohlrogge</a> on <a href="https://unsplash.com/">Unsplash</a>
        </div>
    )
}