import { Link } from 'react-router-dom';

export default function PlaceholderPage() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
          🚧 Yapım Aşamasında
        </h2>
        <p className="mt-4 text-gray-600">
          Bu özellik MVP kapsamında yakında eklenecek.
        </p>
        <div className="mt-10">
          <Link 
            to="/dashboard" 
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
