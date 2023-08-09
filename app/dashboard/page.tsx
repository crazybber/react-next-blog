import { cookies, headers } from "next/headers";

async function getData() {
  const authHeader = headers().get("authorization");
  const res = await fetch("https://localhost:3000/api/projects", { cache: "no-store" });
  const projects = await res.json();
  return {
    authHeader,
    projects,
  };
}

export default async function Dashboard() {
  const projects= (await getData()).projects;

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  );
}
