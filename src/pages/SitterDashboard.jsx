export default function SitterDashboard() {
  return (
    <div className="py-10 px-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Bakıcı Paneli</h1>
      
      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500">Toplam Kazanç</dt>
          <dd className="mt-1 text-3xl font-semibold text-indigo-600">4.500₺</dd>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500">Tamamlanan İşler</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">12</dd>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500">Profil Puanı</dt>
          <dd className="mt-1 text-3xl font-semibold text-yellow-500">4.9 ★</dd>
        </div>
      </div>

      {/* Gelen Talepler Tablosu */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Son İş Talepleri</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-4 flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Ahmet Y. (Golden Retriever)</p>
              <p className="text-sm text-gray-500">14-16 Ocak • 2 Gece</p>
            </div>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Onaylandı</span>
          </li>
          <li className="py-4 flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Mehmet K. (Tekir Kedi)</p>
              <p className="text-sm text-gray-500">20 Ocak • Günübirlik</p>
            </div>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Bekliyor</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
