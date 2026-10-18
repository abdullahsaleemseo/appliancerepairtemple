import { CostTool } from '@/components/tools/CostTool';
import { ToolPage } from '@/components/tools/ToolPage';
import { toolPages } from '@/content/tools/pages';
import { pageMetadata } from '@/lib/seo';

const page = toolPages.cost;

export const metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });

export default function Page() {
  return (
    <ToolPage page={page}>
      <CostTool />
    </ToolPage>
  );
}
