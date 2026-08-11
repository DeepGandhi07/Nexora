import { OrganizationList, TaskChooseOrganization } from "@clerk/nextjs"

export const OrgSelectionView = () => {
  return <TaskChooseOrganization redirectUrlComplete="/" />
}
