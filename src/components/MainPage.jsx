import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const MainPage = ({ blok }) => (
	<main {...storyblokEditable(blok)}>
		{blok.body?.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);

export default MainPage;
