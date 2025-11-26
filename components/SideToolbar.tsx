import { Dock, DockIcon } from "./ui/dock";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
import { BuildingIcon, GithubIcon, HomeIcon, PencilIcon, SettingsIcon, UserIcon } from "lucide-react";

const DATA = {
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/complaint", icon: PencilIcon, label: "Portal" },
	],
	contact: {
		social: {
			GitHub: {
				name: "Complaints",
				url: "#",
				icon: GithubIcon,
			},
			X: {
				name: "X",
				url: "#",
				icon: BuildingIcon,
			},
			email: {
				name: "Send Email",
				url: "#",
				icon: SettingsIcon,
			},
		},
	},
}

const SideToolbarDock = () => {
	return (
		<>
			<TooltipProvider>
				<div className="relative">
					<Dock direction="top">
						{DATA.navbar.map((item) => (
							<DockIcon key={item.label}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href={item.href}
											aria-label={item.label}
											className={cn(
												buttonVariants({ variant: "ghost", size: "icon" }),
												"size-12 rounded-full"
											)}
										>
											<item.icon className="size-5" />
										</Link>
									</TooltipTrigger>
									<TooltipContent side="right">
										<p>{item.label}</p>
									</TooltipContent>
								</Tooltip>
							</DockIcon>
						))}
						<div className="w-8 h-px bg-border mx-auto" />
						{Object.entries(DATA.contact.social).map(([name, social]) => (
							<DockIcon key={name}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href={social.url}
											aria-label={social.name}
											className={cn(
												buttonVariants({ variant: "ghost", size: "icon" }),
												"size-12 rounded-full"
											)}
										>
											<social.icon className="size-5" />
										</Link>
									</TooltipTrigger>
									<TooltipContent side="right">
										<p>{name}</p>
									</TooltipContent>
								</Tooltip>
							</DockIcon>
						))}
					</Dock>
				</div>
			</TooltipProvider>
		</>

	)
}

export default SideToolbarDock;
