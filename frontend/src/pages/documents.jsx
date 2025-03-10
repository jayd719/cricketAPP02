import { Search, Filter, FolderOpen, FileText, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

// Sample data (moved to the top for clarity)
const documents = [
    {
        id: 1,
        title: "Product Launch Strategy",
        description:
            "Comprehensive strategy document outlining the marketing and sales approach for the new product launch.",
        updatedAt: "2 days ago",
        fileSize: "4.2 MB",
        collaborators: [1, 2, 3],
    },
    {
        id: 2,
        title: "Market Research Report",
        description: "Detailed analysis of market trends, competitor landscape, and target audience for the new product.",
        updatedAt: "1 week ago",
        fileSize: "8.7 MB",
        collaborators: [1, 2],
    },
    {
        id: 3,
        title: "Product Specifications",
        description: "Technical specifications and feature details for the upcoming product release.",
        updatedAt: "3 days ago",
        fileSize: "2.1 MB",
        collaborators: [1, 3, 4],
    },
    {
        id: 4,
        title: "Budget Proposal",
        description: "Financial projections and budget allocation for the product launch campaign.",
        updatedAt: "5 days ago",
        fileSize: "1.8 MB",
        collaborators: [2, 3],
    },
    {
        id: 5,
        title: "Marketing Materials",
        description: "Collection of marketing assets including banners, social media posts, and email templates.",
        updatedAt: "1 day ago",
        fileSize: "12.5 MB",
        collaborators: [1, 2, 3, 4],
    },
    {
        id: 6,
        title: "Launch Timeline",
        description: "Detailed timeline with key milestones and deadlines for the product launch.",
        updatedAt: "4 days ago",
        fileSize: "1.2 MB",
        collaborators: [1, 3],
    },
]

export default function DocumentPortal() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col md:flex-row">
                <Sidebar />
                <DocumentSection />
            </main>
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <MobileMenuButton />
                    <Link href="/" className="flex items-center">
                        <FolderOpen className="h-6 w-6 text-primary" />
                        <span className="ml-2 text-xl font-bold">DocHub</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <nav className="flex items-center space-x-4">
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                            Dashboard
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                            Projects
                        </Link>
                        <Link href="#" className="text-sm font-medium text-primary">
                            Documents
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                            Settings
                        </Link>
                    </nav>
                    <UserMenu />
                </div>
            </div>
        </header>
    )
}

function MobileMenuButton() {
    return (
        <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
        </Button>
    )
}

function UserMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <img src="/placeholder.svg?height=32&width=32" alt="User" className="rounded-full" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function Sidebar() {
    return (
        <aside className="hidden md:block w-64 border-r border-gray-200 bg-white p-4">
            <div className="space-y-4">
                <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Projects</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link href="#" className="flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-gray-100">
                                <span className="flex-1">Marketing Campaign</span>
                                <Badge variant="outline">12</Badge>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="flex items-center text-sm px-2 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20"
                            >
                                <span className="flex-1">Product Launch</span>
                                <Badge variant="outline">8</Badge>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-gray-100">
                                <span className="flex-1">Research Papers</span>
                                <Badge variant="outline">5</Badge>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Categories</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link href="#" className="flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-gray-100">
                                <span className="flex-1">Specifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-gray-100">
                                <span className="flex-1">Reports</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-gray-100">
                                <span className="flex-1">Presentations</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-gray-100">
                                <span className="flex-1">Contracts</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Important</Badge>
                        <Badge variant="secondary">Draft</Badge>
                        <Badge variant="secondary">Final</Badge>
                        <Badge variant="secondary">Archived</Badge>
                    </div>
                </div>
            </div>
        </aside>
    )
}

function DocumentSection() {
    return (
        <div className="flex-1 p-4 md:p-6 overflow-auto">
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Product Launch Documents</h1>
                <p className="text-gray-500">8 documents • Last updated 2 days ago</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input placeholder="Search documents..." className="pl-10" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-1">
                                <Filter className="h-4 w-4" />
                                <span>Filter</span>
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>All Documents</DropdownMenuItem>
                            <DropdownMenuItem>Recent</DropdownMenuItem>
                            <DropdownMenuItem>Modified by me</DropdownMenuItem>
                            <DropdownMenuItem>Shared with me</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button>
                        <FileText className="h-4 w-4 mr-2" />
                        New Document
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {documents.map((doc) => (
                    <DocumentCard key={doc.id} document={doc} />
                ))}
            </div>
        </div>
    )
}

function DocumentCard({ document }) {
    return (
        <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-medium flex items-start gap-2">
                    <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="truncate">{document.title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2">
                <p className="text-sm text-gray-500 line-clamp-2 mb-2">{document.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                    <span>Updated {document.updatedAt}</span>
                    <span className="mx-2">•</span>
                    <span>{document.fileSize}</span>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex -space-x-2">
                    {document.collaborators.map((collaborator, index) => (
                        <img
                            key={index}
                            src={`/placeholder.svg?height=24&width=24`}
                            alt={`Collaborator ${index + 1}`}
                            className="h-6 w-6 rounded-full border-2 border-white"
                            title={`Collaborator ${index + 1}`}
                        />
                    ))}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Open</DropdownMenuItem>
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>Rename</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardFooter>
        </Card>
    )
}

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <div>© 2025 DocHub. All rights reserved.</div>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <Link href="#" className="hover:text-gray-900">
                        Terms
                    </Link>
                    <Link href="#" className="hover:text-gray-900">
                        Privacy
                    </Link>
                    <Link href="#" className="hover:text-gray-900">
                        Help
                    </Link>
                </div>
            </div>
        </footer>
    )
}
