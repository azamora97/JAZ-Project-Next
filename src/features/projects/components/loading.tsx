// ✅ Server Component — solo renderiza HTML
export default function Loading() {
  return (
    <div>
      <div className="ProjectsTitle mb-6 flex justify-center">
        <h2 className="h-6 w-40 bg-gray-300 rounded animate-pulse"></h2>
      </div>

      <div className="CardContainer">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="projectCard p-4 rounded-lg border animate-pulse"
          >
            <div
              style={{ margin: "3px 0" }}
              className="h-3 bg-gray-300 rounded w-full"
            ></div>

            <div>
              <div
                style={{ margin: "3px 0" }}
                className="h-3 bg-gray-300 rounded w-2/3 mb-4"
              ></div>
              <div className="h-3 bg-gray-300 rounded w-2/3"></div>
            </div>

            <div className="Card-content_Justify ">
              <div className="h-2 bg-gray-300 rounded w-32"></div>
              <div className="h-2 bg-gray-300 rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
