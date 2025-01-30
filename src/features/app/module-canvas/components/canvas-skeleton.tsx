import canvasSkeleton from "assets/images/canvas-skeleton.png"

const CanvasSkeleton = () => {
  return (
    <figure className='size-full'>
      <img
        src={canvasSkeleton}
        alt='canvas-skeleton'
        className='size-full object-cover'
      />
    </figure>
  )
}

export { CanvasSkeleton }
