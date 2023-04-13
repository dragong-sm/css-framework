import React from "react";

export default function About() {
  return (
    <section name="about" className="w-full h-screen">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-a mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">About this Company</h2>
          <p className="py-6 text-3xl text-gray-500">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
        <p className="mt-20 text-xl">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <p className="mt-20 text-xl">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </section>
  );
}
