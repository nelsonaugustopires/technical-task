import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const SavThrAttr = ({ blok, isSkill }) => (
	<div className="SavThrAttr" {...storyblokEditable(blok)}>
		<div className={`${isSkill ? "group flex justify-between items-center border-b border-stone-900 py-1 hover:bg-stone-900/30 px-2 transition-all" : "flex justify-between items-center bg-stone-900/50 p-2 rounded border border-stone-800 hover:border-stone-600 transition-colors"}`}>
			<span className="text-sm">
				<span className={`${isSkill ? "text-stone-300 group-hover:text-white" : "font-bold"}`}>{blok.STName}</span>
				<span className={`${isSkill ? "text-stone-600 ml-1 text-[10px]" : "text-stone-500 ml-1 text-xs"}`}>{blok.STAttr}</span>
			</span>
			<div className={`flex gap-4 items-center ${isSkill ? "tabular-nums" : ""}`}>
				<span className={`${isSkill ? "text-[10px] text-stone-500" : "text-xs text-stone-500 italic"}`}>{blok.STBase} {blok.STBaseVal}</span>
				<span className={`${isSkill ? "text-sm font-semibold text-stone-100 min-w-[24px] text-right" : "text-lg font-bold text-amber-500 w-8 text-center bg-stone-800 rounded"}`}>+{blok.STValue}</span>
			</div>
		</div>
		
	</div>
);

export default SavThrAttr;
