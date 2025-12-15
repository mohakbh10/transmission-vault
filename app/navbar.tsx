    // components/Navbar.jsx
    import Link from 'next/link';

    const Navbar = () => {
        return (
            <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                Transmission Vault
                </Link>
                <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="hover:text-gray-300">
                    About
                    </Link>
                </li>
                <li>
                    <Link href="/" className="hover:text-gray-300">
                    History
                    </Link>
                </li>
                </ul>
            </div>
            </nav>
        );
        };

    export default Navbar;