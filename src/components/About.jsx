import React from "react"


const About = () => {
    return (
        <div className="text-white bg-indigo-700 mx-2 rounded-md p-4 pt-2">
            <span className="text-3xl">W</span>elcome to Safetorv, your personal password manager built to make your online life safer and easier.I understand how hard it is to remember all your passwords. Safetorv helps you store them securely in your computer local storage. <br />
            <div className="mt-3">
                Features:-
                <ul className="list-disc ml-7">
                    <li>Stores data locally</li>
                    <li>Keeps data safe and secure</li>
                    <li>Click on any entry in website column to open the link in new tab</li>
                    <li>To copy username and password just click on it</li>
                    <li>Hover on icon to make it rotate faster</li>
                </ul>
            </div>
        </div>
    )
}

export default About