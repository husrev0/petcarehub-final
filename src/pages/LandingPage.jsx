import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-white">
      
      {/* --- HERO BÖLÜMÜ (GİRİŞ) --- */}
      <div className="relative isolate px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Yeni nesil evcil hayvan bakımı. <Link to="/register" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true" />Daha fazla bilgi <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Dostlarınız İçin <br />
            <span className="text-indigo-600">Güvenilir Bir Yuva</span> Bulun
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Seyahate mi gidiyorsunuz? PetCareHub ile evcil hayvanınız için en iyi bakıcıyı bulun.
            Güvenli, onaylı ve sevgi dolu bakıcılar bir tık uzağınızda.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/create-listing"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Hemen İlan Ver
            </Link>
            <Link to="/bookings" className="text-sm font-semibold leading-6 text-gray-900">
              Randevularım <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* --- ÖZELLİKLER BÖLÜMÜ (NEDEN BİZ?) --- */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Neden PetCareHub?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Gözünüz Arkada Kalmasın
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              
              {/* KART 1 */}
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    🛡️
                  </div>
                  Onaylı Bakıcılar
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Tüm bakıcılarımız kimlik doğrulamasından geçer ve referansları kontrol edilir.
                </dd>
              </div>

              {/* KART 2 */}
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    💳
                  </div>
                  Güvenli Ödeme
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Ödemeniz hizmet tamamlanana kadar havuzda tutulur, paranız güvendedir.
                </dd>
              </div>

              {/* KART 3 */}
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    🩺
                  </div>
                  7/24 Destek
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Acil durumlarda veteriner desteği ve müşteri hizmetlerine anında ulaşın.
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </div>
      
    </div>
  );
}
