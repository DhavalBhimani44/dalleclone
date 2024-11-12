import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../utils/utils'

function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target
        const copySignupInfo = { ...signupInfo }
        copySignupInfo[name] = value
        setSignupInfo(copySignupInfo)
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        const { name, email, password } = signupInfo
        if (!name || !email || !password) {
            return handleError('Name, email, and password are required')
        }
        try {
            const url = 'https://dalleclone-a8np.onrender.com/auth/signup'
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            })
            const result = await response.json()
            const { success, message, error } = result
            if (success) {
                handleSuccess(message)
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message
                handleError(details)
            } else if (!success) {
                handleError(message)
            }
        } catch (err) {
            handleError(err)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-200">Signup</h1>
                <form onSubmit={handleSignup} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Name</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={signupInfo.name}
                            className="w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            autoFocus
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Email</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={signupInfo.email}
                            className="w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="password"
                            value={signupInfo.password}
                            className="w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Signup
                    </button>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-blue-500 hover:underline">Login</Link>
                    </p>
                </form>
                <ToastContainer autoClose={1000} />
            </div>
        </div>
    )
}

export default Signup
