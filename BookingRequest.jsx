
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

export default function BookingRequest() {
    const { id: sitterId } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleBooking = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase
            .from('bookings')
            .insert([
                {
                    owner_id: user.id,
                    sitter_id: sitterId,
                    start_date: startDate,
                    end_date: endDate,
                    status: 'pending',
                },
            ]);

        if (error) {
            alert('Error creating booking: ' + error.message);
            setLoading(false);
        } else {
            navigate('/bookings');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
            <h1 className="text-xl font-bold mb-4">Request Booking</h1>
            <form onSubmit={handleBooking} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                        type="date"
                        required
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50"
                >
                    {loading ? 'Sending Request...' : 'Send Request'}
                </button>
            </form>
        </div>
    );
}
