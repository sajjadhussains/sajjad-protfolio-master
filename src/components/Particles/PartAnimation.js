import React from 'react';
import Particles from 'react-particles-js';

const PartAnimation = () => {
    return (
        <>
            <Particles className='particles-section'
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} 
                />
        </>
    );
};

export default PartAnimation;