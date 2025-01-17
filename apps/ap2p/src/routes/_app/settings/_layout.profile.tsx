import { Container, Typography } from "@ap2p/ui"
import { createFileRoute } from "@tanstack/react-router"
import { ModuleAvatar } from "features/app/settings/feature-profile/module-avatar"
import { ModulePersonal } from "features/app/settings/feature-profile/module-personal"
import { ModuleSecurity } from "features/app/settings/feature-profile/module-security"

export const Route = createFileRoute("/_app/settings/_layout/profile")({
  component: () => <FeatureProfile />
})

const FeatureProfile = () => {
  return (
    <Container
      as='div'
      variant='withoutStyle'
      className='flex flex-1 flex-col gap-6 px-4 lg:px-8'
    >
      <Typography as='h2' variant='h6'>
        My Profile
      </Typography>

      <ModuleAvatar />

      <ModuleSecurity />

      <ModulePersonal />

      {/* <ModuleDeleteAccount /> */}
    </Container>
  )
}
