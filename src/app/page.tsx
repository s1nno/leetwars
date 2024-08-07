import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Competative leetcode website</p>
        <button
          className="transition-transform transform hover:scale-105 hover:bg-gradient-to-br hover:from-red-600 hover:to-orange-500 focus:outline-none"
          style={{
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            width: "200px",
            background: "linear-gradient(to right, red, orange)",
            boxShadow: "inset 0 0 0 1px white", // Add a border inside the edge
          }}
        >
          Create Game
        </button>
        <button
          className="transition-transform transform hover:scale-105 hover:bg-gradient-to-br hover:from-red-600 hover:to-orange-500 focus:outline-none"
          style={{
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            width: "200px",
            background: "linear-gradient(to right, red, orange)",
            boxShadow: "inset 0 0 0 1px white", // Add a border inside the edge
          }}
        >
          Join Game
        </button>
      </main>
    </>
  );
}
