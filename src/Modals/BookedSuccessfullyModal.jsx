import React from 'react';

const BookedSuccessfullyModal = ({ isOpen, onClose, children }) => {
   if(!isOpen) return null;
   return ( 
      <>
         <div className="modal-overlay" onClick={onClose}>
      <div className="modal-contents" onClick={e => e.stopPropagation()}>
    <section className='flex items-center justify-end'> 
   <section className='absolute'>
   <button className="bg-[#041C32] h-[35px] w-[120px] rounded-md text-white relative top-64 right-28" onClick={onClose}>Back</button>
   </section>
    </section>
        {children}
      </div>
    </div>
      </>
    );
}
 
export default BookedSuccessfullyModal;


