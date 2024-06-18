import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [details, setDetails] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function submitClick(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', details);
        data.set('files', files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/createNew', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        console.log(response, response.ok);
        if(response.ok){
            setRedirect(true);
        }
    }

    if(redirect) {
        return <Navigate to={'/'} />
    }
    return(
        <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md">
            <form className="space-y-4" onSubmit={submitClick}>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={ev => setTitle(ev.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                
                <div>
                    <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
                        Summary
                    </label>
                    <input
                        type="text"
                        id="summary"
                        name="summary"
                        value={summary}
                        onChange={ev => setSummary(ev.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="files" className="block text-sm font-medium text-gray-700">
                        Files
                    </label>
                    <input
                        type="file"
                        id="files"
                        name="files"
                        onChange={ev => setFiles(ev.target.files)}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>

                <div>
                    <label htmlFor="detailed-summary" className="block text-sm font-medium text-gray-700">
                        Detailed Summary
                    </label>
                    <textarea
                        id="detailed-summary"
                        name="detailed-summary"
                        rows="4"
                        value={details}
                        onChange={ev => setDetails(ev.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
