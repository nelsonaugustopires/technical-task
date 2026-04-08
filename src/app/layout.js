import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';

export const metadata = {
	title: 'Character Sheet',
	description: 'A Dungeons&Dragons Character Sheet',
};

export default function RootLayout({ children }) {
	return (
		<StoryblokProvider>
			<html lang="en">
				<body className='m-auto'>
					{children}
				</body>
			</html>
		</StoryblokProvider>
	);
}
