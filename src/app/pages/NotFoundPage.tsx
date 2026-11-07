import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#271ED4] to-[#207EA8]">
      <div className="text-center text-white px-6">
        <h1 className="text-9xl mb-4">404</h1>
        <h2 className="text-4xl mb-6">Página No Encontrada</h2>
        <p className="text-xl mb-8 opacity-90">
          Lo sentimos, la página que busca no existe.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#FA8200] hover:bg-[#E67700] text-white px-8 py-3 rounded-lg transition-colors"
        >
          <Home className="w-5 h-5" />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
