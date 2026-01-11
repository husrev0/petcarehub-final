import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        let { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (data) {
          setFullName(data.full_name || '');
          setLocation(data.location || '');
          // Bio veya avatar eklenebilir
        }
      }
    } catch (error) {
      console.log('Error loading profile', error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile() {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('profiles')
        .update({ 
            full_name: fullName,
            location: location,
            updated_at: new Date(),
        })
        .eq('id', user.id);

      if (error) throw error;
      alert('Profil güncellendi Kral! ✅');
    } catch (error) {
      alert('Hata oluştu!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Profil Ayarları</h1>
      
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        
        {/* Email (Değiştirilemez) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="text" 
            disabled 
            value={user?.email || ''} 
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm p-2 text-gray-500"
          />
        </div>

        {/* İsim Soyisim */}
        <div>
          <label className="block text-sm font-medium text-gray-700">İsim Soyisim</label>
          <input 
            type="text" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Adın Soyadın"
          />
        </div>

        {/* Konum */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Konum</label>
          <input 
            type="text" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Örn: İstanbul, Kadıköy"
          />
        </div>

        <button 
          onClick={updateProfile}
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Kaydediliyor...' : 'Kaydet'}
        </button>
      </div>
    </div>
  );
}
