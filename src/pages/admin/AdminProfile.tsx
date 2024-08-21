import React, { useState, useEffect } from "react";
import AdminDashboardLayout from "../../components/templates/AdminDashboardLayout";
import { useAuth } from "../../contexts/AuthContext";
import InitialAvatar from "../../components/molecules/InitialAvatar";

interface FormData {
    name: string;
    email: string;
    username: string;
    password: string;
  }

const AdminProfile: React.FC = () => {
    const { admin, token, updateAdmin } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      username: "",
      password: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
  

    useEffect(() => {
        if (admin) {
          setFormData({
            name: admin.name || "",
            email: admin.email || "",
            username: admin.username || "",
            password: "",
          });
        }
      }, [admin]);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
    
        try {
          const response = await fetch("http://0.0.0.0:9002/super-admins/current", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error("Failed to update profile");
          }
    
          const updatedAdmin = await response.json();
          updateAdmin(updatedAdmin);
          setIsEditing(false);
          setSuccess("Profile updated successfully");
        } catch (error) {
          setError("Failed to update profile. Please try again.");
          console.error("Update error:", error);
        }
      };

  const inputClasses = `mt-1 block w-full rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 
    ${isEditing 
      ? 'border-gray-300 bg-white dark:bg-gray-700 text-black dark:text-black' 
      : 'border-transparent bg-gray-400 dark:bg-gray-200 text-gray-700 dark:text-gray-300'}
    ${isEditing ? 'border-2' : 'border'}`;

  return (
    <AdminDashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Admin Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Picture Section */}
          <div className="md:col-span-1 bg-white dark:bg-boxdark shadow rounded-lg p-6">
            <div className="text-center">
              {admin?.profilePicture ? (
                <img
                  className="mx-auto w-32 h-32 rounded-full object-cover"
                  src={admin.profilePicture}
                  alt="Admin profile"
                />
              ) : (
                <div className="mx-auto w-32 h-32">
                  <InitialAvatar name={admin?.name || 'Admin'} size={128} fontSize={48} />
                </div>
              )}
              <h2 className="mt-4 text-xl font-semibold dark:text-white">{admin?.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{admin?.email}</p>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Upload New Picture
              </button>
            </div>
          </div>

          {/* Profile Information Section */}
          <div className="md:col-span-2 bg-white dark:bg-boxdark shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Profile Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={inputClasses}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                {isEditing ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="mr-4 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white py-2 px-4 rounded hover:bg-gray-400 dark:hover:bg-gray-700 transition duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                      Save Changes
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Account Settings Section */}
          <div className="md:col-span-3 bg-white dark:bg-boxdark shadow rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Account Settings</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium dark:text-white">Change Password</h4>
                <button className="mt-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white py-2 px-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300">
                  Update Password
                </button>
              </div>
              <div>
                <h4 className="text-lg font-medium dark:text-white">Delete Account</h4>
                <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
                  Delete My Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminProfile;