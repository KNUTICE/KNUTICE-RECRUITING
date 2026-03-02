import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {ApplyButton} from "../recruiting/components/ApplyButton.tsx";

export default function Layout() {
    // Hook into the router's current state
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

            {/* The Smart Global Navbar */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

                    {!isMainPage ? (
                        /* --- SUB PAGES APPBAR --- */
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft size={18} />
                            <span>지원 페이지로 돌아가기</span>
                        </Link>
                    ) : (
                        /* --- DEFAULT MAIN APPBAR --- */
                        <>
                            <Link to="/" className="font-extrabold text-xl tracking-tight text-gray-900">
                                Team <span className="text-knutice">KNUTICE</span>
                            </Link>

                            <div className="flex items-center gap-6">
                                <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                                    <Link to="/team" className="hover:text-knutice transition-colors">팀 소개</Link>
                                    <Link to="/culture" className="hover:text-knutice transition-colors">협업하는 방식</Link>
                                </nav>

                                {/* Center-End: The Action Button */}
                                <ApplyButton className="px-5 py-2 text-sm rounded-full" />
                            </div>
                        </>
                    )}

                </div>
            </header>

            {/* Main Content Slot */}
            <main>
                <Outlet />
            </main>

        </div>
    );
}