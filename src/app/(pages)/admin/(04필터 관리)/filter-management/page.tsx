'use client'; // Ensures this component is rendered client-side in Next.js

// Importing necessary modules and components
import Image from 'next/image'; // Image handling in Next.js
import CommonHeader from '@/components/CommonHeader'; // Custom header component
import { useState } from 'react'; // React hook for state management
import assets from '@/assets'; // Assets (like images) to be used

// NextUI Modal components and elements to create modals for category/item management
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
} from '@nextui-org/react';

// Interface to define the structure of a FilterCategory
interface FilterCategory {
  id: string;
  name: string;
  items: string[]; // Array of items in the category
}

const FilterManagement = () => {
  // ****************** State Management *******************

  // This state keeps track of the language setting (for toggling between middle and high school language)
  const [higherLanguage, setHigherLanguage] = useState(true);

  //! States for managing categories and items
  const [categories, setCategories] = useState<FilterCategory[]>([]); // Store categories (empty array initially)
  const [isAddingCategory, setIsAddingCategory] = useState(false); // Boolean state for modal visibility (Add Category)
  const [isEditingCategory, setIsEditingCategory] = useState<string | null>(
    null
  ); // State for the category being edited

  //! States for managing items
  const [isAddingItem, setIsAddingItem] = useState<string | null>(null); // Boolean state for modal visibility (Add Item)
  const [isEditingItem, setIsEditingItem] = useState<{
    categoryId: string; // Category ID to identify which category item belongs to
    itemIndex: number; // Index of the item in the category
  } | null>(null); // State for the item being edited

  // !State for both category and item temporal data
  const [newItemValue, setNewItemValue] = useState(''); // State for the input field to store new item or category value

  // ****************** Handlers for Managing Categories and Items *******************

  // Function to handle adding a new category
  const handleAddCategory = () => {
    if (newItemValue.trim()) {
      setCategories([
        // Add the new category to the state
        ...categories, // Spread existing categories
        {
          id: Date.now().toString(), // Create a unique ID based on current timestamp
          name: newItemValue.trim(), // Set the category name
          items: [], // Initialize with an empty items array
        },
      ]);
      setNewItemValue(''); // Clear the input field
      setIsAddingCategory(false); // Close the modal
    }
  };

  // Function to handle adding a new item to a specific category
  const handleAddItem = (categoryId: string) => {
    if (newItemValue.trim()) {
      setCategories(
        // Update the categories state
        categories.map((category) => {
          if (category.id === categoryId) {
            return {
              ...category, // Spread existing category
              items: [...category.items, newItemValue.trim()], // Add the new item to the category's items list
            };
          }
          return category; // Keep other categories unchanged
        })
      );
      setNewItemValue(''); // Clear input field
      setIsAddingItem(null); // Close the modal
    }
  };

  // Function to handle editing a category
  const handleEditCategory = () => {
    if (isEditingCategory && newItemValue.trim()) {
      setCategories(
        // Update the category name
        categories.map((category) => {
          if (category.id === isEditingCategory) {
            return {
              ...category,
              name: newItemValue.trim(), // Update the category name
            };
          }
          return category; // Keep other categories unchanged
        })
      );
      setNewItemValue(''); // Clear the input field
      setIsEditingCategory(null); // Close the edit mode
    }
  };

  // Function to handle editing an item
  const handleEditItem = () => {
    if (isEditingItem && newItemValue.trim()) {
      setCategories(
        // Update the item name
        categories.map((category) => {
          if (category.id === isEditingItem.categoryId) {
            const newItems = [...category.items]; // Copy existing items array
            newItems[isEditingItem.itemIndex] = newItemValue.trim(); // Replace the item at the specific index
            return {
              ...category,
              items: newItems, // Update the category's items list
            };
          }
          return category; // Keep other categories unchanged
        })
      );
      setNewItemValue(''); // Clear the input field
      setIsEditingItem(null); // Close the edit mode
    }
  };

  // Function to handle deleting a category
  const handleDeleteCategory = () => {
    if (isEditingCategory) {
      setCategories(
        // Remove the category from the state
        categories.filter((category) => category.id !== isEditingCategory) // Filter out the category being deleted
      );
      setIsEditingCategory(null); // Close the edit mode
    }
  };

  // Function to handle deleting an item from a category
  const handleDeleteItem = () => {
    if (isEditingItem) {
      setCategories(
        // Remove the item from the category
        categories.map((category) => {
          if (category.id === isEditingItem.categoryId) {
            return {
              ...category,
              items: category.items.filter(
                // Remove item by index
                (_, index) => index !== isEditingItem.itemIndex
              ),
            };
          }
          return category; // Keep other categories unchanged
        })
      );
      setIsEditingItem(null); // Close the edit mode
    }
  };

  return (
    <section>
      <CommonHeader title='필터 항목 관리' />
      <header>
        <div className='flex items-center gap-1 bg-bgGray p-1 rounded-lg '>
          <button
            className={`font-bold px-3 py-2 ${higherLanguage ? ' bg-white text-mainBlue rounded-lg' : 'bg-transparent text-secondGray'}`}
            onClick={() => setHigherLanguage(true)}
          >
            고등 국어
          </button>
          <button
            className={`font-bold px-3 py-2 ${!higherLanguage ? ' bg-white text-mainBlue rounded-lg' : 'bg-transparent text-secondGray'}`}
            onClick={() => setHigherLanguage(false)}
          >
            중학 국어
          </button>
        </div>
      </header>

      <div className='mt-5 flex items-center gap-3'>
        <h3 className='font-bold text-xl text-mainBlack'>
          고등국어(모의고사 자료)
        </h3>
        <Button
          className='flex items-center gap-2 px-3 py-2 border-2 border-grayLightBorder rounded text-secondGray'
          onPress={() => setIsAddingCategory(true)}
          variant='light'
        >
          <p>추가</p>
          <Image src={assets.addNew} alt='Add new item' />
        </Button>
      </div>
      {/* Display Categories and Items */}
      <div className='mt-3'>
        {categories.map((category) => (
          <div
            key={category.id}
            className='flex items-center gap-4 border-1 border-grayLightBorder border-collapse'
          >
            <div className='flex items-center gap-2'>
              {/* Button to edit the category */}
              <Button
                className='rounded-none px-5 text-center border-r border-grayLightBorder py-6 font-bold text-secondGray bg-bgGray'
                onClick={() => {
                  setIsEditingCategory(category.id); // Open edit mode for category
                  setNewItemValue(category.name); // Set the category name to input field
                }}
              >
                <p>{category.name}</p>
              </Button>
            </div>
            <div className='flex flex-wrap gap-4'>
              {/* Display items in the category */}
              {category.items.map((item, index) => (
                <div key={index} className='flex items-center'>
                  <button
                    onClick={() => {
                      setIsEditingItem({
                        categoryId: category.id,
                        itemIndex: index,
                      }); // Open edit mode for item
                      setNewItemValue(item); // Set item value to input field
                    }}
                  >
                    <p className='text-secondGray'>{item}</p>
                  </button>
                </div>
              ))}
              {/* Button to add a new item */}
              <button onClick={() => setIsAddingItem(category.id)}>
                <Image src={assets.borderedAddNew} alt='Add sub category' />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding new category */}
      <Modal
        isOpen={isAddingCategory}
        onClose={() => setIsAddingCategory(false)}
        className='py-10 px-3'
      >
        <ModalContent>
          <ModalHeader>
            <h3 className='font-bold text-3xl text-center'>항목 추가</h3>
          </ModalHeader>
          <ModalBody className='mt-5'>
            <Input
              placeholder='새 항목'
              variant='bordered'
              radius='sm'
              size='lg'
              value={newItemValue}
              onChange={(e) => setNewItemValue(e.target.value)}
            />
          </ModalBody>
          <ModalFooter className='flex items-center justify-center'>
            <button
              className='bg-mainBlack text-white py-2 px-4 rounded-md'
              onClick={handleAddCategory}
            >
              등록
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal for adding new item to category */}
      <Modal isOpen={!!isAddingItem} onClose={() => setIsAddingItem(null)}>
        <ModalContent>
          <ModalHeader>새부항목 추가</ModalHeader>
          <ModalBody>
            <Input
              placeholder='새부항목'
              value={newItemValue}
              onChange={(e) => setNewItemValue(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <button
              className='bg-mainBlack text-white py-2 px-4 rounded-md'
              onClick={() => isAddingItem && handleAddItem(isAddingItem)}
            >
              등록
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal for editing category */}
      <Modal
        isOpen={!!isEditingCategory}
        onClose={() => setIsEditingCategory(null)}
      >
        <ModalContent>
          <ModalHeader>항목 수정</ModalHeader>
          <ModalBody>
            <Input
              placeholder='항목 이름'
              value={newItemValue}
              onChange={(e) => setNewItemValue(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <button
              className='bg-[#ECEDF1] text-[#ED3D2E] py-2 px-4 rounded-md'
              onClick={handleDeleteCategory}
            >
              삭제
            </button>
            <button
              className='bg-mainBlack mx-1 text-white py-2 px-4 rounded-md'
              onClick={handleEditCategory}
            >
              수정
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal for editing item */}
      <Modal isOpen={!!isEditingItem} onClose={() => setIsEditingItem(null)}>
        <ModalContent>
          <ModalHeader>새부항목 수정</ModalHeader>
          <ModalBody>
            <Input
              placeholder='새부항목 이름'
              value={newItemValue}
              onChange={(e) => setNewItemValue(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <button
              className='bg-bgGray text-[#ED3D2E] py-2 px-4 rounded-md'
              onClick={handleDeleteItem}
            >
              삭제
            </button>
            <button
              className='bg-mainBlack mx-1 text-white py-2 px-4 rounded-md'
              onClick={handleEditItem}
            >
              수정
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default FilterManagement;
