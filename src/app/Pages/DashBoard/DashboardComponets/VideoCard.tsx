import { AspectRatio } from '@/components/ui/AspectRatio'
import Image from 'next/image'
import React from 'react'

const VideoCard = () => {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted mt-4">
    <Image
      src="/thumbnail.jpg"
      alt="Photo by Drew Beamer"
      fill
      className="h-full w-full rounded-md object-cover"
    />
  </AspectRatio>
  )
}

export default VideoCard