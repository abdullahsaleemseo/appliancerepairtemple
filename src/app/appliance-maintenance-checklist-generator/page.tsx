import { MaintenanceTool } from '@/components/tools/MaintenanceTool';
import { ToolPage } from '@/components/tools/ToolPage';
import { toolPages } from '@/content/tools/pages';
import { pageMetadata } from '@/lib/seo';

const page = toolPages.maintenance;

export const metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });

export default function Page() {
  return (
    <ToolPage page={page}>
      <MaintenanceTool />
    </ToolPage>
  );
}
