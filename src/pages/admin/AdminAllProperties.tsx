import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import AdminDashboardLayout from '../../components/templates/AdminDashboardLayout';
import { CSVLink } from 'react-csv';

interface Building {
  id: string;
  name: string;
  address: string;
  owner: string;
  constructionDate: string;
  type: string;
  [key: string]: any;
}

const AdminAllProperties: React.FC = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tenantName, setTenantName] = useState('');
  const { token } = useAuth();

  useEffect(() => {
    fetchBuildings();
  }, [token, tenantName, pageSize, currentPage]);

  const fetchBuildings = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://0.0.0.0:9002/buildings?tenant_name=${tenantName}&limit=${pageSize}&offset=${currentPage * pageSize}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch buildings');
      const data = await response.json();
      setBuildings(data.buildings);
      setTotalCount(data.total_count);
    } catch (error) {
      setError('Error fetching buildings. Please try again.');
      console.error('Error fetching buildings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const csvData = buildings.map(({ id, name, address, owner, constructionDate, type }) => ({
    id,
    name,
    address,
    owner,
    constructionDate,
    type,
  }));

  return (
    <AdminDashboardLayout>
      <div className="container mx-auto px-4 sm:px-8">
        {isLoading && <div>Loading...</div>}
        {error && <div className="text-red-500">No Building Registered yet !</div>}
        {!isLoading && !error && (
          <div className="py-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold leading-tight">Building Management</h2>
              <CSVLink
                data={csvData}
                filename={"buildings.csv"}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Export to CSV
              </CSVLink>
            </div>
            <div className="my-2 flex sm:flex-row flex-col items-center justify-between">
              <div className="flex items-center mb-2 sm:mb-0">
                <span>Show </span>
                <select
                  value={pageSize}
                  onChange={e => setPageSize(Number(e.target.value))}
                  className="mx-2 border rounded p-1"
                >
                  {[10, 20, 30, 40, 50].map(size => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <span>entries</span>
              </div>
              <div className="flex items-center">
                <input
                  value={tenantName}
                  onChange={(event) => setTenantName(event.target.value)}
                  placeholder="Search by tenant name"
                  className="border rounded p-1"
                />
              </div>
            </div>
            <div className="overflow-x-auto bg-white shadow-md rounded my-6">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Address</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Owner</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Construction Date</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {buildings.map(building => (
                    <tr key={building.id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{building.id}</td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{building.name}</td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{building.address}</td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{building.owner}</td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{building.constructionDate}</td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{building.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="py-3 flex items-center justify-between">
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-700">
                    Showing <span className="font-semibold">{currentPage * pageSize + 1}</span> to{' '}
                    <span className="font-semibold">
                      {Math.min((currentPage + 1) * pageSize, totalCount)}
                    </span>{' '}
                    of <span className="font-semibold">{totalCount}</span> results
                  </span>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
                      disabled={currentPage === 0}
                    >
                      Previous
                    </button>
                    <button
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(totalCount / pageSize) - 1))}
                      disabled={(currentPage + 1) * pageSize >= totalCount}
                    >
                      Next
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminAllProperties;
