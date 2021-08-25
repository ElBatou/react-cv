import React from 'react'

const SubSection = ({ title = null, skills = null, experience = null, achievements = null, projects = null, custom = null }) => {
    const colors = [
        'bg-gray-700 custom-label', 
        'bg-red-700 custom-label', 
        'bg-yellow-700 custom-label', 
        'bg-green-700 custom-label', 
        'bg-blue-700 custom-label', 
        'bg-indigo-700 custom-label', 
        'bg-purple-700 custom-label', 
        'bg-pink-700 custom-label'
    ]
    let iterator = 0
    let flag = true

    return (
        <>
            {title !== undefined && title !== null ?
                <div className="bg-primary px-4 py-3 rounded-xl mb-4 md:mb-8">
                    <h3 className="text-white filter drop-shadow-text-primary text-2xl font-bold">{title}</h3>
                </div>
                : null
            }

            <div className="border border-gray-200 mb-6 md:mb-10 section-wrapper">
                <dl>
                    {skills !== undefined && skills !== null ?
                        <div className="bg-gray-50 wrap-section">
                            <dt className="text-2xl font-bold">
                                skills
                            </dt>
                            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                                {skills.map( (skill, index) => {
                                    let customIndex = iterator % colors.length
                                    iterator++
                                    return (<span key={`skill-item-${index}`} className={`${colors[customIndex]}`}>{skill}</span>)
                                })}
                            </dd>
                        </div>
                        : null
                    }

                    {experience !== undefined && experience !== null ?
                        <div className="bg-white wrap-section">
                            <dt className="text-2xl font-bold">
                                experience
                            </dt>
                            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                                {experience.map( (item, index) => <p key={`experience-item-${index}`}>{item}</p>)}
                            </dd>
                        </div>
                        : null
                    }

                    {achievements !== undefined && achievements !== null ?
                        <div className="bg-gray-50 wrap-section">
                            <dt className="text-2xl font-bold">
                                achievements
                            </dt>
                            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                                <div dangerouslySetInnerHTML={{ __html: achievements }} />
                            </dd>
                        </div>
                        : null
                    }

                    {projects !== undefined && projects !== null ?
                        <div className="bg-white wrap-section">
                            <dt className="text-2xl font-bold">
                                projects
                            </dt>
                            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                                {projects.map( (project, index) => {
                                    return (
                                        <p className="mb-4" key={`project-item-${index}`}>
                                            <a href={project.link} className="text-blue-400 break-words" target="_blank" rel="noreferrer">{project.link}</a> {project.label}
                                        </p>
                                    )
                                }
                                )}
                            </dd>
                        </div>
                        : null
                    }

                    {custom !== undefined && custom !== null ?
                        <div>
                            {
                                custom.map( (item, index) => {
                                    flag = !flag
                                    let stripes = 'bg-white'
                                    if (flag) {
                                        stripes = 'bg-gray-50'
                                    }

                                    return (
                                        <div key={`custom-item-${index}`} className={`${stripes} wrap-section`}>
                                            <dt className="text-2xl font-bold">
                                                {item.label}
                                            </dt>
                                            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                                                <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                            </dd>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                        : null
                    }
                </dl>
            </div>
        </>
    )
}

export default SubSection
