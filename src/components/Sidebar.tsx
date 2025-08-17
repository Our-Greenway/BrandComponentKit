import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Link, useLocation  } from 'react-router-dom';
type BrandkitItem = {
    id: number;
    title: string;
  };

function Sidebar() {
    const [items, setItems] = useState<BrandkitItem[]>([]);
    const location = useLocation();

    const isActivePath = (path: string) => location.pathname.startsWith(path);

  useEffect(() => {
    supabase
      .from('brandkit')
      .select('id, title') // include 'id' for linking
      .then(({ data, error }) => {
        if (error) {
          console.error('Error fetching items:', error);
        } else {
          setItems((data || []).slice().reverse()); // reverse if needed
        }
      });
  }, []);

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-gray-600">Loading…</div>
      </div>
    );
  }

  return (
<div className="pl-6  font-medium text-gray-900">
  <Link to="/brand" className={isActivePath('/brand') ? 'font-bold text-black' : 'text-gray-700'}>
    <div className={`${isActivePath('/brand') ? 'font-bold text-black pb-2' : 'text-gray-700 pb-2'}`}>
      Brand
    </div>
    </Link>
  <Link to="/assets" className={isActivePath('/assets') ? 'font-bold text-black' : 'text-gray-700'}>
    <div className={`${isActivePath('/assets') ? 'font-bold text-black pb-2' : 'text-gray-700 pb-2'}`}>
      Assets
    </div>
  </Link>
  <Link to="/nationbuilder" className={isActivePath('/nationbuilder') ? 'font-bold text-black' : 'text-gray-700 '}>
    <div className={`${isActivePath('/nationbuilder') ? 'font-bold text-black pb-2' : 'text-gray-700 pb-2'}`}>
      Nationbuilder Components
    </div>
  </Link>
  <div className="relative ml-3">

    {/* vine */}
    <div className="absolute top-2.5 left-3 w-1 bg-gray-400 rounded-full z-0" style={{ bottom: '1rem' }} />

    {items.map((item) => {
      const path = `/component/${item.id}`;
      const isActive = isActivePath(path);
      return (
        <div key={item.id} className="relative flex items-start pb-6 last:pb-0 z-10">
          {/* Dot */}
          <div
            className={`relative z-10 w-6.5 h-6.5 rounded-full shrink-0 ${
              isActive ? 'bg-black' : 'bg-gray-500'
            } border-2 border-white`}
          />

          {/* Link Text */}
          <Link to={`/component/${item.id}`} className="hover:underline no-underline">
            <div className={`pl-4 ${isActive ? 'font-bold text-black' : 'text-gray-700'}`}>
              {item.title}
            </div>
          </Link>
        </div>
      );
    })}
  </div>
</div>
  );
}
export default Sidebar;