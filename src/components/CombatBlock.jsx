import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const CombatBlock = ({ blok }) => (
	<div className="AttrBlock" {...storyblokEditable(blok)}>
		<div className="flex flex-col gap-3 bg-stone-800/30 p-3 rounded-lg border border-stone-700">
      <div className="flex justify-between items-center border-b border-stone-700 pb-1">
        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400">{blok.combatLabel}</h3>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-stone-500 uppercase">{blok.BABLabel}</span>
          <span className="text-sm font-bold text-stone-200">+{blok.BABValue}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <label className="text-[10px] text-stone-500 uppercase font-semibold">{blok.AttackLabel}</label>
          <span className="text-xl font-bold text-amber-500">+{blok.AttackValue}</span>
        </div>
        <div className="flex flex-col text-right">
          <label className="text-[10px] text-stone-500 uppercase font-semibold">{blok.DamageLabel}</label>
          <span className="text-xl font-mono font-bold text-stone-200 text-amber-500">{blok.DamageValue}</span>
        </div>
      </div>
    </div>
		
	</div>
);

export default CombatBlock;
