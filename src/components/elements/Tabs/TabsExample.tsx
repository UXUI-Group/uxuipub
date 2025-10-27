import React, { useState } from 'react';
import { Tabs } from './tabs';
import { TabItem } from './tabs.type';

export const TabsExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // 커스텀 탭 데이터 예시
  const customTabs: TabItem[] = [
    {
      id: 'custom-tab-1',
      label: '첫 번째 탭',
      content: (
        <div style={{ padding: '20px' }}>
          <h3>첫 번째 탭 내용</h3>
          <p>이것은 커스텀 탭 데이터를 사용한 예시입니다.</p>
        </div>
      ),
    },
    {
      id: 'custom-tab-2',
      label: '두 번째 탭',
      content: (
        <div style={{ padding: '20px' }}>
          <h3>두 번째 탭 내용</h3>
          <p>map을 사용해서 동적으로 생성된 탭입니다.</p>
        </div>
      ),
    },
    {
      id: 'custom-tab-3',
      label: '비활성화된 탭',
      content: (
        <div style={{ padding: '20px' }}>
          <h3>비활성화된 탭</h3>
          <p>이 탭은 비활성화되어 있습니다.</p>
        </div>
      ),
      disabled: true,
    },
    {
      id: 'custom-tab-4',
      label: '네 번째 탭',
      content: (
        <div style={{ padding: '20px' }}>
          <h3>네 번째 탭 내용</h3>
          <p>React 컴포넌트도 content로 전달할 수 있습니다.</p>
          <button onClick={() => alert('버튼 클릭!')}>클릭해보세요</button>
        </div>
      ),
    },
  ];

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    console.log(`탭이 ${index}번째로 변경되었습니다.`);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>기본 탭 (기존 구조 유지)</h2>
      <Tabs variant="core" size="medium" />

      <h2 style={{ marginTop: '40px' }}>커스텀 탭 (map 사용)</h2>
      <Tabs variant="core" size="medium" tabs={customTabs} activeTab={activeTab} onTabChange={handleTabChange} />

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <p>현재 활성 탭: {activeTab + 1}번째</p>
      </div>
    </div>
  );
};
