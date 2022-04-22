import React, { useRef, useState, useEffect } from 'react';
import Youtube from 'react-youtube';
import { BsArrowLeftCircle } from "react-icons/bs";
import { MembersData } from '../Members/DataMembers';

const videosData = [
    {id: 'QlgSjq5m_D4', title: 'world Cup: there will be mud'},
    {id: '3DA-gRsjWf0', title: 'footballers battle it out in mud'},
    {id: 'It9kBjW_nQs', title: 'world championships in Finland'},
    {id: '--y5VCYzug0', title: 'world cup 2013 - no comment'},
    {id: 'O72ldNXbozA', title: 'Greatest goals of all time'},
];

const playerOptions = {
    height: '390',
    width: '640'
}

const Videos = function({show = false }) {

    // const [videoID, setVideoID] = useState();
    const [videoID, setVideoID] = useState(videosData[0].id);
    // getPlaylistItemByVideoID(videoID).classList.add('active');
    const container = useRef();

    function handleClick(e) {
        e.preventDefault();
        // switch active class
        getPlaylistItemByVideoID(videoID).classList.remove('active');
        e.target.classList.add('active');
        setVideoID(e.target.dataset.videoid);
    }

    function getPlaylistItemByVideoID(ID) {
        const items = Array.from(container.current.querySelectorAll('span.title'));
        const filtered = items.filter((element) => element.dataset.videoid == videoID);
        return filtered[0];
    }

    // const useEffect(() => {

    // });

    return (
        <div className="videosComp" ref={container}>
            <div className="container">
                <Youtube videoId={videoID} title="ceci est un long titre" opts={playerOptions}></Youtube>
                <ul className="playlist">
                    {videosData.map((item, index) => {
                        return (<li className="item" key={index}>
                            {/* <BsArrowLeftCircle className="icon" /> */}
                            <span className="title" onClick={handleClick} data-videoid={item.id}>
                                {item.title}
                            </span>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )

}

export default Videos