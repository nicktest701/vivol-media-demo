import React from 'react';

const Content = ({ children }) => {
  return (
    <section className='mx-auto max-w-[1200px] w-full bg-slate-500 px-5'>
      {children}
    </section>
  );
};

export default Content;
