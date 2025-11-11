// b_pages/UserPage.jsx
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


export async function loader({params}) {
      const res = await fetch(`http://127.0.0.1:8000/api/show_user/${params.name}/`);
    if (!res.ok) {
    throw new Response("Not Found", { status: 404 });
  }
  return res.json();
}



export default function UserPage() {
  const { name } = useParams(); // ← "Philipp", "Florian", ...
    


  return (
    <main className="p-8">
      <h1 className="text-xl">User: {name}</h1>
      <p>This page is rendered for /users/{name}</p>
    </main>
  );
}
