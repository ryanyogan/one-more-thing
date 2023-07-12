import AuthForm from "@/components/forms/auth-form";
export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-2xl font-bold leading-7 text-gray-900">
          HERE&apos;S ONE THING
        </h1>
      </div>

      <AuthForm />
    </div>
  );
}
