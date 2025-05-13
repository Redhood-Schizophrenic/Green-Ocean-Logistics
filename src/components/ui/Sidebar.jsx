import { useSidebar } from '@/contexts/SidebarProvider';
import { CompanyName } from '@/constants/CompanyName';
import { Bell, LogOutIcon, PanelLeft, User, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from './Button';
import { navLinks } from '@/constants/navLinks';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Sidebar({
	children,
	defaultOpen = true,
	sidebarWidth = "w-[300px]",
	sidebarColor = "bg-[var(--primary)]",
	sidebarItems = navLinks
}) {
	const [isMobile, setIsMobile] = useState(false);
	const [expandedItems, setExpandedItems] = useState({});
	const { open: isOpen, setOpen: setIsOpen, title } = useSidebar();
	const sidebarWidthPx = 300; // Numeric value for calculations
	const currentPath = usePathname();

	// Check if the screen size is mobile
	useEffect(() => {
		const checkIfMobile = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
			// If transitioning to mobile, close the sidebar by default
			if (mobile) {
				setIsOpen(false);
			} else {
				setIsOpen(defaultOpen);
			}
		};

		// Check on first render
		checkIfMobile();

		// Add event listener for window resize
		window.addEventListener('resize', checkIfMobile);

		// Clean up
		return () => window.removeEventListener('resize', checkIfMobile);
	}, [defaultOpen, setIsOpen]);

	// Toggle sidebar
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	// Determine if a navigation item is active
	const isActive = (href) => {
		return href === currentPath;
	};

	// Toggle the expanded state of a menu item
	const toggleItemExpand = (index) => {
		setExpandedItems(prev => ({
			...prev,
			[index]: !prev[index]
		}));
	};

	return (
		<div className="flex h-screen overflow-hidden">
			{/* Overlay for mobile when sidebar is open */}
			{isMobile && isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-20"
					onClick={toggleSidebar}
				/>
			)}

			{/* Sidebar */}
			<div
				className={`
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          fixed inset-y-0 left-0 z-30 ${sidebarWidth}
          ${sidebarColor} text-white transition-transform duration-300 ease-in-out h-full
        `}
			>
				{/* Sidebar Header */}
				<div className="p-6 mb-8 flex justify-between items-center">
					<h2 className="text-xl font-semibold">{CompanyName}</h2>
					{isMobile && (
						<button
							onClick={toggleSidebar}
							className="text-white p-2 rounded hover:bg-opacity-20"
							aria-label="Close sidebar"
						>
							<PanelLeft className='text-[var(--primary)]' />
						</button>
					)}
				</div>

				{/* Sidebar Content */}
				<div className="p-4 h-full">
					<nav>
						<ul>
							{sidebarItems.map((item, index) => {
								const active = isActive(item.href);
								const hasSubItems = item.subItems && item.subItems.length > 0;
								const isExpanded = expandedItems[index];

								return (
									<li key={index} className="mb-2">{
										hasSubItems ?
											(
												<div
													className={`flex items-center justify-between cursor-pointer p-2 rounded transition-colors duration-200 ${active
														? 'bg-white text-[var(--foreground)] font-medium'
														: 'hover:bg-white hover:text-[var(--foreground)] hover:bg-opacity-20'
														}`}
													onClick={() => {
														toggleItemExpand(index);
													}}
												>
													<div className="flex items-center gap-3">
														{item?.icon && (
															<item.icon className='w-5 h-5' />
														)}
														{item.label}
													</div>
													<div className="ml-2">
														{isExpanded ? (
															<ChevronDown className="w-4 h-4" />
														) : (
															<ChevronRight className="w-4 h-4" />
														)}
													</div>
												</div>

											)
											: (
												<Link
													href={item.href}
													className={`flex items-center justify-between cursor-pointer p-2 rounded transition-colors duration-200 ${active
														? 'bg-white text-[var(--foreground)] font-medium'
														: 'hover:bg-white hover:text-[var(--foreground)] hover:bg-opacity-20'
														}`}
												>
													<div className="flex items-center gap-3">
														{item?.icon && (
															<item.icon className='w-5 h-5' />
														)}
														{item.label}
													</div>
												</Link>
											)
									}

										{/* Render subItems if they exist and the item is expanded */}
										{hasSubItems && isExpanded && (
											<ul className="ml-6 mt-1 space-y-1">
												{item.subItems.map((subItem, subIndex) => {
													const subActive = isActive(subItem.href);
													return (
														<li key={`${index}-${subIndex}`}>
															<Link
																href={subItem.href}
																className={`flex items-center gap-3 p-2 rounded transition-colors duration-200 ${subActive
																	? 'bg-white text-[var(--foreground)] font-medium'
																	: 'hover:bg-white hover:text-[var(--foreground)] hover:bg-opacity-20'
																	}`}
															>
																{subItem?.icon && (
																	<subItem.icon className='w-4 h-4' />
																)}
																{subItem.label}
															</Link>
														</li>
													);
												})}
											</ul>
										)}
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
				<div className='absolute bottom-4 left-2 w-full flex items-center justify-center'>
					<Button title={'Logout'} variant={'invert'} className='w-[200px] rounded-xl' icon={<LogOutIcon className='w-4 h-4 ml-2' />} iconPosition='right' />
				</div>
			</div>

			{/* Main Content with dynamic width based on sidebar state */}
			<div
				className={`flex-1 flex flex-col overflow-hidden transition-all duration-300`}
				style={{
					marginLeft: !isMobile && isOpen ? `${sidebarWidthPx}px` : '0px',
					width: '100%'
				}}
			>
				{/* Top Bar - full width when sidebar is collapsed */}
				<header className="border-b p-4 flex items-center justify-between transition-all duration-300 w-full">
					<div className='flex items-center'>
						{/* Toggle Button */}
						<button
							onClick={toggleSidebar}
							className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
							aria-label="Toggle Sidebar"
						>
							<PanelLeft />
						</button>
						<h1 className="ml-4 text-xl font-semibold">{title}</h1>
					</div>
					<div className='flex items-center gap-3'>
						<button className='relative'>
							<Bell className='w-6 h-6 ' />
							<div className='absolute -top-1 right-0 p-[5px] bg-red-500 rounded-full'></div>
						</button>
						<User className='w-8 h-8 bg-[var(--primary)] text-[var(--background)] p-1.5 rounded-full' />
					</div>
				</header>

				{/* Page Content */}
				<main className="flex-1 overflow-y-auto p-6 transition-all duration-300">
					{children}
				</main>
			</div>
		</div>
	);
}

