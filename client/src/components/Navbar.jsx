import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="h-[70px] shadow-lg text-2xl bg-[#291456] mx-4 my-4 rounded-3xl font-bold text-white text-[25px]">
                <div className="h-full  container mx-auto px-10">
                    <div className='flex justify-between h-full items-center '>
                        <div>
                            <Link to='/'>
                                <img src="https://cdn.discordapp.com/attachments/1017125894374043689/1143921550458896446/LOGOGIF.gif" alt="" width={200} className="h-full items-center" />
                            </Link>
                        </div>
                        <ul className="flex gap-5">
                            <li>
                                <Link href="/">Overall</Link>
                            </li>
                            <h1 className="">|</h1>
                            <li>
                                <Link href="/weekly/1">Weekly</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
