import React, { useState } from "react";

// Utility function to merge classNames (simplified version of cn)
const cn = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

const Tabs = ({ defaultValue, value, onValueChange, children, ...props }) => {
	const [activeTab, setActiveTab] = useState(value || defaultValue || "");

	const handleValueChange = (newValue) => {
		setActiveTab(newValue);
		if (onValueChange) {
			onValueChange(newValue);
		}
	};

	// Clone children and pass necessary props
	const enhancedChildren = React.Children.map(children, child => {
		if (!child) return null;

		// Pass activeTab state and handler to child components
		if (child.type === TabsList || child.type === TabsContent) {
			return React.cloneElement(child, {
				activeTab,
				onValueChange: handleValueChange,
				...child.props
			});
		}
		return child;
	});

	return (
		<div {...props}>
			{enhancedChildren}
		</div>
	);
};

const TabsList = ({ className, activeTab, onValueChange, children, ...props }) => {
	// Clone trigger children to pass activeTab and handler
	const enhancedChildren = React.Children.map(children, child => {
		if (!child || child.type !== TabsTrigger) return child;

		return React.cloneElement(child, {
			activeTab,
			onValueChange,
			...child.props
		});
	});

	// Remove these props from being spread to the DOM element
	const { activeTab: _, onValueChange: __, ...domProps } = props;

	return (
		<div
			className={cn(
				"inline-flex h-9 items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-500",
				className
			)}
			{...domProps}
		>
			{enhancedChildren}
		</div>
	);
};

const TabsTrigger = ({ value, activeTab, onValueChange, className, children, ...props }) => {
	const isActive = activeTab === value;

	// Remove these props from being spread to the DOM element
	const { activeTab: _, ...domProps } = props;

	return (
		<button
			type="button"
			role="tab"
			data-state={isActive ? "active" : "inactive"}
			aria-selected={isActive}
			onClick={() => onValueChange && onValueChange(value)}
			className={cn(
				"inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
				isActive ? "bg-white text-gray-900 shadow" : "",
				className
			)}
			{...domProps}
		>
			{children}
		</button>
	);
};

const TabsContent = ({ value, activeTab, onValueChange, className, children, ...props }) => {
	const isActive = activeTab === value;

	if (!isActive) return null;

	// Remove onValueChange from props to avoid DOM warnings
	const { onValueChange: _, activeTab: __, ...domProps } = props;

	return (
		<div
			role="tabpanel"
			data-state={isActive ? "active" : "inactive"}
			className={cn(
				"mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
				className
			)}
			{...domProps}
		>
			{children}
		</div>
	);
};

export {
	Tabs,
	TabsList,
	TabsContent,
	TabsTrigger
}
