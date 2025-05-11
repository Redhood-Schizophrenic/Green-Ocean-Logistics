'use client';

import { useEffect, useState } from "react";
import HeaderLayout from "./components/HeaderLayout";
import MobileHeaderLayout from "./components/MobileHeaderLayout";
import { ServiceProviders, servicesList } from "@/constants/services";
import Button from "@/components/ui/Button";
import { SlidersHorizontalIcon, Star, MapPin, ChevronLeft, ChevronRight, } from 'lucide-react';
import Image from "next/image";
import { Dialog } from "@/components/ui/Dialog";
import { FilterCFS } from "./components/Filter";

export default function ClientHomePage() {
	const [isMobile, setIsMobile] = useState(false);
	const [currentService, setCurrentService] = useState('cfs');
	const [serviceTitle, setServiceTitle] = useState('CFS')
	const [filteredServices, setFilteredServices] = useState(ServiceProviders.filter((provider) => provider.serviceId === currentService));
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const checkIfMobile = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
		};

		// Check on first render
		checkIfMobile();
	}, []);

	useEffect(() => {
		setServiceTitle(servicesList.find((service) => service.id === currentService).label);
		setFilteredServices(ServiceProviders.filter((provider) => provider.serviceId === currentService));
	}, [currentService])


	return (
		<main className={`w-full h-[200dvh] items-center justify-center`}>
			{
				isMobile ?
					<MobileHeaderLayout currentService={currentService} setCurrentService={setCurrentService} />
					:
					<HeaderLayout currentService={currentService} setCurrentService={setCurrentService} />
			}
			<section className="p-4">
				<div className="flex items-center justify-between">
					<h1 className="font-bold text-2xl">{serviceTitle} Service Providers</h1>
					<Dialog
						trigger={<Button title={'Filters'} icon={<SlidersHorizontalIcon />} variant={'outline'} iconPosition="right" className="rounded-xl" />}
						title="Filters"
						open={isOpen}
						onOpenChange={setIsOpen}
					>
						<FilterCFS openDialog={setIsOpen} />
					</Dialog>


				</div>

				<div className="flex flex-col md:gap-10 gap-4 pt-20">
					{filteredServices.map((provider) => (
						<ServiceCard
							key={provider.id}
							title={provider.title}
							location={provider.location}
							rating={provider.rating}
							tags={provider.tags}
							description={provider.description}
							images={provider.images}
							id={provider.id}
						/>
					))}
				</div>
			</section>
		</main >
	)
}

const ServiceCard = ({ title, location, rating, tags, description, images, id }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % images.length);
	};
	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
	};
	return (
		<div className="flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden border min-h-96 p-4 md:p-8 gap-10">
			{/* Left side - Image slider */}
			<div className="relative w-full md:w-2/5 md:h-96 h-64 rounded-xl overflow-hidden">
				<Image
					src={images[currentImageIndex].src}
					alt={`${title} - Image ${currentImageIndex + 1}`}
					width={5000}
					height={5000}
					className="w-full h-full object-cover"
				/>

				{/* Image navigation buttons */}

				<div className="absolute inset-y-0 left-0 w-full h-full bg-black/30" />
				<div className="absolute inset-y-0 left-1 flex items-center">
					<button
						onClick={prevImage}
						className="bg-[var(--background)] p-2 rounded-full"
						aria-label="Previous image"
					>
						<ChevronLeft className="h-5 w-5" />
					</button>
				</div>
				<div className="absolute inset-y-0 right-0 flex items-center">
					<button
						onClick={nextImage}
						className="bg-[var(--background)] p-2 rounded-full"
						aria-label="Next image"
					>
						<ChevronRight className="h-5 w-5" />
					</button>
				</div>

				{/* Image counter */}
				<div className="absolute bottom-2 right-2 bg-[var(--background)] bg-opacity-50 text-xs font-bold px-2 py-1 rounded-full">
					{currentImageIndex + 1}/{images.length}
				</div>
			</div>

			{/* Right side - Information */}
			<div className="p-4 flex flex-col justify-between w-full md:w-3/5">
				<div>
					<h3 className="text-2xl font-semibold">{title}</h3>
					<div className="flex items-center mt-2 text-gray-600">
						<MapPin className="mr-1" />
						<span className="">{location}</span>
					</div>
					<div className="flex flex-wrap items-center gap-4 mt-4 text-gray-600">
						{
							tags.map((tag) => (
								<Button key={tag} title={tag} variant={'secondary'} className="rounded-full text-xs" />
							))
						}
					</div>
					<div className="flex items-center mt-6">
						{Array(5).fill(0).map((_, i) => (
							<Star
								key={i}
								className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
									}`}
							/>
						))}
						<span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
					</div>
					<p className="mt-6">{description}</p>
				</div>
				<div className="flex flex-wrap gap-4 mt-4">
					<Button title={'Request Price'} className="rounded-xl" />
					<Button title={'Emergency Request'} className="rounded-xl md:block hidden md:text-base text-xs" variant={'secondary'} />
					<Button title={'View Details'} className="rounded-xl" />
				</div>
			</div>
		</div>
	);

}
