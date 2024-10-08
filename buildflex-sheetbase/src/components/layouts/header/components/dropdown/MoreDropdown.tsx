import { MoreVert } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Dropdown, MenuProps } from 'antd';
import { Copy, Slack, Trash } from 'iconsax-react';

const MoreDropdown = () => {
  return (
    <Dropdown
      menu={{ items: moreItems }}
      trigger={['click']}
      placement="bottomRight"
      className="flex items-center relative justify-center"
      overlayClassName=" boxShadowSecondary project-more-dropdown "
      // align={{ offset: [50, -20] }}
    >
      <div>
        <MoreVert className="size-4 px-2 cursor-pointer text-neutral-dark-500" />
      </div>
    </Dropdown>
  );
};

export default MoreDropdown;

const moreItems: MenuProps['items'] = [
  {
    key: 'duplicate-base',
    label: (
      <div className="flex gap-2 items-center  text-neutral-dark-500">
        <Copy size={16} />
        <Text as="span" variant="B2-Regular">
          Duplicate base
        </Text>
      </div>
    ),
  },
  {
    key: 'slack-notifications',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <Slack size={16} />
        <Text as="span" variant="B2-Regular">
          Slack notifications
        </Text>
      </div>
    ),
  },
  {
    key: 'delete-base',
    label: (
      <div className="flex gap-2 items-center text-danger">
        <Trash size={16} />
        <Text as="span" variant="B2-Regular">
          Delete base
        </Text>
      </div>
    ),
  },
];
