import { GithubIcon, Info } from "lucide-react";
import { Button } from "./ui/button";
import { HoverCardTrigger, HoverCard, HoverCardContent } from "./ui/hover-card";
import Link from "next/link";

const Header = () => {
	return (
		<div className="fixed top-0 left-0 right-0 z-50 w-full p-3 px-6 lg:px-36">
			<header className="bg-white/10 backdrop-blur-md w-full rounded-full border flex items-center px-5 py-3 justify-between">
				<Button className="rounded-full">
					<Link href="/">Complaint Service Portal</Link>
				</Button>
				<div className="flex gap-4">
					<Button className="rounded-full">
						<GithubIcon />
						<span>Github</span>
					</Button>
					<HoverCard>
						<HoverCardTrigger asChild>
							<Button className="rounded-full">
								<Info />
								<span>About</span>
							</Button>
						</HoverCardTrigger>
						<HoverCardContent>
							<div className="flex justify-between gap-4">
								<div className="space-y-1">
									<h4 className="text-sm font-semibold">Complaint Service Portal</h4>
									<p className="text-sm">
										Automatic complaint classification powered by NLP
									</p>
									<div className="text-muted-foreground text-xs">
										Created by Adnan with ❤️
									</div>
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
				</div>
			</header>
		</div>
	)
}

export default Header;
