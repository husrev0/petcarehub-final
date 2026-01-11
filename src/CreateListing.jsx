import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateListing() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo olduğu için direkt başarı sayfasına yönlendiriyoruz
    navigate('/success');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Yeni İlan Oluştur</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">İlan Başlığı</label>
          <input required type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Örn: Profesyonel Kedi Bakıcısı" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Açıklama</label>
          <textarea required rows={4} className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Hizmet detaylarınızı anlatın..." />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Gecelik Fiyat ($)</label>
            <input required type="number" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Konum</label>
            <input required type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="İstanbul" />
          </div>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700">
          İlanı Yayınla
        </button>
      </form>
    </div>
  );
}
