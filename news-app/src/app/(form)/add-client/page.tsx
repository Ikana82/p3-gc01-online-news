"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

interface NewsForm {
  title: string;
  description: string;
  poster: string;
  createdAt?: string;
}

export default function AddMoment() {
  const router = useRouter();

  const [formData, setFormData] = useState<NewsForm>({
    title: "",
    description: "",
    poster: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.poster.trim()
    ) {
      toast.error("All fields are required!");
      return;
    }

    const dataToSend = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:3001/news", {
        method: "POST",
        body: JSON.stringify(dataToSend),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Error submit data");
      }

      toast.success("Moment shared successfully!");

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your moment has been shared.",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        router.push("/about");
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to share moment.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to share moment. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster position="top-center" />

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 flex justify-center items-center text-gray-700 dark:text-white text-lg font-normal p-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold py-4">Share Your Moment</h1>
            Share any important moments that you think people should know about.
            Tell us what you want to convey, and if needed, we will contact you
            for more detailed information. Everything you share has the chance
            to be featured on our news page.
            <br />
            <br />I can also create a few shorter, catchier versions in English
            to make it more engaging for readers. Do you want me to do that?
          </div>
        </div>

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-lg font-medium">
                Title of News / Moment
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter a title for your moment"
                className="border border-gray-300 rounded-md p-2 dark:bg-zinc-900 dark:text-white dark:border-gray-700"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-lg font-medium">
                Describe the moment
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Share what happened"
                rows={5}
                className="border border-gray-300 rounded-md p-2 dark:bg-zinc-900 dark:text-white dark:border-gray-700"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="poster" className="text-lg font-medium">
                Supporting Image (URL)
              </label>
              <input
                type="text"
                id="poster"
                name="poster"
                value={formData.poster}
                onChange={handleChange}
                placeholder="Paste image URL here"
                className="border border-gray-300 rounded-md p-2 dark:bg-zinc-900 dark:text-white dark:border-gray-700"
              />
            </div>

            <button
              type="submit"
              className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-md mt-4"
            >
              Share Moment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
