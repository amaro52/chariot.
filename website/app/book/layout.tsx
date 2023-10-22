import { options } from "@/lib/auth/options";
import { routes } from "@/lib/constants";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  const user = await getServerSession(options);
  if (!user) {
    redirect(routes.login);
  }

  if (!user?.user.onboarded) {
    redirect(routes.onboarding.initial);
  }

  return <div> {children}</div>;
}
