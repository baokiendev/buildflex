import React, { useState } from 'react';
import { Add, Grid1, DocumentText, Clock, Document, More } from 'iconsax-react';
import {
  CaretDownFilled,
  CaretRightFilled,
  MoreOutlined,
} from '@ant-design/icons';
import { MoreVert } from '../../icons';
import { cn } from '@utils/cn';

type ContentType = 'table' | 'dashboard' | 'form' | 'document';

interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  isActive?: boolean;
}

interface Section {
  id: string;
  title: string;
  items: ContentItem[];
  isOpen: boolean;
}

const iconMap: Record<ContentType, React.ElementType> = {
  table: Grid1,
  dashboard: Clock,
  form: DocumentText,
  document: Document,
};

const ContentItemComponent: React.FC<{ item: ContentItem }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[item.type];

  return (
    <div
      className={cn(
        'flex items-center justify-between pl-6 pr-2 py-2 cursor-pointer relative rounded-sm my-1 ',
        item.isActive
          ? 'bg-primary-100 text-primary-600'
          : 'hover:bg-gray-100 hover:text-black text-neutral-dark-300',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <Icon size={16} className="mr-2 " />
        <span className="text-sm font-normal font-lato">{item.title}</span>
      </div>
      {isHovered && (
        <MoreVert
          className={cn(
            !item.isActive &&
              'text-neutral-dark-300 hover:text-black cursor-pointer',
          )}
        />
      )}
    </div>
  );
};

const SectionComponent: React.FC<{
  section: Section;
  onToggle: () => void;
}> = ({ section, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-2">
      <div
        className="flex items-center justify-between p-2 rounded-sm hover:bg-gray-100 cursor-pointer"
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center">
          {section.isOpen ? (
            <CaretDownFilled size={16} className="mr-2" />
          ) : (
            <CaretRightFilled size={16} className="mr-2" />
          )}
          <span className="font-medium text-gray-500">{section.title}</span>
        </div>
        {isHovered && (
          <div className="flex items-center gap-2">
            <Add
              size={16}
              onClick={(e) => {
                e.stopPropagation();
                console.log('Add new item');
              }}
              className=" text-neutral-dark-300 hover:text-gray-500 cursor-pointer"
            />
            <MoreVert className="text-neutral-dark-300 hover:text-gray-500 cursor-pointer" />
          </div>
        )}
      </div>
      {section.isOpen && (
        <div>
          {section.items.map((item) => (
            <ContentItemComponent key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const ListContentItemsPanel: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([
    {
      id: '1',
      title: 'Project management',
      isOpen: true,
      items: [
        { id: '1-1', type: 'table', title: 'Admin management', isActive: true },
        { id: '1-2', type: 'table', title: 'Client management' },
        { id: '1-3', type: 'table', title: 'Product tracking' },
      ],
    },
    {
      id: '2',
      title: 'Sale management',
      isOpen: true,
      items: [
        { id: '2-1', type: 'table', title: 'Quotations' },
        { id: '2-2', type: 'document', title: 'Sale process v.1' },
        { id: '2-3', type: 'document', title: 'Sale process v.2' },
      ],
    },
    {
      id: '3',
      title: 'Section 1',
      isOpen: false,
      items: [],
    },
  ]);

  const toggleSection = (id: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, isOpen: !section.isOpen } : section,
      ),
    );
  };

  return (
    <div className="bg-white">
      {sections.map((section) => (
        <SectionComponent
          key={section.id}
          section={section}
          onToggle={() => toggleSection(section.id)}
        />
      ))}
    </div>
  );
};

export default ListContentItemsPanel;
