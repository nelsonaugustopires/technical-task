import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const SavThrBlock = ({ blok }) => (
	<div className="SavThrBlock flex flex-col gap-3" {...storyblokEditable(blok)} >
		<h2 className="text-xl font-serif font-bold text-amber-500 border-b border-stone-800 pb-2 uppercase tracking-tighter">
			{blok.Header}
		</h2>
		<div className={`${blok.Header == 'SKILLS' ? "grid grid-cols-1 gap-1":"flex flex-col gap-2"}`}>
			{blok.STAttribute.map((nestedBlok) => (
				<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} isSkill={blok.Header == 'SKILLS'}/>
			))}
		</div>
	</div>
);

export default SavThrBlock;