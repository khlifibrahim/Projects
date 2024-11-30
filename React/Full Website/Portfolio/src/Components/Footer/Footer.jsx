import { IconBrandYoutube, IconBrandInstagram, IconBrandGithub, IconMail} from '@tabler/icons-react'

function Footer() {
  return (
    <div className='w-full flex justify-between text-neutral-500 pt-8 border-t border-neutral-500'>
        <p>© 2024 All rights reserved.</p>
        <div className="social-media flex gap-4">
            <IconMail/>
            <IconBrandGithub/>
            <IconBrandInstagram/>
            <IconBrandYoutube/>
        </div>
    </div>
  )
}

export default Footer