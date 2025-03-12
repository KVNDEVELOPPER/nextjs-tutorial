import React from "react";

const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  if (!response.ok) throw new Error("Failed to fetch data");

  const albums: { id: number; title: string }[] = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {albums.map((album) => (
        <div
          key={album.id}
          className="bg-white shadow-md rounded-lg p-4 transition transform hover:scale-105"
        >
          <h3 className="text-lg font-bold mb-2">{album.title}</h3>
          <p className="text-gray-600">Album ID: {album.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
