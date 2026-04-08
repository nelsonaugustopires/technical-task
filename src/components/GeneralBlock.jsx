import { storyblokEditable } from '@storyblok/react/rsc';

const GeneralBlock = ({ blok }) => {
	return (
		<div className="GeneralBlock grid-cols-3 gap-3 max-w-1/3 flex-auto" {...storyblokEditable(blok)}>
			<div className="flex flex-col items-center justify-center bg-stone-800/50 p-2 rounded border border-stone-700">
				<label className="text-[10px] font-bold text-stone-500 uppercase">{blok.label}</label>
				<span className="text-xl font-bold text-amber-500">{blok.value}</span>
			</div>
		</div>
	);
};

export default GeneralBlock;
