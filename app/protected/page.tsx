import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  // const supabase = await createClient();
  //
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  //
  // if (!user) {
  //   return redirect("/sign-in");
  // }

  return (
    <div className="overflow-y-auto">
      <div className="h-[200px] w-[200px] bg-[#34367f]">123</div>
      <div className="h-[200px] w-[200px] bg-[#34367f]">123</div>
      <div className="h-[200px] w-[200px] bg-[#34367f]">123</div>
      <div className="h-[200px] w-[200px] bg-[#34367f]">123</div>
      <div className="h-[200px] w-[200px] bg-[#34367f]">123</div>
      <div className="h-[200px] w-[200px] bg-[#34367f]">123</div>
      <div className="h-[200px] w-[200px] bg-[#34367f]">123</div>
      <div className="h-[200px] w-[200px] bg-[#34367f]">123</div>
    </div>
  );
}
