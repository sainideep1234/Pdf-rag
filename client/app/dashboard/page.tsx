import FileUpload from "../components/FileUpload";
import Chat from "../components/Chat";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="bg-slate-900 flex flex-col h-screen">
      {/* Show if user is signed in */}
      <SignedIn>
        <div className="flex flex-col md:flex-row flex-grow px-4 md:px-10 gap-8">
          {/* File Upload */}
          <div className="w-full md:w-[30vw] p-4 flex items-center justify-center">
            <FileUpload />
          </div>

          {/* Chat */}
          <div className="w-full md:w-[70vw] p-4 flex items-center justify-center border-slate-800 border-l-2">
            <Chat />
          </div>
        </div>
      </SignedIn>

      {/* Show if user is signed out */}
      <SignedOut>
        <div className="flex flex-1 items-center justify-center text-white">
          <div className="flex flex-col items-center">
            <p className="text-2xl mb-4">Please sign in to continue</p>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-blue-600 rounded-lg">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>
    </div>
  );
}
