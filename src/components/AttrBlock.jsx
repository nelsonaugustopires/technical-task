import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const AttrBlock = ({ blok }) => (
	<div className="AttrBlock" {...storyblokEditable(blok)}>
		<div className="flex flex-col items-center w-24 bg-stone-900 border-2 border-stone-700 rounded-2xl shadow-lg overflow-hidden group hover:border-amber-600 transition-colors duration-300">
  
			<div className="w-full bg-stone-800 py-1 border-b border-stone-700 text-center">
				<span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-amber-500 transition-colors">{blok.AttrName}</span>
			</div>

			<div className="flex flex-col items-center justify-center py-3">
				<span className="text-3xl font-bold text-stone-100">+{blok.AttrMod}</span>
			</div>

			<div className="w-10 h-10 -mb-5 flex items-center justify-center bg-stone-800 border-2 border-stone-700 rounded-full text-sm font-bold text-amber-500 shadow-md">
				{blok.AttrValue}
			</div>

			<div className="h-4"></div>
		</div>
		
	</div>
);

export default AttrBlock;
