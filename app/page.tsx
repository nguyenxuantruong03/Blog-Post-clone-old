import Post from "./components/Posts"
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center text-white color text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Truong</span>.
        </span>
      </p>
      <Post />
    </main>
  )
}
