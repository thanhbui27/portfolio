import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  getContactPageContent,
  getSocialLinks,
  getVisibleSectionByKey
} from "@/lib/portfolio-service";

export default async function ContactPage() {
  const [content, socialLinks, section] = await Promise.all([
    getContactPageContent(),
    getSocialLinks(),
    getVisibleSectionByKey("contact")
  ]);

  if (!section) {
    notFound();
  }

  return (
    <PageShell footerClassName="mt-0" mainClassName="pb-0">
      <ContactSection content={content} socialLinks={socialLinks} />
    </PageShell>
  );
}
