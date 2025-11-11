
import { Outlet, Link } from "react-router-dom";
import Header from "../b_components/Header";

export default function Layout() {
    return (
        <div className="h-screen w-screen">
            <Header/>
            <main className="min-h-screen pt-12 flex items-center justify-center">
                <Outlet/>
            </main>

            <footer className="h-[80px] w-screen bg-black/90 text-white">
                <p>Some Footer Text Some Footer TextSome Footer TextSome Footer TextSome Footer TextSome Footer Text</p>
            </footer>
        </div>
    )
}