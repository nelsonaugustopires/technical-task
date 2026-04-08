import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';

const TalentOrigin = ({ blok }) => {
	return (
		
		<div className="TalentOrigin w-full flex flex-col gap-10 bg-stone-950 p-4 md:p-8" {...storyblokEditable(blok)}>
			<section className="flex flex-col gap-4">
				{/* Section Header */}
				<div className="flex items-center gap-4">
					<h2 className="text-2xl font-serif font-bold text-amber-500 uppercase tracking-widest whitespace-nowrap">
						{blok.sectionHead}
					</h2>
					<div className="h-[1px] w-full bg-gradient-to-r from-amber-900/50 to-transparent"></div>
				</div>

				{/* Feature Table */}
				<div className="overflow-hidden rounded-lg border border-stone-800 bg-stone-900/20 shadow-lg">
					<div className="overflow-x-auto">
						<table className="w-full border-collapse text-left">
							<thead>
								<tr className="bg-stone-900/80 border-b border-stone-800">
									{blok.table.thead.map((header, i) => (
										<th 
											key={`header${i}`} 
											className="p-4 text-xs font-bold uppercase tracking-widest text-stone-500"
										>
											{header.value}
										</th>
									))}
								</tr>
							</thead>
							<tbody className="divide-y divide-stone-800/50">
								{blok.table.tbody.map((row, i) => (
									<tr key={`row${i}`} className="group hover:bg-stone-800/10 transition-colors">
										{row.body.map((cell, cellIdx) => (
											<td 
												key={`header${cellIdx}`} 
												className="p-0 align-top text-sm text-stone-300 border-x border-stone-800/30"
											>
												{/* Handling the JSON line breaks and Storyblok _editable tags if needed */}
												<div className={`${cellIdx === 1 ? 'max-h-48 overflow-y-auto' : ''} p-5 whitespace-pre-wrap scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-transparent`}>
													{cell.value}
												</div>
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TalentOrigin;
