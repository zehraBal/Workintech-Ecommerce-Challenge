import RegisterForm from "../components/FormComponents/RegisterForm";

export default function Register() {
  return (
    <section className="flex justify-center items-center py-[80px]">
      <div className="basis-[70%] flex-col flex ">
        <div className="flex flex-col basis-full items-center justify-center ">
          <h6 className="text-xs text-[#737373]">
            Become a member and don't miss the opportunities
          </h6>
          <h1 className="text-[#252B42]">Sign Up</h1>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
}
