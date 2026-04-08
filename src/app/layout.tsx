import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';
import Link from 'next/link';

export const metadata = {
	title: 'Character Sheet',
	description: 'A Dungeons&Dragons Character Sheet',
};

export default function RootLayout({ children }: { children: React.ReactNode;}) {
	const navLinks = [
    { name: "Hero", href: "/" },
    { name: "Features", href: "/feature" }, 
  ];

	return (
		<StoryblokProvider>
			<html lang="en">
				<body className='m-auto'>
					<header className="sticky top-0 z-50 w-full bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
						<nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="w-8 h-8 bg-amber-600 rounded rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(217,119,6,0.4)]">
									<span className="text-stone-950 font-black -rotate-45 text-xs">D</span>
								</div>
								<span className="font-serif font-bold text-stone-100 tracking-tighter hidden sm:block">
									D&D <span className="text-amber-500 italic">SHEET</span>
								</span>
							</div>
							<div className="flex gap-1">
								{navLinks.map((link) => {
									const isActive = true;
									return (
										<Link
											key={link.href}
											href={link.href}
											className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
												isActive 
													? "bg-amber-900/20 text-amber-500 border border-amber-900/50" 
													: "text-stone-500 hover:text-stone-200 hover:bg-stone-900"
											}`}
										>
											{link.name}
										</Link>
									);
								})}
							</div>
						</nav>
					</header>
					{children}
				</body>
			</html>
		</StoryblokProvider>
	);
}
