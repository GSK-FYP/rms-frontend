import { RouterProvider } from "react-router-dom";
import router from "../../configs/router";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-gray-800 text-white py-4 px-6">
                <Header/>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                <RouterProvider router={router} />
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 px-6">
                <Footer/>
            </footer>
        </div>
    );
};

export default AppLayout;
