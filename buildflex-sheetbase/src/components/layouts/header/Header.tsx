import React from 'react';
import { Avatar } from 'antd';
import { Clock, MessageQuestion, Notification, People } from 'iconsax-react';
import { UserOutlined } from '@ant-design/icons';
import Breadcrumb from './components/Breadcrumb';
import { cn } from '@utils/cn';
import Text, { TextVariant } from '@/components/typography/Text';
import { useTheme } from '@/provider/theme-provider';
import ProjectNameDropdown from './components/dropdown/ProjectNameDropdown';
import './header.css';
import Logo from './components/Logo';
import ProjectStatus from './components/ProjectStatus';
import HistoryDropdown from './components/dropdown/history/HistoryDropdown';
import HelpButton from './components/help/HelpButton';
import NotiButton from './components/notification/NotiButton';
import ShareButton from './components/share/share-button';

const Header = () => {
  const { theme } = useTheme();
  return (
    <header
      id={'header'}
      className={cn(
        `flex p-3 box-border h-[60px] bg-red-200  text-white`,
        theme.linearBackground,
      )}
    >
      {/*Base Left Nav*/}
      <div className="nav-left flex justify-center items-center gap-2">
        <Logo />
        {/*Base Breadcrumb*/}
        <div className="workspace flex flex-col justify-between h-full">
          <div className="workspace__breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          {/*Base Status*/}
          <ProjectStatus />
        </div>
      </div>
      {/*Base Right Nav*/}
      <div className="nav-right ml-auto flex items-center gap-3 ">
        <HistoryDropdown />
        <HelpButton />
        <ShareButton theme={theme} />
        <NotiButton />
        <Avatar
          size={36}
          icon={<UserOutlined />}
          style={{ border: '1px solid white' }}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;

const breadcrumbItems = [
  {
    text: 'NETKO Solution',
    variant: 'B2-Regular' as TextVariant,
    className: 'text-gray-100',
  },
  {
    text: 'Michael Nguyen',
    variant: 'B2-Regular' as TextVariant,
    className: 'text-gray-100',
  },
  {
    variant: 'B2-Bold' as TextVariant,
    isLast: true,
    className: 'text-white ',
    component: <ProjectNameDropdown name="NETKO’s Project Management 2" />,
  },
];
