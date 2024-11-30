import { IconBrandGmail } from "@tabler/icons-react"

function Contact() {
  return (
    <div className="w-full flex justify-between items-center py-12 text-neutral-500">
        <h1 className="text-white font-bold">Let’s <br />
        Work Together - </h1>

        <span className="flex gap-2 px-6 py-2 border border-neutral-500 rounded-xl">
            <IconBrandGmail/>
            me.brahimkhlifi@gmail.com</span>
    </div>
  )
}

export default Contact

