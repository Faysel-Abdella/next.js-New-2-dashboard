'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  RadioGroup,
  Radio,
} from '@nextui-org/react';

import { Plus, ChevronDown, ChevronRight } from 'lucide-react';

interface Option {
  label: string;
  value: string;
}

interface SubGroup {
  id: string;
  name: string;
  groupList: string[];
}

interface Group {
  id: string;
  type: 'group';
  name: string;
  highschoolName: string;
  subgroups: SubGroup[];
  isExpanded?: boolean;
}

interface SubForum {
  id: string;
  name: string;
  forumList: string[];
}

interface Forum {
  id: string;
  type: 'forum';
  name: string;
  dataSharing: string;
  readingOption: string;
  writingOption: string;
  commentingOption: string;
  subforums: SubForum[];
  isExpanded?: boolean;
}

type Item = Group | Forum;

interface FormData {
  type: 'group' | 'forum' | 'subgroup' | 'subforum' | 'listItem';
  name: string;
  highschoolName?: string;
  dataSharing?: string;
  readingOption?: string;
  writingOption?: string;
  commentingOption?: string;
}

const OPTIONS = {
  highschools: [
    { label: '고등학교 1', value: 'hs1' },
    { label: '고등학교 2', value: 'hs2' },
  ],
  sharing: [
    { label: '전체 공개', value: 'public' },
    { label: '제한적 공개', value: 'limited' },
  ],
  permissions: [
    { label: '모두', value: 'all' },
    { label: '관리자만', value: 'admin' },
  ],
};

export default function HierarchicalListPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Item | null>(null);
  const [parentPath, setParentPath] = useState<string[]>([]);

  const handleAdd = (formData: FormData, parentId?: string) => {
    const newItem: Item | SubGroup | SubForum = {
      id: Date.now().toString(),
      ...formData,
      ...(formData.type === 'group' || formData.type === 'subgroup'
        ? { subgroups: [], groupList: [] }
        : formData.type === 'forum' || formData.type === 'subforum'
          ? { subforums: [], forumList: [] }
          : {}),
    };

    setItems((prev) => {
      const updateItems = (items: Item[]): Item[] => {
        return items.map((item) => {
          if (item.id === parentId) {
            if (item.type === 'group') {
              if (formData.type === 'subgroup') {
                return {
                  ...item,
                  subgroups: [...(item.subgroups || []), newItem as SubGroup],
                };
              } else if (formData.type === 'listItem') {
                return {
                  ...item,
                  groupList: [...(item.groupList || []), formData.name],
                };
              }
            } else if (item.type === 'forum') {
              if (formData.type === 'subforum') {
                return {
                  ...item,
                  subforums: [...(item.subforums || []), newItem as SubForum],
                };
              } else if (formData.type === 'listItem') {
                return {
                  ...item,
                  forumList: [...(item.forumList || []), formData.name],
                };
              }
            }
          }
          if (item.type === 'group' && item.subgroups) {
            return {
              ...item,
              subgroups: updateItems(
                item.subgroups as unknown as Item[]
              ) as SubGroup[],
            };
          }
          if (item.type === 'forum' && item.subforums) {
            return {
              ...item,
              subforums: updateItems(
                item.subforums as unknown as Item[]
              ) as SubForum[],
            };
          }
          return item;
        });
      };

      if (!parentId) {
        return [...prev, newItem as Item];
      }
      return updateItems(prev);
    });

    setShowAddForm(false);
  };

  const handleEdit = (formData: FormData) => {
    setItems((prev) => {
      const updateItems = (items: Item[]): Item[] => {
        return items.map((item) => {
          if (item.id === selectedItem?.id) {
            return { ...item, ...formData };
          }
          if (item.type === 'group' && item.subgroups) {
            return {
              ...item,
              subgroups: item.subgroups.map((subgroup) => {
                if (subgroup.id === selectedItem?.id) {
                  return { ...subgroup, ...formData };
                }
                return subgroup;
              }),
            };
          }
          if (item.type === 'forum' && item.subforums) {
            return {
              ...item,
              subforums: item.subforums.map((subforum) => {
                if (subforum.id === selectedItem?.id) {
                  return { ...subforum, ...formData };
                }
                return subforum;
              }),
            };
          }
          return item;
        });
      };
      return updateItems(prev);
    });
    setSelectedItem(null);
  };

  const handleDelete = (item: Item | SubGroup | SubForum) => {
    setItemToDelete(item as Item);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setItems((prev) => {
      const deleteItem = (items: Item[]): Item[] => {
        return items.filter((item) => {
          if (item.id === itemToDelete?.id) return false;
          if (item.type === 'group' && item.subgroups) {
            return {
              ...item,
              subgroups: item.subgroups.filter(
                (subgroup) => subgroup.id !== itemToDelete?.id
              ),
            };
          }
          if (item.type === 'forum' && item.subforums) {
            return {
              ...item,
              subforums: item.subforums.filter(
                (subforum) => subforum.id !== itemToDelete?.id
              ),
            };
          }
          return true;
        });
      };
      return deleteItem(prev);
    });
    setShowDeleteModal(false);
    setItemToDelete(null);
    setSelectedItem(null);
  };

  const toggleExpand = (id: string) => {
    setItems((prevItems) => {
      const updateItem = (items: Item[]): Item[] => {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, isExpanded: !item.isExpanded };
          }
          return item;
        });
      };
      return updateItem(prevItems);
    });
  };

  const renderItem = (item: Item | SubGroup | SubForum, level = 0) => {
    const isMainItem = 'type' in item;
    const hasChildren = isMainItem
      ? item.type === 'group'
        ? item.subgroups && item.subgroups.length > 0
        : item.subforums && item.subforums.length > 0
      : 'groupList' in item
        ? item.groupList && item.groupList.length > 0
        : item.forumList && item.forumList.length > 0;

    return (
      <div key={item.id} className='space-y-1'>
        <div className='flex items-center gap-2'>
          <Button
            onPress={() => {
              if (isMainItem) {
                toggleExpand(item.id);
              }
              setSelectedItem(item as Item);
            }}
            className={`w-full justify-start pl-${level * 4}`}
            variant='light'
          >
            {hasChildren ? (
              isMainItem && item.isExpanded ? (
                <ChevronDown className='h-4 w-4 mr-1' />
              ) : (
                <ChevronRight className='h-4 w-4 mr-1' />
              )
            ) : null}
            {item.name}
          </Button>
          {isMainItem && (
            <Button
              isIconOnly
              size='sm'
              variant='light'
              onPress={() => {
                setShowAddForm(true);
                setParentPath([...parentPath, item.id]);
              }}
            >
              <Plus size={16} />
            </Button>
          )}
        </div>
        {isMainItem && item.isExpanded && (
          <>
            {item.type === 'group' &&
              item.subgroups &&
              item.subgroups.map((subgroup) => renderItem(subgroup, level + 1))}
            {item.type === 'forum' &&
              item.subforums &&
              item.subforums.map((subforum) => renderItem(subforum, level + 1))}
          </>
        )}
        {!isMainItem && (
          <ul className={`list-disc pl-${(level + 2) * 4} space-y-1`}>
            {'groupList' in item && item.groupList
              ? item.groupList.map((listItem, index) => (
                  <li key={index} className='text-sm text-gray-600'>
                    {listItem}
                  </li>
                ))
              : item.forumList &&
                item.forumList.map((listItem, index) => (
                  <li key={index} className='text-sm text-gray-600'>
                    {listItem}
                  </li>
                ))}
          </ul>
        )}
      </div>
    );
  };

  const ItemForm = ({
    initialData,
    parentPath = [],
    onSubmit,
    onDelete,
    onCancel,
  }: {
    initialData?: Item | SubGroup | SubForum;
    parentPath?: string[];
    onSubmit: (data: FormData, parentId?: string) => void;
    onDelete?: () => void;
    onCancel: () => void;
  }) => {
    const [formType, setFormType] = useState<FormData['type']>(
      initialData && 'type' in initialData ? initialData.type : 'group'
    );
    const [formData, setFormData] = useState<FormData>({
      type: formType,
      name: initialData?.name || '',
      highschoolName:
        initialData && 'type' in initialData && initialData.type === 'group'
          ? initialData.highschoolName
          : '',
      dataSharing:
        initialData && 'type' in initialData && initialData.type === 'forum'
          ? initialData.dataSharing
          : '',
      readingOption:
        initialData && 'type' in initialData && initialData.type === 'forum'
          ? initialData.readingOption
          : '',
      writingOption:
        initialData && 'type' in initialData && initialData.type === 'forum'
          ? initialData.writingOption
          : '',
      commentingOption:
        initialData && 'type' in initialData && initialData.type === 'forum'
          ? initialData.commentingOption
          : '',
    });

    const parentItem =
      parentPath.length > 0
        ? items.find((item) => item.id === parentPath[parentPath.length - 1])
        : null;

    const handleSubmit = () => {
      onSubmit(formData, parentPath[parentPath.length - 1]);
    };

    return (
      <Card>
        <CardBody className='space-y-4'>
          {!initialData && (
            <RadioGroup
              value={formType}
              onValueChange={(value) => {
                setFormType(value as FormData['type']);
                setFormData({ ...formData, type: value as FormData['type'] });
              }}
              orientation='horizontal'
            >
              {!parentItem && (
                <>
                  <Radio value='group'>그룹</Radio>
                  <Radio value='forum'>게시판</Radio>
                </>
              )}
              {parentItem && parentItem.type === 'group' && (
                <>
                  <Radio value='subgroup'>하위 그룹</Radio>
                  <Radio value='listItem'>목록 항목</Radio>
                </>
              )}
              {parentItem && parentItem.type === 'forum' && (
                <>
                  <Radio value='subforum'>하위 게시판</Radio>
                  <Radio value='listItem'>목록 항목</Radio>
                </>
              )}
            </RadioGroup>
          )}

          <Input
            label='이름'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          {formType === 'group' && (
            <Select
              label='고등학교'
              value={formData.highschoolName}
              onChange={(e) =>
                setFormData({ ...formData, highschoolName: e.target.value })
              }
            >
              {OPTIONS.highschools.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>
          )}

          {(formType === 'forum' || formType === 'subforum') && (
            <>
              <Select
                label='데이터 공유'
                value={formData.dataSharing}
                onChange={(e) =>
                  setFormData({ ...formData, dataSharing: e.target.value })
                }
              >
                {OPTIONS.sharing.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label='읽기 권한'
                value={formData.readingOption}
                onChange={(e) =>
                  setFormData({ ...formData, readingOption: e.target.value })
                }
              >
                {OPTIONS.permissions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label='쓰기 권한'
                value={formData.writingOption}
                onChange={(e) =>
                  setFormData({ ...formData, writingOption: e.target.value })
                }
              >
                {OPTIONS.permissions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label='댓글 권한'
                value={formData.commentingOption}
                onChange={(e) =>
                  setFormData({ ...formData, commentingOption: e.target.value })
                }
              >
                {OPTIONS.permissions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </>
          )}

          <div className='flex justify-end gap-2'>
            {onDelete && (
              <Button color='danger' variant='light' onPress={onDelete}>
                삭제
              </Button>
            )}
            <Button variant='bordered' onPress={onCancel}>
              취소
            </Button>
            <Button color='primary' onPress={handleSubmit}>
              {initialData ? '저장' : '등록'}
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <main className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Hierarchical List</h1>
      <div className='flex h-screen'>
        <Card className='w-64 h-full'>
          <CardBody>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='font-semibold'>Lists</h2>
              <Button
                isIconOnly
                variant='light'
                onPress={() => {
                  setShowAddForm(true);
                  setParentPath([]);
                }}
              >
                <Plus size={20} />
              </Button>
            </div>
            <div className='space-y-2'>
              {items.map((item) => renderItem(item))}
            </div>
          </CardBody>
        </Card>

        <div className='flex-1 p-4'>
          {(showAddForm || selectedItem) && (
            <ItemForm
              initialData={selectedItem || undefined}
              parentPath={parentPath}
              onSubmit={selectedItem ? handleEdit : handleAdd}
              onDelete={
                selectedItem ? () => handleDelete(selectedItem) : undefined
              }
              onCancel={() => {
                setShowAddForm(false);
                setSelectedItem(null);
                setParentPath([]);
              }}
            />
          )}
        </div>

        <Modal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  삭제 확인
                </ModalHeader>
                <ModalBody>
                  <p>
                    이 항목을 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button variant='light' onPress={onClose}>
                    취소
                  </Button>
                  <Button color='danger' onPress={confirmDelete}>
                    삭제
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </main>
  );
}
