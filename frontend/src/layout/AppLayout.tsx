import { ReactNode, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

interface DefaultLayoutProps {
  headerEntity: any;
  headerProp: string;
  headerNameProp?: string;
  workspaces: any[];
  organizations: any[];
  organization: any;
  headerExtendedItems?: ReactNode;
  children: ReactNode;
  hasMoreWorkspaces?: boolean;
  loadMoreWorkspaces?: VoidFunction;
}

const AppLayout = ({
  workspaces,
  headerEntity,
  headerProp,
  headerNameProp,
  organizations,
  organization,
  headerExtendedItems,
  children,
  hasMoreWorkspaces,
  loadMoreWorkspaces,
}: DefaultLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-main-bg px-4 pt-4">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          workspaces={workspaces}
          organizations={organizations}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          organization={organization}
          hasMoreWorkspaces={hasMoreWorkspaces}
          loadMoreWorkspaces={loadMoreWorkspaces}
        />

        <div className="w-full overflow-x-hidden">
          {!!headerEntity && (
            <div className="flex w-full items-center">
              <Header
                nameProp={headerNameProp}
                entity={headerEntity}
                property={headerProp}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                extendedItems={headerExtendedItems}
              />
            </div>
          )}
          <main>
            <div className="mx-auto bg-main pr-6 pt-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
