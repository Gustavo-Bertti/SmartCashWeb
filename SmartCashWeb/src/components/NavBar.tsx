import Link from "next/link";
import Logo from "../app/logo.png";
import Image from 'next/image';

interface NavBarProps {
    active: "home" | "faturamento"
}

export default function NavBar(props: NavBarProps){
    const { active } = props
    const classActive = "border-b-4 border-yellow-500 pb-2"

    return (
        <nav className="flex justify-between items-center bg-white w-full px-5 py-3 text-black shadow-md">
            <Image src={Logo}   alt="Logo do SmartCash"  />
            <ul className="flex gap-12">
                <li className={active == "home" ? classActive : ""}>
                    <Link href="/">home</Link>
                </li>
                <li className={active == "faturamento" ? classActive : ""}>
                    <Link href="/faturamento">faturamento</Link>
                </li>
            </ul>
            <div className="w-16 overflow-hidden">
                <h3>Empresa</h3>
            </div>
        </nav>
    )
}