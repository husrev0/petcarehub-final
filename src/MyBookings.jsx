export default function MyBookings() {
  // Demo veri (Veritabanı boşsa bile dolu görünsün)
  const bookings = [
    { id: 1, sitter: 'Ahmet Yılmaz', date: '15 Jan 2026', status: 'Onaylandı', price: 150 },
    { id: 2, sitter: 'Ayşe Demir', date: '22 Jan 2026', status: 'Bekliyor', price: 75 },
    { id: 3, sitter: 'Mehmet Öz', date: '01 Feb 2026', status: 'Tamamlandı', price: 200 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Rezervasyonlarım</h1>
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <ul className="divide-y divide-gray-200">
          {bookings.map((booking) => (
            <li key={booking.id} className="p-6 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{booking.sitter}</h3>
                  <p className="text-sm text-gray-500">{booking.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">${booking.price}</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    booking.status === 'Onaylandı' ? 'bg-green-100 text-green-800' : 
                    booking.status === 'Bekliyor' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
