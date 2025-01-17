import { Switch, Typography } from "@ap2p/ui"

const TwoFactorStatus = () => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <Typography as='p' variant='body-2'>
          2FA status
        </Typography>

        <Typography as='p' variant='body-2' className='text-xs'>
          We strongly recommend turning it on to protect your account
        </Typography>
      </div>

      <Switch disabled />
    </div>
  )
}

export { TwoFactorStatus }
