import { Link } from 'react-router-dom';

export default function MyPets() {
  const pets = [
    { id: 1, name: 'Boncuk', type: 'Kedi', age: '2 Yaşında', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Paşa', type: 'Köpek', age: '4 Yaşında', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <div className="bg-white py-10 px-6 sm:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Evcil Hayvanlarım</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">+ Yeni Ekle</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {pets.map((pet) => (
          <div key={pet.id} className="border rounded-lg p-4 flex gap-4 items-center shadow-sm">
            <img src={pet.image} alt={pet.name} className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h3 className="text-lg font-bold text-gray-900">{pet.name}</h3>
              <p className="text-gray-500">{pet.type} • {pet.age}</p>
              <Link to="#" className="text-indigo-600 text-sm mt-1 block">Düzenle</Link>
            </div>
          </div>
        ))}
        {/* Boş Kart (Ekleme Görünümü) */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center text-gray-400 h-32 cursor-pointer hover:border-indigo-500 hover:text-indigo-500">
          <span className="text-2xl">+</span>
          <span className="text-sm">Yeni Dost Ekle</span>
        </div>
      </div>
    </div>
  );
}
