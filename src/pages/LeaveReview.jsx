import { Link } from 'react-router-dom';

export default function LeaveReview() {
  return (
    <div className="max-w-lg mx-auto py-12 px-6 bg-white shadow-lg rounded-xl mt-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Hizmeti Değerlendir</h2>
        <p className="text-gray-500">Ayşe Y. ile geçen deneyimin nasıldı?</p>
      </div>

      <div className="flex justify-center gap-2 mb-6 text-4xl text-gray-300 cursor-pointer">
        <span className="hover:text-yellow-400">★</span>
        <span className="hover:text-yellow-400">★</span>
        <span className="hover:text-yellow-400">★</span>
        <span className="hover:text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
      </div>

      <textarea 
        rows={4}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-3"
        placeholder="Deneyimini buraya yaz..."
      />

      <div className="mt-6">
        <Link to="/bookings" className="block w-full bg-indigo-600 text-white text-center py-3 rounded-md font-bold hover:bg-indigo-700">
          Yorumu Gönder
        </Link>
      </div>
    </div>
  );
}
