
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { Calendar } from 'lucide-react';

export default function MyBookings() {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBookings() {
            if (!user) return;

            const { data, error } = await supabase
                .from('bookings')
                .select(`
          *,
          sitter:profiles!sitter_id(full_name)
        `)
                .eq('owner_id', user.id)
                .order('start_date', { ascending: true });

            if (error) {
                console.error('Error fetching bookings:', error);
            } else {
                setBookings(data || []);
            }
            setLoading(false);
        }

        fetchBookings();
    }, [user]);

    if (loading) return <div className="p-4">Loading bookings...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900">My Bookings</h1>

            {bookings.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                    <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings yet</h3>
                </div>
            ) : (
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                        {bookings.map((booking) => (
                            <li key={booking.id} className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium text-indigo-600 truncate">
                                        Sitter: {booking.sitter?.full_name || booking.sitter_id}
                                    </div>
                                    <div className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                            booking.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {booking.status}
                                    </div>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                            {booking.start_date} - {booking.end_date}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
