import React, {useEffect} from 'react'

/**
 * button to toggle video player display
 * @returns 
 */
function Toggler() {

    // player element
    let player = null

    function handleClick(e) {
        e.preventDefault();
        player.classList.toggle('show')
        // player.style.display === 'block' ? player.style.display = 'none' : player.style.display = 'block'
    }

    useEffect(() => {
        player = document.querySelector('.videosComp')
    }, [])


    return (
        <button onClick={handleClick}>toggle video</button>
    )
}

export default Toggler
