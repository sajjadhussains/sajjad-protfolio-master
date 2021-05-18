import React from 'react';

const Footer = () => {
    return (
        <div
            style={
                {
                    backgroundColor: '#182335',
                    position: 'relative',
                    top: '10vh'
                }
            }
        >
            <div className='container d-flex justify-content-center'>
                <div>
                    <p
                        style={
                            {
                                fontSize: '20px'
                            }
                        }
                        className="m-0 p-5 text-white"
                    >
                        &#169; All right reserved by
                        <span
                            className="text-danger font-weight-bold"
                        > Sajjad Hussain
                        </span>
                    </p>
                </div>
                {/* <div>
                    <p
                        style={
                            {
                                fontSize: '20px'
                            }
                        }
                        className="m-0 p-5 text-white"
                    >
                        Design by 
                        <span className='ml-2'>
                            <a
                                href="https://github.com/anik1612/"
                                target='_blank'
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                ❤️ Sajjad Hussain
                            </a>
                        </span>
                    </p>
                </div> */}
            </div>
        </div>

    );
};

export default Footer;