/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';

const BookModal = ({ myproject, onClose }) => (
  <div
    className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
    onClick={onClose}
  >
    <div
      onClick={(event) => event.stopPropagation()}
      className="w-[800px] max-w-full h-[700px] bg-white rounded-xl p-4 flex flex-col relative"
    >
      <AiOutlineClose
        className="absolute right-6 top-11 text-3xl text-red-600 cursor-pointer"
        onClick={onClose}
      />
      <h2 className="flex my-4 justify-center bg-green-300 rounded-lg">
        {myproject.title}
      </h2>
      <div className="portfolio--section--img">
        <img src={myproject.src} alt="Project" />
      </div>
      <div className="flex justiry-start items-center gap-x-2 my-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h4 className="my-1">{myproject.type}</h4>
        <h4 className="mx-20">
          ●
          {myproject.date}
        </h4>
      </div>
      <p className="my-3">
        {myproject.description}
      </p>
    </div>
  </div>
);

export default BookModal;
