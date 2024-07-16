import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="text-lg flex justify-between w-3/4 mx-auto">
            <h1>Portfolio</h1>
            <ul className="flex flex-between gap-5">
                <li><Link href={'/'}>Home</Link></li>
                <li>about</li>
                <li>
                    <Link href={"/projects"}>Projects</Link>
                </li>
            </ul>
        </nav>
    )
}