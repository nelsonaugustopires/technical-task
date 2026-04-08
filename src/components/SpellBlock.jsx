import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const SpellBlock = ({ blok }) => (
	<div className="AttrBlock" {...storyblokEditable(blok)}>
		<div className="flex flex-col gap-3 bg-indigo-950/10 p-3 rounded-lg border border-indigo-900/20">
			<h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400">{blok.Header}</h3>
			<div className="grid grid-cols-3 gap-4">
				<div>
					<label className="text-[10px] text-stone-500 block uppercase">{blok.AbilityLabel}</label>
					<span className="text-sm font-semibold">{blok.AbilityName}</span>
				</div>
				<div>
					<label className="text-[10px] text-stone-500 block uppercase">{blok.DCLabel}</label>
					<span className="text-lg font-bold text-indigo-300">{blok.DCValue}</span>
				</div>
				<div>
					<label className="text-[10px] text-stone-500 block uppercase">{blok.AttackLabel}</label>
					<span className="text-lg font-bold text-indigo-300">+{blok.AttackValue}</span>
				</div>
			</div>
  	</div>
		
	</div>
);

export default SpellBlock;
