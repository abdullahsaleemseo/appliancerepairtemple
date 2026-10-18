import { SymptomTool } from '@/components/tools/SymptomTool';
import { ToolPage } from '@/components/tools/ToolPage';
import { toolPages } from '@/content/tools/pages';
import { pageMetadata } from '@/lib/seo';

const page = toolPages.symptoms;

export const metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });

export default function Page() {
  return (
    <ToolPage page={page}>
      <SymptomTool />
    </ToolPage>
  );
}
