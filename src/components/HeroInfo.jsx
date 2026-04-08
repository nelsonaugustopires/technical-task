import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const HeroInfo = ({blok}) => (
	<div {...storyblokEditable(blok)} className='HeroInfo'>
		<div className='w-full max-w-7xl mx-auto bg-stone-900 border-2 border-stone-700 p-6 rounded-lg shadow-2xl flex flex-col lg:flex-row gap-8 items-center lg:items-start'>
			<div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
				<img 
					src={blok.heroimage.filename} 
					alt="HeroImg" 
					className="w-full h-full object-cover rounded-md border-4 border-stone-800 shadow-inner grayscale hover:grayscale-0 transition-all duration-500"
				/>
			</div>
			<div className="flex-grow flex flex-col gap-6 text-stone-200 w-full">
				<div className="flex justify-between items-end border-b-2 border-stone-700 pb-2">
					<div>
						<label className="text-xs uppercase tracking-widest text-stone-500 font-bold block">{blok.name}</label>
						<p className="text-3xl font-serif font-semibold text-amber-500">{blok.nameInput}</p>
					</div>
					<div className="text-right">
						<label className="text-xs uppercase tracking-widest text-stone-500 font-bold block">{blok.herolvl}</label>
						<p className="text-3xl font-bold text-stone-200">
							{blok.herolvlInput}
						</p>
					</div>
				</div>
				<div className="flex-grow grid grid-cols-1 gap-4 text-stone-200">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<label className="text-xs uppercase tracking-widest text-stone-500 font-bold">{blok.race}</label>
							<p className="text-lg">{blok.raceInput}</p>
						</div>
						<div>
							<label className="text-xs uppercase tracking-widest text-stone-500 font-bold">{blok.heroclassInput}</label>
							<p className="text-lg">{blok.heroclass}</p>
						</div>
						<div>
							<label className="text-xs uppercase tracking-widest text-stone-500 font-bold">{blok.heroalign}</label>
							<p className="text-lg">{blok.heroalignInput}</p>
						</div>
						<div>
							<label className="text-xs uppercase tracking-widest text-stone-500 font-bold">{blok.herobg}</label>
							<p className="text-lg">{blok.herobgInput}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
);

export default HeroInfo;
