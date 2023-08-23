
const Navbar = () => {
    return (
        <>
            <nav className="h-[70px] shadow-lg text-2xl font-bold">
                <div className="h-full container mx-auto px-36">
                    <div className='flex justify-between h-full items-center'>
                        <div>
                            <h1>ACS</h1>
                        </div>
                        <ul className="flex gap-10">
                            <li>
                                <a href="/">Overall</a>
                            </li>
                            <li>
                                <a href="/weekly/1">Weekly</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
