import { AspectRatio } from '@/components/ui/AspectRatio'
import Image from 'next/image'
import React from 'react'

const VideoCard = () => {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted mt-4  rounded-lg">
    <div
    
      className="h-full w-full rounded-md object-cover bg-stale-800"
    />
  </AspectRatio>
  )
}

export default VideoCard