import { Link } from "react-router-dom"

export default function Layout({ children }) {
    return (
        <div>
            <div className='bg-yellow-100 h-16 flex flex-row items-center justify-center space-x-5'>
                <Link to='/'className='bg-red-100 px-3 py-1 rounded-lg'>Home</Link>
                <Link to='/about'className='bg-red-100 px-3 py-1 rounded-lg'>About</Link>
            </div>
            {children}
        </div>
    )
}