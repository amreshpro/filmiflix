export default function DetailedPageShimmer() {
  return (
    <div className="sticky w-60 bg-secondary rounded-lg p-2 px-4 py-4  overflow-hidden">
      <div className="bg-primary rounded-lg h-96 w-96"></div>
      <div className="content  px-2 py-2">
        <h1 className="font-bold w-5 bg-primary"></h1>
        <p className="w-5 bg-primary"></p>
      </div>
    </div>
  );
}
