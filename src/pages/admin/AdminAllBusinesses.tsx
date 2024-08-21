import React, { useState, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';
import { CSVLink } from 'react-csv';
import AdminDashboardLayout from '../../components/templates/AdminDashboardLayout';
import { useAuth } from '../../contexts/AuthContext';

interface Business {
  id: string;
  name: string;
  owner: string;
  type: string;
  location: string;
  registrationDate: string;
}

interface BusinessCreate {
    name: string;
    owner_id: string;
    is_active: boolean;
    class: string;
    da_assigned_number: string;
    establishment_year: number;
    certificate: string;
    permit_number: string;
    tax_identification_number: string;
    number_of_employees: number;
    comments: string;
}

const AdminAllBusinesses: React.FC = () => {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [tenantName, setTenantName] = useState('');
    const { token } = useAuth();

    useEffect(() => {
        fetchBusinesses();
      }, [token, tenantName, pageSize, currentPage]);
    
    const fetchBusinesses = async () => {
    setIsLoading(true);
    setError(null);
    try {
        const response = await fetch(`http://0.0.0.0:9002/businesses?tenant_name=${tenantName}&limit=${pageSize}&offset=${currentPage * pageSize}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        });
        if (!response.ok) throw new Error('Failed to fetch businesses');
        const data = await response.json();
        setBusinesses(data.businesses);
        setTotalCount(data.total_count);
    } catch (error) {
        setError('Error fetching businesses. Please try again.');
        console.error('Error fetching businesses:', error);
    } finally {
        setIsLoading(false);
    }
    };
    
    const handleCreateBusiness = async (businessData: BusinessCreate) => {
    try {
        const response = await fetch(`http://0.0.0.0:9002/businesses?tenant_name=${tenantName}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(businessData),
        });
        if (!response.ok) throw new Error('Failed to create business');
        fetchBusinesses(); // Refresh the list after creating
    } catch (error) {
        setError('Error creating business. Please try again.');
        console.error('Error creating business:', error);
    }
      };

    const handleUpdateBusiness = async (id: string, businessData: Partial<Business>) => {
    try {
        const response = await fetch(`/businesses/${id}?tenant_name=${tenantName}`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(businessData),
        });
        if (!response.ok) throw new Error('Failed to update business');
        fetchBusinesses(); // Refresh the list after updating
    } catch (error) {
        setError('Error updating business. Please try again.');
        console.error('Error updating business:', error);
    }
    };
    

  const columns: ColumnDef<Business>[] = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Owner',
      accessorKey: 'owner',
    },
    {
      header: 'Type',
      accessorKey: 'type',
    },
    {
      header: 'Location',
      accessorKey: 'location',
    },
    {
      header: 'Registration Date',
      accessorKey: 'registrationDate',
    },
    {
    header: 'Actions',
    cell: ({ row }) => (
        <div>
        <button onClick={() => handleUpdateBusiness(row.original.id, {})} className="mr-2 text-blue-500 hover:text-blue-700">Edit</button>
        {/* Add delete functionality if needed */}
        </div>
    ),
    },
];

  const table = useReactTable({
    data: businesses,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: {
        pageSize: pageSize,
        pageIndex: 0,
      },
    },
  });

  const csvData = businesses.map(({ id, name, owner, type, location, registrationDate }) => ({
    id,
    name,
    owner,
    type,
    location,
    registrationDate,
  }));


  return (
    <AdminDashboardLayout>
      <div className="container mx-auto px-4 sm:px-8">
        {isLoading && <div>Loading...</div>}
        {error && <div className="text-red-500">No Business Registered yet !</div>}
        {!error && <div className="py-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold leading-tight">Business Management</h2>
            <CSVLink
              data={csvData}
              filename={"businesses.csv"}
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
                {[10, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
              <span>entries</span>
            </div>
            <div className="flex items-center">
              <input
                value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                onChange={(event) =>
                  table.getColumn('name')?.setFilterValue(event.target.value)
                }
                placeholder="Search by name"
                className="border rounded p-1"
              />
            </div>
          </div>
          <div className="overflow-x-auto bg-white shadow-md rounded my-6">
            <table className="min-w-full leading-normal">
              <thead>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th key={header.id} className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="py-3 flex items-center justify-between">
            <div className="flex-1 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-700">
                  Showing <span className="font-semibold">{table.getState().pagination.pageIndex * pageSize + 1}</span> to{' '}
                  <span className="font-semibold">
                    {Math.min((table.getState().pagination.pageIndex + 1) * pageSize, businesses.length)}
                  </span>{' '}
                  of <span className="font-semibold">{businesses.length}</span> results
                </span>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    Previous
                  </button>
                  <button
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminAllBusinesses;