export default function MyBookings() {
  
  // SAHTE RANDEVU VERİLERİ
  const bookings = [
    {
      id: 101,
      sitterName: "Ayşe Y.",
      petName: "Pamuk",
      date: "12 Ocak 2026",
      status: "Onaylandı",
      statusColor: "text-green-700 bg-green-50",
      price: "1500₺"
    },
    {
      id: 102,
      sitterName: "Mehmet K.",
      petName: "Karabaş",
      date: "20 Ocak 2026",
      status: "Bekliyor",
      statusColor: "text-yellow-700 bg-yellow-50",
      price: "750₺"
    },
    {
      id: 103,
      sitterName: "Zeynep B.",
      petName: "Boncuk",
      date: "05 Ocak 2026",
      status: "Tamamlandı",
      statusColor: "text-gray-700 bg-gray-50",
      price: "450₺"
    }
  ];

  return (
    <div className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">Randevularım</h1>
          <p className="mt-2 text-sm text-gray-700">
            Yaklaşan ve geçmiş tüm bakım hizmetlerinizi buradan takip edebilirsiniz.
          </p>
        </div>
      </div>
      
      {/* TABLO YAPISI */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Bakıcı</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Evcil Hayvan</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Tarih</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Durum</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Ücret</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {booking.sitterName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{booking.petName}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{booking.date}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${booking.statusColor}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{booking.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
