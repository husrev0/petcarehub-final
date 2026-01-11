
import { PawPrint } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <p className="text-gray-400 hover:text-gray-500">
                        © 2024 PetCareHub. All rights reserved.
                    </p>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <div className="flex justify-center md:justify-start items-center">
                        <PawPrint className="h-6 w-6 text-gray-400" />
                        <span className="ml-2 text-gray-400 text-sm">Made with love for pets.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
