'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import KpiDetailsModal from '@/components/simo/KpiDetailsModal'; // Import the modal component
import dataPrefManagement from '@/constants/dataPrefManagement';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';

const PrefManagement = () => {
	// State to handle modal open and close
	const [isModalOpen, setIsModalOpen] = useState(false);
	// State to store the selected data
	const [selectedData, setSelectedData] = useState(null);

	// Function to open the modal and pass the selected data
	const openModal = (data: any) => {
		setSelectedData(data);
		setIsModalOpen(true);
	};

	// Function to close the modal and reset the selected data
	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedData(null);
	};

	return (
		<>
			{/* // Render the breadcrumbs */}
			<Breadcrumbs />

			{/* // Render the main content */}
			<div className="mx-auto mt-5 p-5 bg-white rounded-xl border-2 border-gray-200 text-black">
				{/* // Render the title and add button */}
				<div className="flex justify-between">
					<h1 className="text-2xl font-semibold">SIMO</h1>
					<Link
						href="/simo/prefManagement/addKpi"
						className="py-2 px-4 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600"
					>
						Add Form KPI
					</Link>
				</div>
				<hr className="w-full border-gray-300 mt-5 mb-4" />
				{/* // Render the search and records per page filter */}
				<div className="flex justify-between">
					<div className="flex items-center">
						<select className="form-select w-13 p-2 border border-gray-300 rounded-md">
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="50">50</option>
						</select>
						<p className="text-xs text-gray-400 ml-2">records per page</p>
					</div>
					{/* // Render the search input */}
					<input
						type="text"
						placeholder="Search"
						className="form-input p-2 border border-gray-300 rounded-md"
					/>
				</div>

				{/* // Render the table with the data from the constant file and add the action button to view the details of the selected data in the modal component when clicked on the eye icon button */}
				<table className="border border-none border-separate border-spacing-y-7 w-full">
					<thead className="bg-lightbluebig">
						<tr className="text-sm text-left">
							<th className="py-4 px-2 rounded-l-md">
								KPI Semester <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Bulan <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Tahun <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2 rounded-r-md">
								Action <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
						</tr>
					</thead>
					{/* // Render the data from the constant file and add the eye icon button to view the details of the selected data in the modal component when clicked on the button */}
					<tbody>
						{/* // Loop through the data and render each row with the data and the eye icon button */}
						{dataPrefManagement.map((pref, index) => (
							<tr
								key={index}
								className="bg-white border border-gray-300 text-sm text-left"
							>
								<td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">
									{pref.kpiSemester}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{pref.bulan}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{pref.tahun}
								</td>
								<td className="py-5 px-2 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">
									<IoEye
										className="bg-lightyellowbig rounded-xl text-white py-2 px-2 w-9 h-9"
										onClick={() => openModal(pref)}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Render the modal and pass the selected data */}
			<KpiDetailsModal
				isOpen={isModalOpen}
				onClose={closeModal}
				data={selectedData}
			/>
		</>
	);
};

export default PrefManagement;
