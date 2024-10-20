import React, { memo } from "react";
import Loading from "../ui/Loading";
import TableRow from "./TableRow";

import ExportButton from "./ExportButton";
import NoData from "../ui/NoData";

export const GraduatesTable = memo(
  ({
    grads,
    loading,
    expandedRow,
    setExpandedRow,
    currentPage,
    totalPages,
    onPageChange,
    fetchAllGraduatesForExport,
    filters,
  }) => {
    if (loading) return <Loading />;

    return (
      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          <ExportButton
            fetchAllGraduatesForExport={fetchAllGraduatesForExport}
            filters={filters}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="text-xs md:text-sm lg:text-sm text-gray-700 uppercase text-nowrap bg-gray-100">
              <tr>
                <th scope="col" className="lg:px-3 py-3">
                  Student Info
                </th>
                <th scope="col" className="lg:px-3 py-3">
                  Track & Branch
                </th>
                <th scope="col" className="lg:px-3 py-3 hidden md:block">
                  Education
                </th>
                <th scope="col" className="lg:px-3 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {grads?.length > 0 ? (
                grads.map((grad) => (
                  <TableRow
                    key={grad.email}
                    grad={grad}
                    onExpandRow={setExpandedRow}
                    isExpanded={expandedRow === grad.email}
                  />
                ))
              ) : (
                <NoData
                  title="EMPTY"
                  description="No graduates found."
                  buttonText="DASHBOARD"
                  buttonTo="/"
                  insideTable={true}
                />
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center gap-2 p-4">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-100 rounded-md disabled:opacity-50 hover:bg-gray-200 transition-colors"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages || 1}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-100 rounded-md disabled:opacity-50 hover:bg-gray-200 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
);

export default GraduatesTable;
