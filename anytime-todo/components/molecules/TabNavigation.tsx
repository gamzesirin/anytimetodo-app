import React from 'react'

interface TabNavigationProps {
	activeTab: 'completed' | 'notCompleted'
	setActiveTab: (tab: 'completed' | 'notCompleted') => void
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
	return (
		<ul className="nav nav-tabs">
			{/*tamamlanmamış görevler*/}
			<li className="nav-item">
				<button
					className={`nav-link ${activeTab === 'notCompleted' ? 'active' : ''}`}
					onClick={() => setActiveTab('notCompleted')}
				>
					Tamamlanmadı
				</button>
			</li>
			{/*tamamlanmış görevler*/}
			<li className="nav-item">
				<button
					className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`}
					onClick={() => setActiveTab('completed')}
				>
					Tamamlandı
				</button>
			</li>
		</ul>
	)
}

export default TabNavigation
