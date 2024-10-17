import BlogCard from "../BlogComponents/BlogCard";

export default function BlogSection() {
  const paths = ["images/blog1.png", "images/blog2.png", "images/blog3.png"];
  return (
    <section className="flex justify-center items-center flex-wrap ">
      <div className="basis-[70%] flex flex-col justify-center items-center py-28 gap-20">
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <h6 className="text-blue text-sm font-bold"> Practice Advice</h6>
          <h3 className="text-prim text-[40px] leading-[50px]">
            Featured Posts
          </h3>
          <p className="text-sm text-sec">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="w-full flex-wrap flex gap-[30px] justify-between items-center sm:flex-col">
          {paths.map((p) => {
            return <BlogCard path={p} />;
          })}
        </div>
      </div>
    </section>
  );
}
