import BlogCard from "./BlogCard";

export default function BlogContent() {
  const paths = [
    "images/blog1.png",
    "images/blog2.png",
    "images/blog3.png",
    "images/blog4.png",
    "images/blog5.png",
    "images/blog6.png",
  ];
  const groupedPaths = [];
  for (let i = 0; i < paths.length; i += 2) {
    groupedPaths.push(paths.slice(i, i + 2));
  }
  return (
    <section className="flex  items-center justify-center flex-wrap">
      <div className="basis-[70%] flex flex-col items-center justify-center py-[160px] gap-[80px] sm:py-[80px]">
        {groupedPaths.map((group, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-8 items-center justify-between sm:flex-col"
          >
            {group.map((path, i) => (
              <BlogCard key={i} path={path} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
