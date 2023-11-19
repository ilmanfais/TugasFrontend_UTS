import React from 'react';

const Header = () => {
  return (
    <header className='bg-[#245375] py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
            <h4 className='text-[20px] font-bold leading-[0.8] lg:text-[40px] text-accent'>Ilman Fais</h4>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
