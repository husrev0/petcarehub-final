import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <CheckCircle size={80} className="text-green-500 mb-6" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">İşlem Başarılı!</h1>
      <p className="text-gray-600 mb-8">İlanınız başarıyla oluşturuldu ve yayına alındı.</p>
      <Link to="/" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
