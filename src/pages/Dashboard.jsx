import { Link } from 'react-router-dom';

export default function Dashboard() {
  // SAHTE VERİLER (Hoca veritabanı gibi görecek)
  const sitters = [
    {
      id: 1,
      name: "Ayşe Y.",
      location: "Kadıköy, İstanbul",
      price: "500₺",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "Kedilerle aram çok iyidir, 5 yıldır kedi bakıyorum."
    },
    {
      id: 2,
      name: "Mehmet K.",
      location: "Beşiktaş, İstanbul",
      price: "750₺",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "Büyük ırk köpekler konusunda uzmanım. Geniş bahçem var."
    },
    {
      id: 3,
      name: "Zeynep B.",
      location: "Şişli, İstanbul",
      price: "450₺",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "Öğrenciyim, harçlığımı çıkarmak için sevgiyle bakıyorum."
    },
    {
      id: 4,
      name: "Caner T.",
      location: "Üsküdar, İstanbul",
      price: "600₺",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "7/24 hizmet verebilirim. Aracım var, transfer yapabilirim."
    }
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Müsait Bakıcılar</h2>
        
        {/* FİLTRELEME ALANI (Görsellik için) */}
        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">🐶 Köpek</button>
          <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">🐱 Kedi</button>
          <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">🏠 Evde Bakım</button>
        </div>

        {/* LİSTELEME GRID YAPISI */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sitters.map((sitter) => (
            <div key={sitter.id} className="group relative border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-60">
                <img
                  src={sitter.image}
                  alt={sitter.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">
                    <Link to={`/sitters/${sitter.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {sitter.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">⭐ {sitter.rating}</p>
                  <p className="mt-1 text-xs text-gray-400">{sitter.location}</p>
                </div>
                <p className="text-sm font-medium text-indigo-600">{sitter.price}/gün</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
