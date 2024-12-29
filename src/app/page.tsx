import { ContentLayout } from "@/components/SideBar/content-layout";

export default function Home() {

  return (
      <ContentLayout title="Home">
      <div className="bg-primary grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <p>teste</p>
      </div>
      </ContentLayout>
  );
}
