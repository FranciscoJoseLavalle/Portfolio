import React, { Children } from 'react'

const SobreMiButtons = ({ setAboutSelected, aboutSelected, type, text }) => {
    return (
        <button onClick={() => setAboutSelected(type)} style={{
            color: aboutSelected === type ? '#fff' : 'violet',
            backgroundColor: aboutSelected === type ? 'violet' : 'transparent'
        }}>
            {text}
        </button>

    )
}

export default SobreMiButtons

