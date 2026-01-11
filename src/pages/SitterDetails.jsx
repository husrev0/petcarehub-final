import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { MapPin, Shield, Star, Calendar } from 'lucide-react';

export default function SitterDetails() {
  const { id } = useParams(); // URL'den gelen ID (Sitter ID)
  const [sitter, setSitter] = useState(null);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      // 1. Önce Profil Bilgisini Çek
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single();
      
      setSitter(profileData);

      // 2. Sonra İlan Bilgisini Çek (Bu kişinin ilanı var mı?)
      const { data: listingData } = await supabase
        .from('listings')
        .select('*')
        .eq('sitter_id', id)
        .single(); // Tek ilan varsayıyoruz

      setListing(listingData);
      setLoading(false);
    }

    fetchDetails();
  }, [id]);

  if (loading) return <div className="p-10 text-center">Yükleniyor...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Üst Kart: Profil ve Başlık */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="bg-indigo-600 h-32"></div>
        <div className="px-6 pb-6">
          <div className="relative flex justify-between items-end -mt-12 mb-4">
            <img 
              src={sitter?.avatar_url || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} 
              alt="Profile" 
              className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-md"
            />
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition">
              Rezervasyon Yap
            </button>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{sitter?.full_name || 'İsimsiz Kullanıcı'}</h1>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin size={18} className="mr-1" />
              {sitter?.location || 'Konum belirtilmemiş'}
            </div>
          </div>
        </div>
      </div>

      {/* Alt Bölüm: İlan Detayları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Hakkında</h2>
            <p className="text-gray-600 leading-relaxed">
              {listing?.description || "Bu kullanıcı henüz bir açıklama girmemiş."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Hizmet Detayları</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg">
                <Shield size={20} className="mr-2" />
                <span>Doğrulanmış Bakıcı</span>
              </div>
              <div className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                <Star size={20} className="mr-2" />
                <span>5.0 Puan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Fiyat Kartı */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-fit">
          <h3 className="text-lg font-semibold text-gray-500 mb-2">Gecelik Fiyat</h3>
          <div className="text-4xl font-bold text-gray-900 mb-6">
            ${listing?.price || 0}
            <span className="text-lg text-gray-400 font-normal"> / gece</span>
          </div>
          <div className="space-y-3 text-gray-600 mb-6">
            <div className="flex items-center justify-between">
              <span>Hizmet Ücreti</span>
              <span>$0</span>
            </div>
            <div className="flex items-center justify-between font-bold text-gray-900 pt-3 border-t">
              <span>Toplam</span>
              <span>${listing?.price || 0}</span>
            </div>
          </div>
          <div className="text-xs text-center text-gray-400">
            Ödeme güvencesi altındasınız.
          </div>
        </div>
      </div>
    </div>
  );
}
