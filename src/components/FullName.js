import React from 'react'

import iconEmail from '../images/email.svg'
import iconLinkedin from '../images/linkedin.svg'
import iconGithub from '../images/github.svg'
import iconBlog from '../images/wordpress.svg'

const FullName = () => {
    return (
        <div className="flex mb-6">
            <div className="w-20 min-h-full rounded-b-2xl bg-primary border-black border-b-16 mr-6">

            </div>

            <div>
                <h1 className="text-5xl font-bold mt-2 mb-4">
                    <span className="text-4xl mb-4 block">Jorge Fernando</span>
                    CORTEZ <br />
                    GUILLEN
                </h1>

                <ul className="flex items-center space-x-4">
                    <li>
                        <a href="mailto:ferco_clpm@hotmail.com" target="_blank" rel="nofollow noreferrer">
                            <img src={iconEmail} alt="Email" className="w-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jorge-fernando-cortez-guillen-a56a8222/" target="_blank" rel="nofollow noreferrer">
                            <img src={iconLinkedin} alt="Linkedin" className="w-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ElBatou" target="_blank" rel="nofollow noreferrer">
                            <img src={iconGithub} alt="Github" className="w-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
                        </a>
                    </li>
                    <li>
                        <a href="https://fernandoclpm.wordpress.com/" target="_blank" rel="nofollow noreferrer">
                            <img src={iconBlog} alt="Blog" className="w-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FullName
