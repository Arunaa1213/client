import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        if(response.status === 200){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        } else {
            alert('login failed');
        }
    }
    if(redirect) {
        return(<Navigate to={'/'} />)
    }
    return(
        <div className="flex justify-center my-12">
            <div className="container">
                <form className="flex flex-col justify-center items-center" onSubmit={register}>
                    <div className="space-y-8 w-6/12">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" 
                                value={email}
                                onChange={ev => setEmail(ev.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focuc:border focus:border-purple-300 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">password</label>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="password" 
                                value={password}
                                onChange={ev => setPassword(ev.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button type="submit" className="w-full sm:w-4/12 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

// arunaasureshkumar
// HKdtS8eWYIgzaBkL
// HKdtS8eWYIgzaBkL
// mongodb+srv://arunaasureshkumar:HKdtS8eWYIgzaBkL@travelblogusers.fc3ba5l.mongodb.net/
// mongodb+srv://arunaasureshkumar:HKdtS8eWYIgzaBkL@travelblogusers.fc3ba5l.mongodb.net/

// shell:

// mongosh "mongodb+srv://travelblogusers.fc3ba5l.mongodb.net/" --apiVersion 1 --username arunaasureshkumar