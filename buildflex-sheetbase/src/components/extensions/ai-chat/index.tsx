import React, { useState, useRef, useEffect } from 'react';
import {
  Add,
  Magicpen,
  Sort,
  Chart,
  PresentionChart,
  Book,
  Microphone2,
  Send,
  Copy,
  ArrowDown2,
} from 'iconsax-react';
import { CloseOutlined } from '@ant-design/icons';
import { cn } from '@/utils/cn';
import { useTheme } from '@/provider/theme-provider';
import Text from '@/components/typography/Text';
import { CloseIcon, SparklesIcon } from '@/components/icons';
import './chat.css';
import TextArea from 'antd/es/input/TextArea';
import Message from './Message';
interface ChatMessage {
  type: 'user' | 'ai';
  content: string;
}

const AIChatDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { type: 'user', content: inputMessage }]);
      setInputMessage('');
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: 'ai', content: `Echo: ${inputMessage}` },
        ]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 box-border top-[60px] bottom-0 w-[280px] bg-gray-50 shadow-lg flex flex-col z-[11]">
      {/* Header */}
      <div
        className={cn(
          ' text-white px-2 py-[7px] flex h-8  gap-2 items-center',
          theme.linearBackground,
        )}
      >
        <SparklesIcon />
        <Text as="span" variant="B2-Regular" className="h-[18px]">
          AI chat tool
        </Text>
        <button
          onClick={onClose}
          className="text-white cursor-pointer ml-auto bg-transparent border-none"
        >
          <CloseIcon className="size-4" color="currentColor" />
        </button>
      </div>

      {/* Chat content */}
      <div className="flex-grow overflow-y-auto flex flex-col gap-2 bg-[#FAFAFA] p-3 pb-0 customScrollBar-dark">
        {/* Options */}
        <div className="p-3 flex flex-col gap-3 boxShadowSecondary bg-white !rounded-lg ">
          <Text
            as="p"
            variant="sub-title"
            className="text-gray-300 m-0 inline-block px-2 h-8"
          >
            {' '}
            Select an option to learn how I can work with your data in table:
          </Text>

          <div className="flex flex-col gap-2">
            {[
              { icon: Add, text: 'Add formula columns' },
              { icon: Magicpen, text: 'Highlight' },
              { icon: Sort, text: 'Sort and filter' },
              { icon: PresentionChart, text: 'Analyze' },
            ].map((option, index) => (
              <button
                key={index}
                className="w-full text-left px-2 text-neutral-dark-500 py-[7px] h-8 rounded bg-white  hover:bg-gray-50 flex items-center cursor-pointer border border-solid  border-borderColor"
              >
                <option.icon size={20} className="mr-2 text-gray-500" />
                <Text as="span" variant="B2-Regular">
                  {option.text}
                </Text>
              </button>
            ))}
          </div>
        </div>
        <Message type="user">
          <Text as="span" variant="sub-title" className="text-neutral-dark-500">
            Add a columns showing the length in minutes
          </Text>
        </Message>
        <Message type="ai">
          <Text as="span" variant="sub-title" className="text-neutral-dark-300">
            Here’s a suggestion for you:
          </Text>
          <Text
            as="span"
            variant="sub-title"
            className="text-neutral-dark-500"
          >{`Calculates the length of each video in minutes by dividing the length in seconds by 60 (seconds per minute). This provides a more early understandable measure of the video’s duration.`}</Text>
          <div className="rounded-t bg-primary-100 border-[1px] border-solid border-borderColor ">
            <div
              className="px-2 py-[7px] flex items-center gap-2  justify-between"
              style={{ borderBottom: '1px solid #EDEDED' }}
            >
              <Text
                as="span"
                variant="B2-Regular"
                className="text-neutral-dark-500"
              >
                Length (minutes)
              </Text>
              <Copy size={16} className="cursor-pointer ml-auto" />
            </div>
            <div className="bg-white px-2 py-[7px]">
              <Text
                as="span"
                variant="B2-Regular"
                className="text-success font-sourceCodePro"
              >
                =[@[Length (Senconds)]] / 60
              </Text>
            </div>
          </div>
          <div className="flex gap-2 items-center text-neutral-dark-500">
            <Text as="span" variant="sub-title">
              Explain formula
            </Text>
            <ArrowDown2 size={16} />
          </div>
          <div className="flex gap-2 box-border w-fit text-theme-ocean-blue items-center bg-[#E0F2FE] rounded-lg h-9 px-4 py-[6px]">
            <Add size={16} />
            <Text as="span" variant="B2-Regular">
              Insert column
            </Text>
          </div>
        </Message>
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className={cn('p-3 h-[148px]', theme.linearBackground)}>
        <div className="flex relative h-[124px] border border-solid border-[#EDEDED]/20 items-center p-3 bg-white/10 rounded-lg flex-col">
          <TextArea
            className=" p-0 !bg-transparent customScrollBar w-full !pb-6 rounded text-sm !text-wrap !border-none !text-white  !focus:outline-none"
            rows={4}
            style={{
              resize: 'none',
              boxShadow: 'none',
              padding: '0',
              outline: 'none',
            }}
            placeholder="Ask a question or make a request about data in a table"
          />

          <div className="flex items-center w-full justify-between">
            <div className=" text-white">
              <Text as="span" variant="B2-Regular" className="h-[18px]">
                0/2000
              </Text>
            </div>
            <div className="h-6 flex gap-3 items-center text-white">
              <Book size={16} className="cursor-pointer" />
              <div className="w-[1px] h-full bg-white" />
              <Microphone2 size={16} className="cursor-pointer" />
              <Send variant="Bold" className="cursor-pointer" size={16} />
            </div>
          </div>
          {/* <button onClick={handleSendMessage} className="p-2 border-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AIChatDrawer;
