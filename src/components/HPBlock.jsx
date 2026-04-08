import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const HPBlock = ({ blok }) => (
	<div className="HPBlock flex flex-col gap-2 bg-red-950/20 p-3 rounded-lg border border-red-900/30" {...storyblokEditable(blok)}>
		<h3 className="text-xs font-bold uppercase tracking-widest text-red-500 italic">{blok.header}</h3>
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <label className="text-[10px] text-stone-500 uppercase">{blok.currentLabel}</label>
        <input type="number" className="bg-stone-800 border border-stone-700 text-2xl font-bold text-white w-20 px-2 py-1 rounded shadow-inner focus:outline-none focus:border-red-500" defaultValue={blok.maxValue} max={blok.maxValue} />
      </div>
      <div className="text-2xl font-bold text-stone-600 self-end mb-1">/</div>
      <div className="flex flex-col">
        <label className="text-[10px] text-stone-500 uppercase">{blok.maxLabel}</label>
        <span className="text-2xl font-bold text-stone-300 px-2 py-1">{blok.maxValue}</span>
      </div>
    </div>
	</div>
);

export default HPBlock;
