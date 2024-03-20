/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ myproject, onClose }) => (
  <div
    className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
    onClick={onClose}
  >
    <div
      onClick={(event) => event.stopPropagation()}
      className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
    >
      <AiOutlineClose
        className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
        onClick={onClose}
      />
      <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
        {myproject.type}
      </h2>
      <h4 className="my-2 text-gray-500">{myproject.id}</h4>
      <div className="flex justiry-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{myproject.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{myproject.author}</h2>
      </div>
      <p className="mt-4">Anything You want to Show!</p>
      <p className="my-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </p>
    </div>
  </div>
);

export default BookModal;
