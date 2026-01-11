
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

export default function ExploreSitters() {
    const [sitters, setSitters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSitters() {
            // Assuming 'listings' table contains sitter service details
            // and links to 'profiles' via 'sitter_id'
            const { data, error } = await supabase
                .from('listings')
                .select(`
          *,
          sitter:profiles!sitter_id(id, full_name, avatar_url, location)
        `);

            if (error) {
                console.error('Error fetching sitters:', error);
            } else {
                setSitters(data || []);
            }
            setLoading(false);
        }

        fetchSitters();
    }, []);

    if (loading) return <div className="p-4">Loading sitters...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Find a Sitter</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sitters.map((listing) => (
                    <div key={listing.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    {listing.sitter?.avatar_url ? (
                                        <img className="h-10 w-10 rounded-full" src={listing.sitter.avatar_url} alt="" />
                                    ) : (
                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500 font-medium">{listing.sitter?.full_name?.charAt(0)}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">{listing.title}</h3>
                                    <p className="text-sm text-gray-500">by {listing.sitter?.full_name}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600 line-clamp-3">{listing.description}</p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center text-sm text-gray-500">
                                    <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                    {listing.sitter?.location || 'Unknown Location'}
                                </div>
                                <div className="text-lg font-bold text-indigo-600">${listing.price}/night</div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                            <Link to={`/sitters/${listing.sitter?.id}`} className="block w-full text-center font-medium text-indigo-600 hover:text-indigo-500">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
