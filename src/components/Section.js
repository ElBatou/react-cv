import React from 'react'

const Section = ({ title }) => {
    return (
        <div className="bg-secondary px-4 py-3 rounded-xl mb-4 md:mb-8">
            <h2 className="text-gray-300 filter drop-shadow-text text-right text-4xl font-bold">{title}</h2>
        </div>
    )
}

export default Section
