import React from 'react';

const Divider = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-2/3 h-px bg-linear-to-r from-transparent via-blue-400/40
      to-transparent rounded-full shadow-[0_0_10px_rgba(96,165,250,0.2)]"></div>
    </div>
  );
};

export default Divider;