import React from 'react';

const UserTransactionHistory = () => {
  // Mock Data
  const transactions = [
    {
      id: "TXN-8839201",
      date: "Oct 24, 2023",
      time: "10:42 AM",
      type: "Booking Payment",
      property: "Capitol Site Driveway",
      method: "Visa •••• 4242",
      status: "Completed",
      amount: "-$1,250.00",
      amountClass: "text-white"
    },
    {
      id: "RFD-992810",
      date: "Oct 12, 2023",
      time: "02:15 PM",
      type: "Security Deposit Refund",
      property: "Modern Loft Downtown",
      method: "PayPal",
      status: "Refunded",
      amount: "+$250.00",
      amountClass: "text-emerald-500"
    },
    {
      id: "ADJ-112344",
      date: "Sep 28, 2023",
      time: "09:30 AM",
      type: "Cleaning Fee Adjustment",
      property: "Lakeside Cabin Retreat",
      method: "Mastercard •••• 8821",
      status: "Pending",
      amount: "-$45.00",
      amountClass: "text-white"
    },
    {
      id: "TXN-554211",
      date: "Aug 15, 2023",
      time: "06:20 PM",
      type: "Booking Payment",
      property: "Sunset Boulevard Apt",
      method: "Visa •••• 4242",
      status: "Failed",
      amount: "$850.00",
      amountClass: "text-user-text line-through"
    },
    {
      id: "TXN-332190",
      date: "Jul 02, 2023",
      time: "11:05 AM",
      type: "Long-term Rental",
      property: "Mountain View Lodge",
      method: "Bank Transfer",
      status: "Completed",
      amount: "-$2,400.00",
      amountClass: "text-white"
    }
  ];

  // Helper for Status Colors
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Refunded': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Pending': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Failed': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      default: return 'bg-zinc-800 text-zinc-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Failed': return 'error';
      case 'Pending': return 'hourglass_empty';
      default: return 'check_circle'; // Used as a generic dot in CSS or icon
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 p-6 lg:p-10">
      
      {/* 1. Header & Breadcrumbs */}
      <div className="flex flex-col gap-6 mb-2">
        <div className="flex items-center gap-2 text-user-text text-sm">
          <span>Dashboard</span>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span>Payments</span>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-white font-medium">Transaction History</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2 font-space">Transaction History</h1>
            <p className="text-user-text text-sm">View and track all your financial activity, bookings, and refunds.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-user-card border border-user-border rounded-lg text-white text-sm font-medium hover:bg-user-surface transition-all shadow-sm">
            <span className="material-symbols-outlined text-lg">download</span>
            Export Report
          </button>
        </div>

        {/* 2. Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-user-card border border-user-border p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div>
              <p className="text-user-text text-xs font-medium uppercase tracking-wider">Total Spent (YTD)</p>
              <p className="text-2xl font-bold text-white font-space">$12,450.00</p>
            </div>
          </div>
          <div className="bg-user-card border border-user-border p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
              <span className="material-symbols-outlined">savings</span>
            </div>
            <div>
              <p className="text-user-text text-xs font-medium uppercase tracking-wider">Total Refunds</p>
              <p className="text-2xl font-bold text-white font-space">$450.00</p>
            </div>
          </div>
          <div className="bg-user-card border border-user-border p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <div>
              <p className="text-user-text text-xs font-medium uppercase tracking-wider">Total Transactions</p>
              <p className="text-2xl font-bold text-white font-space">24</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Filter & Table Section */}
      <div className="bg-user-card rounded-xl border border-user-border flex flex-col shadow-sm">
        
        {/* Filters */}
        <div className="p-4 border-b border-user-border flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="relative w-full lg:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-user-text">search</span>
            <input 
              className="w-full bg-user-bg border border-user-border rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 placeholder-zinc-600 outline-none transition-all" 
              placeholder="Search by property or transaction ID..." 
              type="text"
            />
          </div>
          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            <div className="relative min-w-[140px] flex-1 lg:flex-none">
              <select className="w-full appearance-none bg-user-bg border border-user-border rounded-lg py-2.5 pl-4 pr-10 text-white text-sm focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 cursor-pointer outline-none">
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last Year</option>
                <option>Custom Range</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-user-text pointer-events-none text-lg">calendar_today</span>
            </div>
            <div className="relative min-w-[140px] flex-1 lg:flex-none">
              <select className="w-full appearance-none bg-user-bg border border-user-border rounded-lg py-2.5 pl-4 pr-10 text-white text-sm focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 cursor-pointer outline-none">
                <option>All Types</option>
                <option>Bookings</option>
                <option>Refunds</option>
                <option>Adjustments</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-user-text pointer-events-none text-lg">filter_list</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-user-border bg-user-surface">
                <th className="py-4 px-6 text-xs font-bold text-user-text uppercase tracking-wider whitespace-nowrap">Date & Time</th>
                <th className="py-4 px-6 text-xs font-bold text-user-text uppercase tracking-wider whitespace-nowrap">Description</th>
                <th className="py-4 px-6 text-xs font-bold text-user-text uppercase tracking-wider whitespace-nowrap">Property</th>
                <th className="py-4 px-6 text-xs font-bold text-user-text uppercase tracking-wider whitespace-nowrap">Method</th>
                <th className="py-4 px-6 text-xs font-bold text-user-text uppercase tracking-wider whitespace-nowrap">Status</th>
                <th className="py-4 px-6 text-xs font-bold text-user-text uppercase tracking-wider whitespace-nowrap text-right">Amount</th>
                <th className="py-4 px-6 text-xs font-bold text-user-text uppercase tracking-wider whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {transactions.map((txn, index) => (
                <tr key={index} className="group hover:bg-user-surface/50 transition-colors border-b border-user-border last:border-none">
                  <td className="py-4 px-6 text-user-text whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-white font-medium">{txn.date}</span>
                      <span className="text-xs">{txn.time}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col max-w-[200px]">
                      <span className="text-white font-medium truncate">{txn.type}</span>
                      <span className="text-xs text-user-text">Ref: {txn.id}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-white whitespace-nowrap">
                    {txn.property}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-user-text">
                      <span className="material-symbols-outlined text-lg">
                        {txn.method.includes('PayPal') || txn.method.includes('Bank') ? 'account_balance_wallet' : 'credit_card'}
                      </span>
                      <span>{txn.method}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyle(txn.status)}`}>
                      {txn.status === 'Completed' || txn.status === 'Refunded' ? (
                         <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      ) : (
                         <span className="material-symbols-outlined text-[14px]">{getStatusIcon(txn.status)}</span>
                      )}
                      {txn.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-right">
                    <span className={`font-bold ${txn.amountClass}`}>{txn.amount}</span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-center">
                    <button className="text-user-text hover:text-white transition-colors p-2 hover:bg-user-border rounded-lg" title="View Details">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="p-4 border-t border-user-border flex items-center justify-between">
          <p className="text-xs text-user-text">Showing <span className="text-white font-bold">1-5</span> of <span className="text-white font-bold">24</span> transactions</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-user-border text-user-text text-xs font-medium hover:bg-user-surface hover:text-white transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1.5 rounded-lg border border-user-border text-user-text text-xs font-medium hover:bg-user-surface hover:text-white transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTransactionHistory;