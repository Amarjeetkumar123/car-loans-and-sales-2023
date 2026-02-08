import { Link, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminLayout = () => {
  const { logout, admin } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-primary">Admin Panel</h2>
          <p className="text-sm text-gray-400 mt-1">{admin?.name || 'Admin'}</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/admin/dashboard"
            className={`block px-4 py-2 rounded ${isActive('/admin/dashboard') ? 'bg-primary text-white' : 'text-gray-300 hover:bg-gray-700'}`}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/leads"
            className={`block px-4 py-2 rounded ${isActive('/admin/leads') ? 'bg-primary text-white' : 'text-gray-300 hover:bg-gray-700'}`}
          >
            Leads
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{admin?.email}</span>
            <button
              onClick={logout}
              className="md:hidden btn-outline text-sm"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
