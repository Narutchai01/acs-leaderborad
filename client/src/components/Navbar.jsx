
const Navbar = () => {
    return (
        <>
            <nav className="h-[70px]" >
                <div className=" h-full container mx-auto px-[360px]">
                    <ul className="flex justify-between h-full items-center text-xl font-bold">
                        <li>
                            <a href="/">Overall</a>
                        </li>
                        <li>
                            <a href="/Weekly">Weekly</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
