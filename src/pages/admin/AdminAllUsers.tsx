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

interface User {
  id: string;
  surname: string;
  other_names: string;
  tax_identification_number: string;
  title: 'Mr.' | 'Mrs.' | 'Miss';
  address: string;
  digital_address: string;
  phone_number: string;
  email: string;
  national_id: string;
  lastLogin?: string; // This field might not be in your user object, remove if not needed
}

const AdminAllUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pageSize, setPageSize] = useState(10);
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, [token]);

  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://0.0.0.0:9002/users/?tenant_name=Oforikrom%20Municipal', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    // Implement edit functionality
    console.log('Edit user:', id);
  };

  const handleDelete = (id: string) => {
    // Implement delete functionality
    console.log('Delete user:', id);
  };

  const createUser = async (userData: Partial<User>) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://0.0.0.0:9001/users', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${userData.surname} ${userData?.other_names}`,
          email: userData.email,
          phone: userData.phone_number
        }),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        if (response.status === 500) {
          // User already exists
          console.log('User already exists:', responseData);
          return responseData; // Return the existing user data
        } else {
          throw new Error(responseData.message || `Failed to create user: ${response.status}`);
        }
      }
  
      console.log('User created successfully:', responseData);
      return responseData;
    } catch (error) {
      console.error('Error creating user:', error);
      setError(error instanceof Error ? error.message : 'Failed to create user. Please try again.');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendBill = async (userData: User) => {
    setIsLoading(true);
    setError(null);
    try {
      // First, create a user
      const newUser = await createUser(userData);
      console.log('User created/retrieved:', newUser);
  
      // Prepare bill data
      const billData = {
        user_id: newUser.id,
        amount: 100, // You might want to make this dynamic
        description: 'Tax Bill',
        due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // Due in 30 days
      };
      console.log('Preparing to create bill with data:', billData);
  
      // Then, create a bill
      const createBillResponse = await fetch('http://0.0.0.0:9001/bills', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(billData),
      });
  
      console.log('Create bill response status:', createBillResponse.status);
      const responseText = await createBillResponse.text();
      console.log('Create bill response body:', responseText);
  
      if (!createBillResponse.ok) {
        throw new Error(`Failed to create bill: ${createBillResponse.status} ${responseText}`);
      }
      
      const createdBill = JSON.parse(responseText);
      console.log('Bill created successfully:', createdBill);
  
      // Finally, send the bill
      console.log(`Preparing to send bill with ID: ${createdBill.id}`);
      const sendBillResponse = await fetch(`http://0.0.0.0:9001/bills/${createdBill.id}/send`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      console.log('Send bill response status:', sendBillResponse.status);
      const sendResponseText = await sendBillResponse.text();
      console.log('Send bill response body:', sendResponseText);
  
      if (!sendBillResponse.ok) {
        throw new Error(`Failed to send bill: ${sendBillResponse.status} ${sendResponseText}`);
      }
  
      alert('User created and bill sent successfully');
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error('Error in handleSendBill:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred while processing the bill.');
    } finally {
      setIsLoading(false);
    }
  };

  const columns: ColumnDef<User>[] = [
    {
      header: 'Title',
      accessorKey: 'title',
    },
    {
      header: 'Surname',
      accessorKey: 'surname',
    },
    {
      header: 'Other Names',
      accessorKey: 'other_names',
    },
    {
      header: 'TIN',
      accessorKey: 'tax_identification_number',
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
    {
      header: 'Digital Address',
      accessorKey: 'digital_address',
    },
    {
      header: 'Phone Number',
      accessorKey: 'phone_number',
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'National ID',
      accessorKey: 'national_id',
    },
    {
      header: 'Actions',
      cell: ({ row }) => (
        <div>
          <button onClick={() => handleEdit(row.original.id)} className="mr-2 text-blue-500 hover:text-blue-700">Edit</button>
          <button onClick={() => handleDelete(row.original.id)} className="mr-2 text-red-500 hover:text-red-700">Delete</button>
          <button onClick={() => handleSendBill(row.original)} className="text-green-500 hover:text-green-700">Send Bill</button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: users,
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

  const csvData = users.map(({ id, surname, other_names, tax_identification_number, title, address, digital_address, phone_number, email, national_id }) => ({
    id, surname, other_names, tax_identification_number, title, address, digital_address, phone_number, email, national_id
  }));

  return (
    <AdminDashboardLayout>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold leading-tight">User Management</h2>
            <CSVLink
              data={csvData}
              filename={"users.csv"}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Export to CSV
            </CSVLink>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {isLoading && <div className="text-blue-500 mb-4">Loading...</div>}
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
                value={(table.getColumn('surname')?.getFilterValue() as string) ?? ''}
                onChange={(event) =>
                  table.getColumn('surname')?.setFilterValue(event.target.value)
                }
                placeholder="Search by surname"
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
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
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
                    {Math.min((table.getState().pagination.pageIndex + 1) * pageSize, users.length)}
                  </span>{' '}
                  of <span className="font-semibold">{users.length}</span> results
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
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminAllUsers;