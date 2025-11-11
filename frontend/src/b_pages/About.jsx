import NestedTest from "../b_components/NestedTest"

export default function About() {
    return (
        <>
            <div className="h-screen w-screen bg-yellow-300 flex justify-center items-center flex-col">
                <div className="h-[80%] flex justify-center items-center">
                    <h1>About Page</h1>
                <p>This is the about page</p>
                </div>
                <div className="">
                    <NestedTest></NestedTest>
                </div>
                
            </div>
            
        </>
    )
}


