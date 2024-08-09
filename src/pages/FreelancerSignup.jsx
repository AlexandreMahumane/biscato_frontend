import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { api } from "../apiConfig";
import { Footer } from "../components/footer";

export const FreelancerRegistrationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get("/category");
        setCategoryList(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/freelancer", {
        name,
        phone,
        serviceCategory:category,
        description,
        documentType,
        documentId,
        password,
      });
      setSuccessMessage("Freelancer registered successfully. Please verify OTP.");
      setTimeout(() => {
        setShowOptions(true);
      }, 3000);
      navigate("/FreelancerProfile");
    } catch (error) {
      console.error("Error registering freelancer", error);
    }
  };

  const handleOptionClick = (option) => {
    if (option === "feedback") {
      navigate("/feedback");
    } else if (option === "history") {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        {!showOptions ? (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Register as Freelancer
            </h2>
            <label className="block mb-4">
              <span className="text-gray-700">Name:</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Phone:</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Document Type:</span>
              <select
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
              >
                <option value="id">BI</option>
                <option value="passport">Passaporte</option>
              </select>
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Document ID:</span>
              <input
                type="text"
                value={documentId}
                onChange={(e) => setDocumentId(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Password:</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <div className="mb-4">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select-category mt-2 w-full"
              >
                <option value="">Select a category</option>
                {categoryList.map((element) => (
                  <option key={element.id} value={element.id}>
                    {element.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your description..."
                className="border border-gray-300 rounded-md p-2 w-full h-20 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </form>
        ) : (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">{successMessage}</h2>
            <div className="flex justify-around mt-4">
              <button
                onClick={() => handleOptionClick("feedback")}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Give Feedback
              </button>
              <button
                onClick={() => handleOptionClick("history")}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                View History
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
