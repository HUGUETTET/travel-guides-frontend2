// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       hola
//     </div>
//   );
// }

import TestCRUD from "../components/TestCRUD";

export default function Home() {
  return (
    <>
    <html>
      <body>
        <main className="container mx-auto p-6">
          <h1 className="text-3xl font-bold">Travel Guides</h1>
          <p className="mt-4">Tu espacio para guías mochileras.</p>
          <TestCRUD></TestCRUD>
        </main>
      </body>
    </html>
    </>
  )
}
