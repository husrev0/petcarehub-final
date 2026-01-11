export default function ProfileSettings() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-6 bg-white shadow sm:rounded-lg">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Profil Ayarları</h1>
        <p className="text-gray-500">Kişisel bilgilerinizi buradan güncelleyebilirsiniz.</p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Adınız</label>
            <input type="text" defaultValue="Zeynep Betül" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Soyadınız</label>
            <input type="text" defaultValue="AK" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
            <input type="email" defaultValue="zeynep@ornek.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Telefon</label>
            <input type="tel" defaultValue="+90 555 000 0000" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="button" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Kaydet</button>
        </div>
      </form>
    </div>
  );
}
