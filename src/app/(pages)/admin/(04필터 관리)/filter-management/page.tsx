'use client';

import Image from 'next/image';
import CommonHeader from '@/components/CommonHeader';
import { useState } from 'react';
import assets from '@/assets';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
} from '@nextui-org/react';

interface FilterCategory {
  id: string;
  name: string;
  items: string[];
}

const FilterManagement = () => {
  const [higherLanguage, setHigherLanguage] = useState(true);

  const [categories, setCategories] = useState<FilterCategory[]>([]);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [isAddingItem, setIsAddingItem] = useState<string | null>(null);
  const [isEditingCategory, setIsEditingCategory] = useState<string | null>(
    null
  );
  const [isEditingItem, setIsEditingItem] = useState<{
    categoryId: string;
    itemIndex: number;
  } | null>(null);
  const [newItemValue, setNewItemValue] = useState('');

  const handleAddCategory = () => {
    if (newItemValue.trim()) {
      setCategories([
        ...categories,
        {
          id: Date.now().toString(),
          name: newItemValue.trim(),
          items: [],
        },
      ]);
      setNewItemValue('');
      setIsAddingCategory(false);
    }
  };

  const handleAddItem = (categoryId: string) => {
    if (newItemValue.trim()) {
      setCategories(
        categories.map((category) => {
          if (category.id === categoryId) {
            return {
              ...category,
              items: [...category.items, newItemValue.trim()],
            };
          }
          return category;
        })
      );
      setNewItemValue('');
      setIsAddingItem(null);
    }
  };

  const handleEditCategory = () => {
    if (isEditingCategory && newItemValue.trim()) {
      setCategories(
        categories.map((category) => {
          if (category.id === isEditingCategory) {
            return {
              ...category,
              name: newItemValue.trim(),
            };
          }
          return category;
        })
      );
      setNewItemValue('');
      setIsEditingCategory(null);
    }
  };

  const handleEditItem = () => {
    if (isEditingItem && newItemValue.trim()) {
      setCategories(
        categories.map((category) => {
          if (category.id === isEditingItem.categoryId) {
            const newItems = [...category.items];
            newItems[isEditingItem.itemIndex] = newItemValue.trim();
            return {
              ...category,
              items: newItems,
            };
          }
          return category;
        })
      );
      setNewItemValue('');
      setIsEditingItem(null);
    }
  };

  const handleDeleteCategory = () => {
    if (isEditingCategory) {
      setCategories(
        categories.filter((category) => category.id !== isEditingCategory)
      );
      setIsEditingCategory(null);
    }
  };

  const handleDeleteItem = () => {
    if (isEditingItem) {
      setCategories(
        categories.map((category) => {
          if (category.id === isEditingItem.categoryId) {
            return {
              ...category,
              items: category.items.filter(
                (_, index) => index !== isEditingItem.itemIndex
              ),
            };
          }
          return category;
        })
      );
      setIsEditingItem(null);
    }
  };

  return (
    <section>
      <CommonHeader title='필터 항목 관리 ********************' />
      <p className='text-black'>test</p>
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

      <div className='mt-3'>
        {categories.map((category) => (
          <div
            key={category.id}
            className='flex items-center gap-4 border-1 border-grayLightBorder border-collapse '
          >
            <div className='flex items-center gap-2'>
              <Button
                className='rounded-none px-5 text-center border-r border-grayLightBorder py-6  font-bold text-secondGray bg-bgGray'
                onClick={() => {
                  setIsEditingCategory(category.id);
                  setNewItemValue(category.name);
                }}
              >
                <p>{category.name}</p>
              </Button>
            </div>
            <div className='flex flex-wrap gap-4'>
              {category.items.map((item, index) => (
                <div key={index} className='flex items-center '>
                  <button
                    onClick={() => {
                      setIsEditingItem({
                        categoryId: category.id,
                        itemIndex: index,
                      });
                      setNewItemValue(item);
                    }}
                  >
                    <p className='text-secondGray'>{item}</p>
                  </button>
                </div>
              ))}
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
              color='primary'
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
            <button color='primary' onClick={handleEditCategory}>
              수정 ****
            </button>
            <button color='danger' onClick={handleDeleteCategory}>
              삭제
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
            <div>
              <button onClick={handleEditItem}>수정</button>
              <button color='danger' onClick={handleDeleteItem}>
                삭제 *****
              </button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default FilterManagement;
