import {ProjectsProvider} from "./context/ProjectsContext.tsx";
import AddProjectForm from "./components/AppProjectForm.tsx";
import ProjectList from "./components/ProjectList.tsx";
import Footer from "./components/Footer.tsx";

function App() {

    // Using tailwind for styling. Hope this is okay.

    return (
        <ProjectsProvider>
            <div className="min-h-screen bg-gray-900 text-white px-4 py-6 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <header className="mb-8 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">DevBoard</h1>
                        <p className="text-sm sm:text-base text-gray-400">
                            Project Management Tool
                        </p>
                    </header>

                    <main className="space-y-8 md:flex md:space-x-8 md:space-y-0">
                        <div className="md:w-1/3">
                            <AddProjectForm/>
                        </div>
                        <div className="md:w-2/3">
                            <ProjectList/>
                        </div>
                    </main>
                </div>
                <Footer/>
            </div>
        </ProjectsProvider>
    )
}

export default App
