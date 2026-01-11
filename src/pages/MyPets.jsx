
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Plus, Dog } from 'lucide-react';

export default function MyPets() {
    const { user } = useAuth();
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPets() {
            if (!user) return;

            const { data, error } = await supabase
                .from('pets')
                .select('*')
                .eq('owner_id', user.id); // Assuming owner_id links to auth.uid()

            if (error) {
                console.error('Error fetching pets:', error);
            } else {
                setPets(data || []);
            }
            setLoading(false);
        }

        fetchPets();
    }, [user]);

    if (loading) return <div className="p-4">Loading pets...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">My Pets</h1>
                <Link to="/pets/add" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    <Plus className="mr-2 h-5 w-5" />
                    Add Pet
                </Link>
            </div>

            {pets.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                    <Dog className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No pets added</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by adding your furry friends.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {pets.map((pet) => (
                        <div key={pet.id} className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{pet.name}</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">{pet.breed} • {pet.age} years old</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
