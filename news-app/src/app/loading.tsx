export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center py-10">
      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </div>
  );
}
