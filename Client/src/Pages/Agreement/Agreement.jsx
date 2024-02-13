

import React from 'react';
import Fade from 'react-reveal';
import './Agreement.css';

export default function Agreement(){
    const Agreements = [
        // ! [TITLE, DESCRIPTION, COMPLEMENT]
        ['Hello'],
        ['Hello'],
        ['Hello'],
        ['Hello']
    ];

    return (
        <main id='Agreement-Main'>
            <Fade clear>
                <section id='Agreement-Heading'>
                    <article>
                        <h1>Terms and conditions</h1>
                    </article>
                    <article>
                        <p>Agreement that you accept automatically when using our 
                            anonymous and temporary messaging service.</p>
                    </article>
                </section>

                <section id='Agreement-Terms-Container'>
                    {(Agreements).map(([ Title, Description, Complement ], Index) => (
                        <article className='Agreement-Term-Container' key={Index}>
                            <div>
                                <h3 className='Spaced-Heading'>{Title}</h3>
                            </div>
                            <div>
                                <p>{Description}</p>
                            </div>
                            {(Complement) && (
                                <div>
                                    <p>{Complement}</p>
                                </div>
                            )}
                        </article>
                    ))}
                </section>
            </Fade>
        </main>
    )
};