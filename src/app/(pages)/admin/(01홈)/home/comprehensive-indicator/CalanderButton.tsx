import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react';
import { Input } from 'postcss';
import { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { IoReload } from 'react-icons/io5';
// Define the props for the CalendarButton component
interface CalendarButtonProps {
  index: number; // Type-safe index for each button
}

const CalendarButton: React.FC<CalendarButtonProps> = ({ index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isDateSet, setIsDateSet] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    if (startDate && endDate) {
      setIsDateSet(true); // Set color if both dates are filled
    } else {
      setIsDateSet(false); // Ensure it's unset if inputs are empty
    }
    setIsModalOpen(false);
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setIsDateSet(false); // Reset the color when inputs are cleared
  };

  return (
    <div>
      {/* Button */}
      <button
        key={index}
        className='w-[160px] self-stretch flex items-center justify-center py-2'
        onClick={handleOpenModal}
      >
        <FaCalendar
          className={isDateSet ? 'text-[#8D64F8]' : 'text-gray-400'}
        />
      </button>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className='bg-white rounded-xl'
        size='md'
      >
        <ModalContent>
          <ModalBody className='p-6'>
            <div className='space-y-6'>
              <h3 className='text-xl font-bold text-center'>기간 설정</h3>

              {/* Inputs for Start and End Dates */}
              <div className='flex items-center justify-center gap-2'>
                <div className='flex items-center'>
                  <input
                    type='date'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className='max-w-[150px] bg-[#ffffff] border-[1px] py-2 px-3  border-[#CFD4DA] rounded-md'
                  />
                  <p className='px-3'>~</p>
                  <input
                    type='date'
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className='max-w-[150px] bg-[#ffffff] border-[1px] py-2 px-3 border-[#CFD4DA] rounded-md'
                  />
                </div>

                {/* Reset Button */}
                <button
                  onClick={handleReset}
                  className='py-3 px-3 border border-gray-200 rounded-lg hover:bg-gray-50'
                >
                  <IoReload className='text-gray-600' size={20} />
                </button>
              </div>

              {/* Submit Button */}
              <div className='flex justify-center'>
                <Button
                  className='bg-[#2B2D36] text-white px-8 rounded-lg'
                  onClick={handleSubmit}
                >
                  확인
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CalendarButton;
