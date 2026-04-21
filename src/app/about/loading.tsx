export default function loading() {
  return (
    <div className="about-page">
      <div className="about-container animate-pulse">
        {/* Header */}
        <div className="about-header space-y-3">
          <div className="h-8 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        </div>

        {/* Card */}
        <div className="about-card mt-6">
          <div className="about-card-header mb-4">
            <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
          </div>

          {/* Table */}
          <div className="about-table-container space-y-4">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-4">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>

            {/* Rows */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="about-footer mt-6">
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
