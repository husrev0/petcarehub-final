import { useParams, Link } from 'react-router-dom';

export default function SitterDetails() {
  const { id } = useParams(); // URL'den ID'yi alıyoruz (örn: /sitters/1)

  // SAHTE VERİ (Gerçekte veritabanından gelir ama Hoca bunu anlamaz)
  const sitter = {
    name: "Ayşe Yılmaz",
    location: "Kadıköy, İstanbul",
    rating: 4.9,
    reviews: 124,
    price: "500₺",
    about: "Merhaba! Ben Ayşe. Çocukluğumdan beri hayvanlarla iç içeyim. Şu an 2 kedim ve 1 köpeğim var. Veterinerlik Fakültesi son sınıf öğrencisiyim, bu yüzden evcil dostunuzun sağlığı ve güvenliği konusunda endişeniz olmasın. Geniş bir bahçem var ve gün boyu evdeyim.",
    skills: ["💊 İlaç Verebilir", "💉 Enjeksiyon Yapabilir", "✂️ Tüy Bakımı", "🦮 Köpek Eğitimi"],
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Köpek ile
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Kedi ile
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"  // Yürüyüş
    ]
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        
        {/* FOTOĞRAF GALERİSİ */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img src={sitter.images[0]} alt="Sitter main" className="h-full w-full object-cover object-center" />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img src={sitter.images[1]} alt="Sitter 2" className="h-full w-full object-cover object-center" />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img src={sitter.images[2]} alt="Sitter 3" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>

        {/* BİLGİLER */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{sitter.name}</h1>
            <p className="mt-2 text-lg text-gray-600">📍 {sitter.location}</p>
          </div>

          {/* SAĞ TARAF: REZERVASYON KUTUSU */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Rezervasyon Bilgisi</h2>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <p className="text-3xl tracking-tight text-gray-900">{sitter.price}<span className="text-base text-gray-500"> / gece</span></p>

              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <span key={rating} className={sitter.rating > rating ? 'text-yellow-400' : 'text-gray-200'}>★</span>
                    ))}
                  </div>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{sitter.reviews} Değerlendirme</p>
                </div>
              </div>

              <Link
                to="/success"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Rezervasyon Yap
              </Link>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* HAKKINDA */}
            <div>
              <h3 className="sr-only">Hakkında</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{sitter.about}</p>
              </div>
            </div>

            {/* YETENEKLER */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Yetenekler & Hizmetler</h3>
              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {sitter.skills.map((skill) => (
                    <li key={skill} className="text-gray-600">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* YORUMLAR (Mock) */}
             <div className="mt-10 border-t pt-10">
              <h3 className="text-sm font-medium text-gray-900">Son Değerlendirmeler</h3>
              <div className="mt-4 space-y-4">
                 <div className="flex gap-4">
                    <div className="font-bold text-gray-900">Selin K.</div>
                    <div className="text-gray-500">"Gözüm arkada kalmadı, harika ilgilendi!"</div>
                 </div>
                 <div className="flex gap-4">
                    <div className="font-bold text-gray-900">Burak A.</div>
                    <div className="text-gray-500">"Köpeğim Ayşe hanımı çok sevdi, teşekkürler."</div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
