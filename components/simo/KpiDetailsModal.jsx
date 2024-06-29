import React from 'react';
import { IoClose } from 'react-icons/io5';

const KpiDetailsModal = ({ isOpen, onClose, data }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
			<div className="bg-white rounded-xl p-6 w-[1000px] h-fit">
				<div className="flex justify-between items-center">
					{data.kpiSemester && (
						<h2 className="text-2xl font-semibold">{data.kpiSemester}</h2>
					)}
					<button onClick={onClose} className="text-gray-500 hover:text-black">
						<IoClose size={24} />
					</button>
				</div>
				<table className="mt-4 w-full border border-none border-separate border-spacing-y-5">
					<thead className="bg-lightbluebig">
						<tr className="text-left">
							<th className="py-1 px-2 rounded-l-lg">KPI</th>
							<th className="py-1 px-2">Target</th>
							<th className="py-1 px-2">Keterangan</th>
							<th className="py-1 px-2">Target</th>
							<th className="py-1 px-2">Realisasi</th>
							<th className="py-1 px-2">Pencapaian (%)</th>
							<th className="py-1 px-2">Score</th>
							<th className="py-1 px-2">Bobot</th>
							<th className="py-1 px-2 rounded-r-lg">Hasil</th>
						</tr>
					</thead>
					<tbody>
						{data.kpis.map((kpi, index) => (
							<tr
								key={index}
								className="bg-white border border-gray-300 text-sm text-left"
							>
								<td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">
									{kpi.kpi}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{kpi.target}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{kpi.keterangan}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{kpi.target}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									<span
										className={
											kpi.realisasi >= 150
												? 'bg-blue-500 rounded-md py-1 px-3 text-white'
												: kpi.realisasi >= 85
												? 'bg-yellow-200 rounded-md py-1 px-3 text-black'
												: ''
										}
									>
										{kpi.realisasi}
									</span>
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{kpi.pencapaian}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{kpi.score}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{kpi.bobot}
								</td>
								<td className="py-5 px-2 rounded-r-md border-y-2 border-r-2 border-lightbluebig">
									{kpi.hasil}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex justify-end items-center">
					Score &nbsp;
					<span className="font-semibold text-white bg-greenBig px-4 py-2 rounded-[10px]">
						{data.score}
					</span>
				</div>
			</div>
		</div>
	);
};

export default KpiDetailsModal;
