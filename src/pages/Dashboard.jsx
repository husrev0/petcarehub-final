import { Wallet, Users, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Bakıcı Paneli</h1>
      
      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Toplam Kazanç</h3>
            <Wallet className="text-green-500" size={24} />
          </div>
          <div className="text-3xl font-bold text-gray-900">$1,250</div>
          <div className="text-sm text-green-600 mt-2">+12% geçen aydan</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Görüntülenme</h3>
            <Users className="text-blue-500" size={24} />
          </div>
          <div className="text-3xl font-bold text-gray-900">843</div>
          <div className="text-sm text-blue-600 mt-2">Bu hafta</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Aktif İlanlar</h3>
            <TrendingUp className="text-purple-500" size={24} />
          </div>
          <div className="text-3xl font-bold text-gray-900">2</div>
          <div className="text-sm text-gray-500 mt-2">Yönet</div>
        </div>
      </div>
    </div>
  );
}
