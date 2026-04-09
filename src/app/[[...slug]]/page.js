import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';

export default async function Page({ params }) {
	let { slug } = await params;

	console.log(slug);
	let language = null;
	if(slug && slug.length > 0){
		const availableLanguages = ['pt-br'];
		language = availableLanguages.includes(slug[0]) ? slug[0] : undefined;
		if (language) {
			slug.shift();
			if(slug.length ==0)
				slug = null;
		}
	}
	
	console.log(slug);
	let fullSlug = slug ? slug.join('/') : 'hero';
	console.log(fullSlug);

	let sbParams = {
		version: 'draft',
		cv: Date.now(),
		language
	};

	let response = null
	const storyblokApi = getStoryblokApi();
	try {
		 response = await storyblokApi.get(`cdn/stories/${fullSlug}`, sbParams);	
	} catch (error) {
		response = await storyblokApi.get(`cdn/stories/hero`, sbParams);
	}
	const data = response.data;
	console.log(data);

	//useStoryblokBridge(data.story);

	
	//return <div>{JSON.stringify(data, null, 2)}</div>
	return <div>
		<StoryblokStory story={data.story} />
	</div>;
}
